import { customElement, property, state } from "lit/decorators.js";
import { KPart } from "@kispace-io/appspace/api";
import { html, css, render } from "lit";
import { EditorInput, editorRegistry } from "@kispace-io/appspace/api";
import { File, FileContentType, toastInfo, toastError, taskService, activeSelectionSignal, aiService } from "@kispace-io/appspace/api";
import type { ChatProvider } from "@kispace-io/appspace/api";
import MATCHING_PROMPT from "./matching-prompt.txt?raw";
import Papa from "papaparse";
import { callOpenAI } from "./tendermatch-extension";

const VALID_MATCH_CATEGORIES = ['perfect', 'good', 'normal', 'bad'] as const;

interface RequirementsMetadata {
    companyProfile?: {
        fileName: string;
        loadedAt: string;
    };
    createdAt?: string;
    updatedAt?: string;
}

interface RequirementsDocument {
    metadata?: RequirementsMetadata;
    requirements: RequirementRow[];
}

const MATCH_CATEGORY_CONFIG: Record<string, { variant: string; label: string; score: number }> = {
    perfect: { variant: 'success', label: 'Perfekt', score: 100 },
    good: { variant: 'brand', label: 'Gut', score: 75 },
    normal: { variant: 'neutral', label: 'Normal', score: 50 },
    bad: { variant: 'danger', label: 'Schlecht', score: 25 }
};

const IMPORTANCE_WEIGHTS: Record<string, number> = {
    'critical': 4,
    'critique': 4,
    'kritisch': 4,
    'high': 3,
    'élevé': 3,
    'hoch': 3,
    'medium': 2,
    'moyen': 2,
    'mittel': 2,
    'low': 1,
    'faible': 1,
    'niedrig': 1
};

function normalizeImportance(importance: string): string {
    return importance.toLowerCase().trim();
}

function getImportanceWeight(importance: string): number {
    const normalized = normalizeImportance(importance);
    return IMPORTANCE_WEIGHTS[normalized] || 2;
}

let dialogContainer: HTMLElement | null = null;

function getDialogContainer(): HTMLElement {
    if (!dialogContainer) {
        dialogContainer = document.getElementById('global-dialog-container');
        if (!dialogContainer) {
            dialogContainer = document.createElement('div');
            dialogContainer.id = 'global-dialog-container';
            document.body.appendChild(dialogContainer);
        }
    }
    return dialogContainer;
}

function isTxtFile(selection: any): boolean {
    return selection instanceof File && selection.getName().toLowerCase().endsWith('.txt');
}

editorRegistry.registerEditorInputHandler({
    canHandle: input => input instanceof File && input.getName().toLowerCase().endsWith(".requirements.json"),
    handle: async (input: File) => {
        const editorInput = {
            title: input.getName(),
            data: input,
            key: input.getName(),
            editorId: "requirements-table-editor",
            icon: "table",
            state: {},
        } as EditorInput
        editorInput.widgetFactory = () => html`
            <k-requirements-table-editor .input=${editorInput}></k-requirements-table-editor>`
        return editorInput;
    },
    ranking: 1000
})

interface RequirementRow {
    id: number;
    source: string;
    description: string;
    importance: string;
    match: string;
}

