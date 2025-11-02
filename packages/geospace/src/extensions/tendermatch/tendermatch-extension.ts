import {
    registerAll,
    File,
    FileContentType,
    Directory,
    activeSelectionSignal,
    toastInfo,
    toastError,
    workspaceService,
    taskService,
    editorRegistry,
    aiService
} from "@kispace/appspace/api";
import type { ChatProvider } from "@kispace/appspace/api";
import "./requirements-table-editor";
import REQUIREMENTS_PROMPT from "./requirements-prompt.txt?raw";
import CONSOLIDATION_PROMPT from "./consolidation-prompt.txt?raw";
import Papa from "papaparse";

const MAX_CHUNK_SIZE = 8000;

type Requirement = { id: number; source: string; description: string; importance: string; match: string };

interface ChunkWithContext {
    content: string;
    sectionPath: string[];
    startLine: number;
    endLine: number;
}

function splitMarkdownByHeaders(markdown: string, maxChunkSize: number = MAX_CHUNK_SIZE): ChunkWithContext[] {
    const lines = markdown.split('\n');
    const chunks: ChunkWithContext[] = [];
    let currentChunk: string[] = [];
    let currentSize = 0;
    let currentSectionPath: string[] = [];
    let chunkStartLine = 0;
    let paragraphNumber = 0;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const isHeader = /^#{1,6}\s/.test(line);
        const lineSize = line.length + 1;
        const isEmptyLine = line.trim().length === 0;

        if (isHeader) {
            const headerLevel = line.match(/^(#{1,6})/)?.[1].length || 0;
            const headerText = line.replace(/^#{1,6}\s*/, '').trim();
            
            currentSectionPath = currentSectionPath.slice(0, headerLevel - 1);
            currentSectionPath[headerLevel - 1] = headerText;
            currentSectionPath = currentSectionPath.slice(0, headerLevel);
            paragraphNumber = 0;

            if (currentChunk.length > 0 && currentSize + lineSize > maxChunkSize) {
                chunks.push({
                    content: currentChunk.join('\n'),
                    sectionPath: [...currentSectionPath.slice(0, -1)],
                    startLine: chunkStartLine,
                    endLine: i - 1
                });
                currentChunk = [line];
                currentSize = lineSize;
                chunkStartLine = i;
                paragraphNumber = 0;
            } else {
                currentChunk.push(line);
                currentSize += lineSize;
            }
        } else {
            if (!isEmptyLine && currentChunk.length > 0) {
                paragraphNumber++;
            }
            
            currentChunk.push(line);
            currentSize += lineSize;

            if (currentSize > maxChunkSize && currentChunk.length > 1) {
                const lastLine = currentChunk.pop()!;
                if (currentChunk.length > 0) {
                    chunks.push({
                        content: currentChunk.join('\n'),
                        sectionPath: [...currentSectionPath],
                        startLine: chunkStartLine,
                        endLine: i - 1
                    });
                }
                currentChunk = [lastLine];
                currentSize = lastLine.length + 1;
                chunkStartLine = i;
                paragraphNumber = isEmptyLine || lastLine.trim().length === 0 ? 0 : 1;
            }
        }
    }

    if (currentChunk.length > 0) {
        chunks.push({
            content: currentChunk.join('\n'),
            sectionPath: [...currentSectionPath],
            startLine: chunkStartLine,
            endLine: lines.length - 1
        });
    }

    return chunks.filter(chunk => chunk.content.trim().length > 0);
}

function formatSectionPath(sectionPath: string[]): string {
    if (sectionPath.length === 0) {
        return "Document";
    }
    
    const parts = sectionPath.map((section, index) => {
        if (index === 0) {
            return `Chapter ${index + 1}: ${section}`;
        } else if (index === 1) {
            return `Section ${index}: ${section}`;
        } else {
            return `Subsection ${index}: ${section}`;
        }
    });
    
    return parts.join(" > ");
}

async function extractErrorMessage(response: Response): Promise<string> {
    let errorMessage = `API request failed with status ${response.status}: ${response.statusText}`;
    try {
        const errorData = await response.json();
        if (errorData.error?.message) {
            errorMessage = errorData.error.message;
        } else if (errorData.message) {
            errorMessage = errorData.message;
        }
    } catch {
        const errorText = await response.text().catch(() => '');
        if (errorText && !errorText.includes('<!DOCTYPE')) {
            errorMessage = errorText.substring(0, 200);
        }
    }
    return errorMessage;
}

export async function callOpenAI(
    provider: ChatProvider,
    systemPrompt: string,
    userContent: string
): Promise<string> {
    const response = await fetch(provider.chatApiEndpoint, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${provider.apiKey}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            model: 'gpt-4.1',
            stream: false,
            temperature: 0,
            messages: systemPrompt 
                ? [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: userContent }
                ]
                : [{ role: 'user', content: userContent }],
            ...provider.parameters
        })
    });

    if (response.status !== 200) {
        const errorMessage = await extractErrorMessage(response);
        throw new Error(`OpenAI API request failed: ${errorMessage}`);
    }

    const result = await response.json();

    if (!result.choices || !Array.isArray(result.choices) || result.choices.length === 0) {
        throw new Error('Invalid OpenAI response format: missing choices array');
    }

    const content = result.choices[0]?.message?.content;

    if (!content || content.trim().length === 0) {
        throw new Error('No content found in AI response');
    }

    return content;
}