@customElement('k-requirements-table-editor')
export class KRequirementsTableEditor extends KPart {
    static styles = css`
        .container {
            padding: 20px;
            overflow: hidden;
            background-color: var(--wa-color-surface-default);
        }

        .header {
            margin-bottom: 20px;
        }

        .header h2 {
            color: var(--wa-color-text-normal);
            margin: 0;
        }

        .table {
            width: 100%;
            border-collapse: collapse;
            background-color: var(--wa-color-surface-raised);
        }

        .table-header {
            background-color: var(--wa-color-neutral-fill-quiet);
        }

        .table-header th {
            padding: 12px;
            border: 1px solid var(--wa-color-surface-border);
            color: var(--wa-color-text-normal);
            text-align: left;
        }


        .profile-name-display {
            color: var(--wa-color-text-quiet);
            font-size: 0.85rem;
            font-style: italic;
        }

        .overall-match {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding: 12px;
            background-color: var(--wa-color-surface-raised);
            border-radius: 4px;
            margin-bottom: 20px;
        }

        .overall-match-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }

        .overall-match-left {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 1;
        }

        .overall-match-right {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 8px;
        }

        .overall-match-actions {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .company-profile-info {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .company-profile-label {
            font-size: 0.75rem;
            color: var(--wa-color-text-quiet);
            text-transform: uppercase;
        }

        .company-profile-name {
            font-size: 0.9rem;
            color: var(--wa-color-text-normal);
            font-weight: 500;
        }

        .hint-message {
            padding: 8px 12px;
            background-color: var(--wa-color-info-fill-quiet);
            border: 1px solid var(--wa-color-info-border);
            border-radius: 4px;
            margin-top: 4px;
        }

        .hint-text {
            font-size: 0.875rem;
            color: var(--wa-color-info-text);
        }

        .overall-match-score {
            font-size: 1.5rem;
            font-weight: 600;
        }

        .overall-match-details {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
            font-size: 0.875rem;
            color: var(--wa-color-text-quiet);
        }

        .overall-match-stat {
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .table-cell-id {
            font-family: monospace;
            color: var(--wa-color-text-quiet);
        }

        .table-row {
            background-color: var(--wa-color-surface-raised);
        }

        .table-cell {
            padding: 12px;
            border: 1px solid var(--wa-color-surface-border);
            color: var(--wa-color-text-normal);
        }

        .table-cell-source {
            word-wrap: break-word;
        }

        .table-cell-description {
            word-wrap: break-word;
        }

        .table-cell-importance {
            min-width: 100px;
        }

        .table-cell-match {
            min-width: 300px;
            padding: 12px;
        }

        .match-badges {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            align-items: center;
        }

        .match-badge {
            cursor: pointer;
            user-select: none;
            transition: opacity 0.2s;
        }

        .match-badge:hover {
            opacity: 0.8;
        }

        .loading {
            padding: 20px;
            background-color: var(--wa-color-surface-default);
            color: var(--wa-color-text-normal);
        }


        .matching {
            opacity: 0.7;
        }
    `;

    @property({ attribute: false })
    public input?: EditorInput;

    @state()
    private requirements: RequirementRow[] = [];

    @state()
    private loading = true;

    @state()
    private companyProfileContent?: string;

    @state()
    private companyProfileName?: string;

    @state()
    private matching = false;

    @state()
    private txtFileSelected = false;

    @state()
    private selectedFileName?: string;

    @state()
    private metadata?: RequirementsMetadata;

    protected doClose() {
        this.input = undefined;
        this.requirements = [];
        this.loading = true;
        this.companyProfileContent = undefined;
        this.companyProfileName = undefined;
        this.matching = false;
    }

    protected async doBeforeUI() {
        await this.loadContent();
    }

    protected doInitUI() {
        const updateTxtFileSelected = (selection: any) => {
            this.txtFileSelected = isTxtFile(selection);
            this.selectedFileName = selection instanceof File ? selection.getName() : undefined;
            this.requestUpdate();
        };
        this.watch(activeSelectionSignal, updateTxtFileSelected);
        const selection = activeSelectionSignal.get();
        this.txtFileSelected = isTxtFile(selection);
        this.selectedFileName = selection instanceof File ? selection.getName() : undefined;
    }

    private async loadContent() {
        const data = this.input!.data;

        if (data instanceof File) {
            try {
                const contents = await data.getContents({ contentType: FileContentType.TEXT }) as string;
                
                try {
                    const document: RequirementsDocument = JSON.parse(contents);
                    this.requirements = document.requirements || [];
                    this.metadata = document.metadata;

                    if (this.metadata?.companyProfile) {
                        this.companyProfileName = this.metadata.companyProfile.fileName;
                    }
                } catch {
                    const parseResult = Papa.parse<string[]>(contents, { skipEmptyLines: true, header: false });
                    if (parseResult.data && parseResult.data.length > 0) {
                        const dataRows = parseResult.data.slice(1);
                        this.requirements = dataRows.map((row, index) => ({
                            id: index + 1,
                            source: row[0] || '',
                            description: row[1] || '',
                            importance: row[2] || '',
                            match: row[3] || ''
                        }));
                    }
                }

                this.requirements.forEach((req, index) => {
                    if (!req.id) req.id = index + 1;
                });
            } catch (error) {
                toastError(`Fehler beim Laden der Anforderungsdatei: ${error}`);
            } finally {
                this.loading = false;
            }
        }
    }

    async save() {
        const data = this.input?.data;
        if (!(data instanceof File)) {
            return;
        }

        try {
            if (!this.metadata) {
                this.metadata = {};
            }

            const now = new Date().toISOString();
            if (!this.metadata.createdAt) {
                this.metadata.createdAt = now;
            }
            this.metadata.updatedAt = now;

            if (this.companyProfileName) {
                this.metadata.companyProfile = {
                    fileName: this.companyProfileName,
                    loadedAt: now
                };
            }

            const document: RequirementsDocument = {
                metadata: this.metadata,
                requirements: this.requirements
            };

            await data.saveContents(JSON.stringify(document, null, 2), { contentType: FileContentType.TEXT });
            this.markDirty(false);
            this.requestUpdate();
        } catch (error) {
            toastError(`Fehler beim Speichern der Anforderungsdatei: ${error}`);
            throw error;
        }
    }

    private updateRequirement(index: number, updates: Partial<RequirementRow>) {
        if (Object.keys(updates).some(key => this.requirements[index][key as keyof RequirementRow] !== updates[key as keyof RequirementRow])) {
            this.requirements[index] = { ...this.requirements[index], ...updates };
            this.requirements = [...this.requirements];
            this.markDirty(true);
            this.requestUpdate();
        }
    }

    private onBadgeClick(index: number, category: string) {
        this.updateRequirement(index, { match: category });
    }

    private calculateOverallMatch() {
        if (this.requirements.length === 0) {
            return null;
        }

        const matched = this.requirements.filter(req => req.match && req.match.trim().length > 0);
        if (matched.length === 0) {
            return null;
        }

        let totalWeightedScore = 0;
        let totalWeight = 0;
        const categoryCounts: Record<string, number> = {};

        matched.forEach(req => {
            const matchCategory = req.match.toLowerCase();
            const config = MATCH_CATEGORY_CONFIG[matchCategory];
            const importanceWeight = getImportanceWeight(req.importance);

            if (config) {
                const weightedScore = config.score * importanceWeight;
                totalWeightedScore += weightedScore;
                totalWeight += importanceWeight;

                if (!categoryCounts[matchCategory]) {
                    categoryCounts[matchCategory] = 0;
                }
                categoryCounts[matchCategory]++;
            }
        });

        const overallScore = totalWeight > 0 ? Math.round(totalWeightedScore / totalWeight) : 0;
        const matchedPercentage = Math.round((matched.length / this.requirements.length) * 100);

        return {
            overallScore,
            matchedPercentage,
            matchedCount: matched.length,
            totalCount: this.requirements.length,
            categoryCounts
        };
    }

    private renderMatchBadges(req: RequirementRow, index: number) {
        return html`
            <div class="match-badges">
                ${VALID_MATCH_CATEGORIES.map(category => {
                    const config = MATCH_CATEGORY_CONFIG[category];
                    const isSelected = req.match.toLowerCase() === category.toLowerCase();
                    return html`
                        <wa-badge
                            variant="${config.variant as any}"
                            appearance="${isSelected ? 'filled-outlined' : 'outlined'}"
                            pill
                            class="match-badge"
                            @click="${() => this.onBadgeClick(index, category)}"
                            title="${config.label}">
                            ${config.label}
                        </wa-badge>
                    `;
                })}
            </div>
        `;
    }

    private async selectCompanyProfile() {
        const selection = activeSelectionSignal.get() as File;
        try {
            const profileContent = await selection.getContents({ contentType: FileContentType.TEXT }) as string;
            const profileName = selection.getName();

            const confirmed = await this.showProfileConfirmDialog(profileContent);
            if (!confirmed) return;

            this.companyProfileContent = profileContent;
            this.companyProfileName = profileName;
            
            if (!this.metadata) {
                this.metadata = {};
            }
            this.metadata.companyProfile = {
                fileName: this.companyProfileName,
                loadedAt: new Date().toISOString()
            };
            
            this.markDirty(true);
            this.requestUpdate();

            await this.matchProfileAgainstRequirements();
        } catch (error: any) {
            toastError(`Fehler beim Laden des Unternehmensprofils: ${error.message || error}`);
        }
    }