function parseCSVToRequirements(csvText: string): Requirement[] {
    const parseResult = Papa.parse<string[]>(csvText.trim(), { 
        skipEmptyLines: true, 
        header: false
    });

    const requirements: Requirement[] = [];
    let id = 1;

    parseResult.data.forEach((row: string[]) => {
        if (row.length >= 3) {
            const source = (row[0] || '').trim();
            const description = (row[1] || '').trim();
            const importance = (row[2] || '').trim();
            
            if (source && description && importance) {
                requirements.push({
                    id: id++,
                    source,
                    description,
                    importance,
                    match: ''
                });
            }
        }
    });

    return requirements;
}

function reassignRequirementIds(requirements: Requirement[]): Requirement[] {
    return requirements.map((req, index) => ({
        ...req,
        id: index + 1
    }));
}

async function getProvider(providerName: string): Promise<ChatProvider> {
    const providers = await aiService.getProviders();
    const provider = providers.find((p: { name: string }) => p.name === providerName);
    if (!provider) {
        throw new Error(`${providerName} provider not configured`);
    }
    return provider;
}

async function consolidateRequirements(
    requirements: Requirement[],
    openaiProvider: ChatProvider,
    progress: { message: string; progress: number }
): Promise<Requirement[]> {
    if (requirements.length === 0) {
        return [];
    }

    if (requirements.length <= 10) {
        return reassignRequirementIds(requirements);
    }

    const csvInput = requirements.map(req => {
        const source = req.source.replace(/"/g, '""');
        const description = req.description.replace(/"/g, '""');
        const importance = req.importance.replace(/"/g, '""');
        return `"${source}","${description}","${importance}"`;
    }).join('\n');

    progress.message = "Anforderungen werden an KI zur Konsolidierung gesendet...";
    progress.progress = 85;

    try {
        const consolidatedText = await callOpenAI(openaiProvider, CONSOLIDATION_PROMPT, csvInput);
        
        progress.message = "Konsolidierte Anforderungen werden geparst...";
        progress.progress = 90;

        const consolidated = parseCSVToRequirements(consolidatedText);
        return consolidated.length > 0 ? consolidated : reassignRequirementIds(requirements);
    } catch (error) {
        console.warn(`Consolidation failed, using deduplicated requirements: ${error}`);
        return reassignRequirementIds(requirements);
    }
}

async function processChunk(
    chunkWithContext: ChunkWithContext,
    chunkIndex: number,
    totalChunks: number,
    openaiProvider: ChatProvider,
    progress: { message: string; progress: number }
): Promise<string> {
    progress.message = `Abschnitt ${chunkIndex + 1} von ${totalChunks} wird verarbeitet...`;
    progress.progress = 40 + (chunkIndex / totalChunks) * 30;

    const sectionReference = formatSectionPath(chunkWithContext.sectionPath);
    const userContent = `Document location: ${sectionReference} (Lines ${chunkWithContext.startLine + 1}-${chunkWithContext.endLine + 1})\n\n${chunkWithContext.content}`;

    try {
        return await callOpenAI(openaiProvider, REQUIREMENTS_PROMPT, userContent);
    } catch (error) {
        throw new Error(`Chunk ${chunkIndex + 1} (${sectionReference}) failed: ${error}`);
    }
}

interface PipelineStep {
    name: string;
    outputFileName: string;
    dependencies?: string[];
    execute: (inputs: Map<string, File | Directory>) => Promise<void>;
}

async function executeStep(
    step: PipelineStep,
    scansDir: Directory,
    inputs: Map<string, File | Directory>
): Promise<File | null> {
    const outputFile = await scansDir.getResource(step.outputFileName);
    if (outputFile instanceof File) {
        toastInfo(`${step.name} wird übersprungen: ${step.outputFileName} existiert bereits`);
        return outputFile;
    }

    if (step.dependencies) {
        for (const dep of step.dependencies) {
            const depFile = await scansDir.getResource(dep);
            if (!(depFile instanceof File)) {
                throw new Error(`Dependency missing for ${step.name}: ${dep} not found`);
            }
            inputs.set(dep, depFile);
        }
    }

    await step.execute(inputs);

    const createdFile = await scansDir.getResource(step.outputFileName);
    if (!(createdFile instanceof File)) {
        throw new Error(`${step.name} failed: ${step.outputFileName} was not created`);
    }

    return createdFile;
}

async function processPdfWithOCR(
    pdfFile: File,
    scansDir: Directory,
    markdownFileName: string
): Promise<void> {
    const mistralProvider = await getProvider('mistral');

    if (!mistralProvider.ocrApiEndpoint) {
        throw new Error('Mistral provider with OCR endpoint not configured');
    }

    const ocrEndpoint = mistralProvider.ocrApiEndpoint;

    await taskService.runAsync("Ausschreibungsdokument wird verarbeitet", async (progress) => {
        progress.message = "PDF-Datei wird gelesen...";
        progress.progress = 10;

        const pdfBlob = await pdfFile.getContents({ blob: true }) as Blob;

        progress.message = "Wird in Base64 konvertiert...";
        progress.progress = 20;

        const base64Pdf = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result as string;
                const base64 = result.split(',')[1];
                resolve(base64);
            };
            reader.onerror = reject;
            reader.readAsDataURL(pdfBlob);
        });

        progress.message = "Wird an Mistral OCR gesendet...";
        progress.progress = 40;

        const response = await fetch(ocrEndpoint, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${mistralProvider.apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'mistral-ocr-latest',
                document: {
                    type: 'document_url',
                    document_url: `data:application/pdf;base64,${base64Pdf}`
                },
                include_image_base64: false
            })
        });

        if (response.status !== 200) {
            const errorMessage = await extractErrorMessage(response);
            throw new Error(`OCR request failed: ${errorMessage}`);
        }

        progress.message = "OCR-Antwort wird verarbeitet...";
        progress.progress = 70;

        const result = await response.json();

        if (!result.pages || !Array.isArray(result.pages)) {
            throw new Error('Invalid OCR response format: missing pages array');
        }

        const markdown = result.pages
            .map((page: any) => page?.markdown || '')
            .join('\n\n');

        if (!markdown || markdown.trim().length === 0) {
            throw new Error('No markdown content found in OCR response');
        }

        progress.message = "Markdown-Datei wird gespeichert...";
        progress.progress = 90;

        const markdownFile = await scansDir.getResource(markdownFileName, { create: true }) as File;
        await markdownFile.saveContents(markdown, { contentType: FileContentType.TEXT });

        progress.progress = 100;
        toastInfo(`Ausschreibungsdokument verarbeitet: ${markdownFileName} nach scans/ gespeichert`);
    });
}