    private async showProfileConfirmDialog(profileContent: string): Promise<boolean> {
        return new Promise((resolve) => {
            const container = getDialogContainer();
            render(html``, container);
            const cleanup = () => render(html``, container);
            const handleConfirm = () => { cleanup(); resolve(true); };
            const handleCancel = () => { cleanup(); resolve(false); };

            const template = html`
                <wa-dialog label="Unternehmensprofil bestätigen" open @wa-request-close=${handleCancel}>
                    <style>
                        .dialog-content {
                            display: flex;
                            flex-direction: column;
                            gap: 1rem;
                            padding: 1rem;
                            min-width: 500px;
                            max-width: 700px;
                            max-height: 600px;
                        }
                        
                        .dialog-scroller {
                            flex: 1;
                            overflow-y: auto;
                            border: 1px solid var(--wa-color-neutral-border-normal);
                            border-radius: 4px;
                            padding: 12px;
                            background-color: var(--wa-color-surface-default);
                            font-family: monospace;
                            font-size: 0.875rem;
                            white-space: pre-wrap;
                            word-wrap: break-word;
                            color: var(--wa-color-text-normal);
                            max-height: 400px;
                        }
                        
                        .dialog-message {
                            margin-bottom: 0.5rem;
                            color: var(--wa-color-text-normal);
                        }
                        
                        .dialog-actions {
                            display: flex;
                            gap: 0.5rem;
                            justify-content: flex-end;
                            margin-top: 0.5rem;
                        }
                    </style>
                    
                    <div class="dialog-content">
                        <div class="dialog-message">Bitte überprüfen Sie das Unternehmensprofil vor dem Abgleich:</div>
                        <div class="dialog-scroller">${profileContent}</div>
                        
                        <div class="dialog-actions">
                            <wa-button variant="neutral" @click=${handleCancel}>
                                Abbrechen
                            </wa-button>
                            <wa-button variant="brand" @click=${handleConfirm}>
                                Bestätigen
                            </wa-button>
                        </div>
                    </div>
                </wa-dialog>
            `;

            render(template, container);
        });
    }

    private async getOpenAIProvider(): Promise<ChatProvider> {
        const providers = await aiService.getProviders();
        const provider = providers.find((p: { name: string }) => p.name === 'openai');
        if (!provider) {
            throw new Error('OpenAI provider not configured');
        }
        return provider;
    }

    private formatRequirementsForPrompt(): string {
        return this.requirements.map(req => 
            `REQ${req.id}: ${req.description} (Importance: ${req.importance})`
        ).join('\n');
    }

    private async matchProfileAgainstRequirements() {
        if (!this.companyProfileContent) {
            toastError("Bitte wählen Sie zuerst ein Unternehmensprofil aus");
            return;
        }

        if (this.requirements.length === 0) {
            toastError("Keine Anforderungen zum Abgleich vorhanden");
            return;
        }

        this.matching = true;
        this.requestUpdate();

        try {
            const openaiProvider = await this.getOpenAIProvider();
            const requirementsText = this.formatRequirementsForPrompt();
            const prompt = MATCHING_PROMPT
                .replace('{companyProfile}', this.companyProfileContent!)
                .replace('{requirements}', requirementsText);

            await taskService.runAsync("Unternehmensprofil mit Anforderungen abgleichen", async (progress) => {
                progress.message = "Anfrage an GPT-4.1 senden...";
                progress.progress = 30;

                const matchesText = await callOpenAI(openaiProvider, '', prompt);

                progress.message = "Abgleich-Ergebnisse werden verarbeitet...";
                progress.progress = 70;

                progress.message = "Abgleich-Ergebnisse werden aktualisiert...";
                progress.progress = 90;

                const parseResult = Papa.parse<string[]>(matchesText, { skipEmptyLines: true, header: false });
                const matchesMap = new Map<string, string>();
                
                parseResult.data.forEach(row => {
                    const reqId = row[0]?.trim();
                    const matchCategory = row[1]?.trim().toLowerCase();
                    if (reqId && matchCategory && VALID_MATCH_CATEGORIES.includes(matchCategory as any)) {
                        matchesMap.set(reqId, matchCategory);
                    }
                });

                this.requirements.forEach((req, index) => {
                    const matchCategory = matchesMap.get(`REQ${req.id}`);
                    if (matchCategory) {
                        this.updateRequirement(index, { match: matchCategory });
                    }
                });

                progress.progress = 100;
            });

            toastInfo('Unternehmensprofil erfolgreich mit Anforderungen abgeglichen');
        } catch (error) {
            toastError(`Fehler beim Abgleich des Unternehmensprofils: ${error}`);
        } finally {
            this.matching = false;
            this.requestUpdate();
        }
    }