async function extractRequirements(
    markdownFile: File,
    scansDir: Directory,
    requirementsFileName: string
): Promise<File> {
    let requirementsFile: File | null = null;
    
    await taskService.runAsync("Anforderungen werden extrahiert", async (progress) => {
        progress.message = "Markdown-Datei wird gelesen...";
        progress.progress = 10;

        const markdownContent = await markdownFile.getContents({ contentType: FileContentType.TEXT }) as string;
        if (!markdownContent || markdownContent.trim().length === 0) {
            throw new Error('Markdown file is empty');
        }

        progress.message = "OpenAI-Provider wird abgerufen...";
        progress.progress = 15;

        const openaiProvider = await getProvider('openai');

        progress.message = "Markdown wird in Abschnitte aufgeteilt...";
        progress.progress = 20;

        const chunks = splitMarkdownByHeaders(markdownContent, MAX_CHUNK_SIZE);
        
        if (chunks.length === 0) {
            throw new Error('Failed to split markdown into chunks');
        }

        progress.message = `${chunks.length} Abschnitt(e) werden verarbeitet...`;
        progress.progress = 25;

        const chunkResults: string[] = [];

        for (let i = 0; i < chunks.length; i++) {
            try {
                const chunkRequirements = await processChunk(
                    chunks[i],
                    i,
                    chunks.length,
                    openaiProvider,
                    progress
                );
                chunkResults.push(chunkRequirements);
            } catch (error) {
                throw new Error(`Failed to process chunk ${i + 1}: ${error}`);
            }
        }

        progress.message = "Ergebnisse werden kombiniert...";
        progress.progress = 75;

        const requirements: Requirement[] = [];
        chunkResults.forEach(result => {
            const parsed = parseCSVToRequirements(result);
            requirements.push(...parsed);
        });

        progress.message = "Anforderungen werden mit KI konsolidiert...";
        progress.progress = 80;

        const consolidatedRequirements = await consolidateRequirements(
            requirements,
            openaiProvider,
            progress
        );

        const document = {
            metadata: {
                createdAt: new Date().toISOString()
            },
            requirements: consolidatedRequirements
        };

        progress.message = "Anforderungsdatei wird gespeichert...";
        progress.progress = 90;

        const savedFile = await scansDir.getResource(requirementsFileName, { create: true }) as File;
        await savedFile.saveContents(JSON.stringify(document, null, 2), { contentType: FileContentType.TEXT });

        progress.progress = 100;
        const originalCount = requirements.length;
        const finalCount = consolidatedRequirements.length;
        const removedCount = originalCount - finalCount;
        const message = removedCount > 0 
            ? `Anforderungen aus ${chunks.length} Abschnitt(en) extrahiert: ${finalCount} eindeutige Anforderungen (${removedCount} Duplikate durch KI-Konsolidierung entfernt): ${requirementsFileName} nach scans/ gespeichert`
            : `Anforderungen aus ${chunks.length} Abschnitt(en) extrahiert: ${finalCount} Anforderungen: ${requirementsFileName} nach scans/ gespeichert`;
        toastInfo(message);

        requirementsFile = savedFile;
    });

    return requirementsFile!;
}

registerAll({
    command: {
        id: "tendermatch.participate",
        name: "An Ausschreibung teilnehmen",
        description: "Interesse zur Teilnahme an diesem Ausschreibungsdokument registrieren",
        parameters: []
    },
    handler: {
        canExecute: () => {
            const selection = activeSelectionSignal.get();
            if (!(selection instanceof File)) {
                return false;
            }
            return selection.getName().toLowerCase().endsWith('.pdf');
        },
        execute: async () => {
            const selection = activeSelectionSignal.get() as File;
            const fileName = selection.getName();
            const markdownFileName = `${fileName}.md`;
            const requirementsFileName = `${fileName}.requirements.json`;

            const workspaceDir = await workspaceService.getWorkspace();
            if (!workspaceDir) {
                toastError("Kein Arbeitsbereich ausgewählt");
                return;
            }

            const scansDir = await workspaceDir.getResource('scans/', { create: true }) as Directory;
            if (!scansDir) {
                throw new Error('Failed to create scans directory');
            }

            const inputs = new Map<string, File | Directory>();
            inputs.set('pdfFile', selection);
            inputs.set('scansDir', scansDir);

            const pipeline: PipelineStep[] = [
                {
                    name: 'OCR Processing',
                    outputFileName: markdownFileName,
                    execute: async (inputs) => {
                        const pdfFile = inputs.get('pdfFile') as File;
                        await processPdfWithOCR(pdfFile, scansDir, markdownFileName);
                    }
                },
                {
                    name: 'Requirements Extraction',
                    outputFileName: requirementsFileName,
                    dependencies: [markdownFileName],
                    execute: async (inputs) => {
                        const markdownFile = inputs.get(markdownFileName) as File;
                        const requirementsFile = await extractRequirements(markdownFile, scansDir, requirementsFileName);
                        inputs.set(requirementsFileName, requirementsFile);
                    }
                }
            ];

            try {
                for (const step of pipeline) {
                    const outputFile = await executeStep(step, scansDir, inputs);
                    if (outputFile) {
                        inputs.set(step.outputFileName, outputFile);
                    }
                }

                const requirementsFile = inputs.get(requirementsFileName) as File;
                if (requirementsFile) {
                    setTimeout(() => {
                        editorRegistry.loadEditor(requirementsFile).catch((error) => {
                            console.error('Failed to open editor:', error);
                        });
                    }, 100);
                }
            } catch (error) {
                toastError(`Pipeline fehlgeschlagen: ${error}`);
                throw error;
            } finally {
                workspaceDir.touch();
            }
        }
    },
    contribution: {
        target: "contextmenu:filebrowser",
        icon: "handshake",
        label: "Als Ausschreibung verarbeiten",
        disabled: () => {
            const selection = activeSelectionSignal.get();
            if (!(selection instanceof File)) {
                return true;
            }
            return !selection.getName().toLowerCase().endsWith('.pdf');
        }
    }
});