    protected render() {
        if (this.loading) {
            return html`<div class="loading">Anforderungen werden geladen...</div>`;
        }

        const overallMatch = this.calculateOverallMatch();

        return html`
            <div class="container">
                <div class="header">
                    <h2>Anforderungen</h2>
                </div>
                <div class="overall-match">
                    <div class="overall-match-header">
                        <div class="overall-match-left">
                            ${overallMatch ? html`
                                <span class="overall-match-score">Gesamtübereinstimmung: ${overallMatch.overallScore}%</span>
                                <wa-badge variant="${overallMatch.overallScore >= 75 ? 'success' : overallMatch.overallScore >= 50 ? 'brand' : overallMatch.overallScore >= 25 ? 'neutral' : 'danger'}" pill>
                                    ${overallMatch.matchedCount}/${overallMatch.totalCount} bewertet
                                </wa-badge>
                            ` : html`
                                <span class="overall-match-score">Anforderungen</span>
                            `}
                            ${this.metadata?.companyProfile ? html`
                                <div class="company-profile-info">
                                    <span class="company-profile-label">Unternehmensprofil</span>
                                    <span class="company-profile-name">${this.metadata.companyProfile.fileName}</span>
                                </div>
                            ` : this.companyProfileName ? html`
                                <div class="company-profile-info">
                                    <span class="company-profile-label">Unternehmensprofil</span>
                                    <span class="company-profile-name">${this.companyProfileName}</span>
                                </div>
                            ` : html`
                                <div class="hint-message">
                                    <span class="hint-text">Wählen Sie ein Unternehmensprofil (.txt-Datei) im Dateibrowser aus und klicken Sie dann auf die Datei-Schaltfläche, um es mit den Anforderungen abzugleichen</span>
                                </div>
                            `}
                        </div>
                        <div class="overall-match-right">
                            <div class="overall-match-actions">
                                <k-command
                                    variant="warning"
                                    appearance="outlined"
                                    size="large"
                                    icon="file"
                                    title="Unternehmensprofil aus aktiver Auswahl wählen"
                                    ?disabled="${!this.txtFileSelected || this.matching}"
                                    .action="${() => this.selectCompanyProfile()}">
                                </k-command>
                                ${this.matching ? html`
                                    <span class="company-profile-name">Abgleich läuft...</span>
                                ` : ''}
                            </div>
                            ${this.selectedFileName && !this.matching ? html`
                                <span class="company-profile-name">${this.selectedFileName}</span>
                            ` : ''}
                        </div>
                    </div>
                    ${overallMatch ? html`
                        <div class="overall-match-details">
                            ${VALID_MATCH_CATEGORIES.map(category => {
                                const count = overallMatch.categoryCounts[category] || 0;
                                if (count === 0) return null;
                                const config = MATCH_CATEGORY_CONFIG[category];
                                return html`
                                    <div class="overall-match-stat">
                                        <wa-badge variant="${config.variant as any}" pill>${count}</wa-badge>
                                        <span>${config.label}</span>
                                    </div>
                                `;
                            })}
                        </div>
                    ` : ''}
                </div>
                <table class="table ${this.matching ? 'matching' : ''}">
                    <thead>
                            <tr class="table-header">
                                <th class="table-cell-id">ID</th>
                                <th>Quelle im Markdown</th>
                                <th>Kurzbeschreibung der Anforderung</th>
                                <th>Wichtigkeit</th>
                                <th class="match-header">Übereinstimmung</th>
                            </tr>
                    </thead>
                    <tbody>
                        ${this.requirements.map((req, index) => html`
                            <tr class="table-row">
                                <td class="table-cell table-cell-id">REQ${req.id}</td>
                                <td class="table-cell table-cell-source">${req.source}</td>
                                <td class="table-cell table-cell-description">${req.description}</td>
                                <td class="table-cell table-cell-importance">${req.importance}</td>
                                <td class="table-cell table-cell-match">
                                    ${this.renderMatchBadges(req, index)}
                                </td>
                            </tr>
                        `)}
                    </tbody>
                </table>
            </div>
        `;
    }
}

