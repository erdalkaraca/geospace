import {EDITOR_AREA_MAIN} from "./constants";
import {KPart} from "../parts/k-part";
import {activePartSignal, activeEditorSignal, partDirtySignal} from "./appstate";
import {watchSignal} from "./signals";
import {subscribe} from "./events";
import {TOPIC_WORKSPACE_CONNECTED} from "./filesys";
import {KTabs} from "../parts/k-tabs";
import {TabContribution, IconContribution, contributionRegistry, TOPIC_CONTRIBUTEIONS_CHANGED} from "./contributionregistry";
import {rootContext} from "./di";

export const EVENT_SHOW_EDITOR = "editors/showEditor";

export interface EditorInput {
    key: string;
    editorId: string;
    title: string;
    icon?: string;
    data: any;
    noOverflow?: boolean;
    widgetFactory: (container: any, tab: HTMLElement) => any;
    state: { [key: string]: any };
}

export interface EditorInputHandler {
    canHandle: (input: any) => boolean;
    handle: (input: any) => Promise<EditorInput>;
    ranking?: number;  // Higher ranking = higher priority (default: 0)
}

/**
 * Interface for editors that can provide content, selection, and snippets.
 * Implement this interface to make editor content accessible via commands.
 */
export interface EditorContentProvider {
    /**
     * Gets the complete contents of the editor.
     * @returns The full content as a string, or null if not available.
     */
    getContent(): string | null;

    /**
     * Gets the currently selected text in the editor.
     * @returns The selected text, or null if no selection exists.
     */
    getSelection(): string | null;

    /**
     * Gets a code snippet with n lines before and after the cursor position.
     * @param lines Number of lines before and after the cursor (default: 5).
     * @returns An object containing the snippet, cursor line number, or null if not available.
     */
    getSnippet(lines?: number): { snippet: string; cursorLine: number } | null;

    /**
     * Gets the programming language of the editor content.
     * @returns The language identifier (e.g., 'python', 'javascript'), or null if not available.
     */
    getLanguage(): string | null;

    /**
     * Gets the workspace path of the file being edited.
     * @returns The file path relative to the workspace, or null if not available.
     */
    getFilePath(): string | null;
}

class EditorRegistry {
    private editorInputHandlers: EditorInputHandler[] = [];
    private listenersAttached = false;
    private cachedIconContributions: IconContribution[] | null = null;
    private signalCleanup?: () => void;

    constructor() {
        subscribe(TOPIC_WORKSPACE_CONNECTED, () => {
            // TODO close all editors
        });
        
        subscribe(TOPIC_CONTRIBUTEIONS_CHANGED, (event: any) => {
            if (event.target === 'system.icons') {
                this.cachedIconContributions = null;
            }
        });
    }
    
    private getSortedIconContributions(): IconContribution[] {
        if (this.cachedIconContributions !== null) {
            return this.cachedIconContributions;
        }
        
        const contributions = contributionRegistry.getContributions('system.icons') as IconContribution[];
        
        // Sort by priority (higher priority first), then by label for tie-breaking
        this.cachedIconContributions = [...contributions].sort((a, b) => {
            const priorityA = a.priority ?? 0;
            const priorityB = b.priority ?? 0;
            if (priorityB !== priorityA) {
                // Higher priority comes first (descending order)
                return priorityB - priorityA;
            }
            return a.label.localeCompare(b.label);
        });
        
        return this.cachedIconContributions;
    }

    private setupEventListeners(editorArea: KTabs) {
        if (this.listenersAttached) {
            return;
        }
        this.listenersAttached = true;

        const handler = (event: CustomEvent) => {
            const tabPanel = event.detail
            if (tabPanel) {
                const parts = Array.from(tabPanel.querySelectorAll(`*`)).filter((element): element is KPart => element instanceof KPart)
                parts.forEach((part) => {
                    activePartSignal.set(part)
                    // Only update activeEditorSignal if this is an editor part
                    if ((part as KPart).isEditor) {
                        activeEditorSignal.set(part)
                    }
                })
            }
        }
        // @ts-ignore
        editorArea.addEventListener("tab-shown", handler)

        const closed = (event: CustomEvent) => {
            const tabPanel: HTMLElement = event.detail
            const parts = Array.from(tabPanel.querySelectorAll(`*`)).filter((element): element is KPart => element instanceof KPart)
            parts.forEach((part) => {
                // part.close() will be automatically called by disconnected callback of part
                if (activePartSignal.get() == part) {
                    activePartSignal.set(null as unknown as KPart)
                }
                if (activeEditorSignal.get() == part) {
                    activeEditorSignal.set(null as unknown as KPart)
                }
            })
        }
        // @ts-ignore
        editorArea.addEventListener("tab-closed", closed)

        const dirtyHandler = (targetPart: KPart) => {
            const tabPanel = targetPart.closest("wa-tab-panel") as HTMLElement
            const name = tabPanel.getAttribute("name") as string
            editorArea.markDirty(name, targetPart.isDirty())
        }
        this.signalCleanup = watchSignal(partDirtySignal, dirtyHandler)
    }

    registerEditorInputHandler(editorInputHandler: EditorInputHandler) {
        this.editorInputHandlers.push(editorInputHandler);
        // Sort by ranking (higher ranking first), default ranking is 0
        this.editorInputHandlers.sort((a, b) => (b.ranking ?? 0) - (a.ranking ?? 0));
    }

    async handleInput(input: any) {
        // Handlers are already sorted by ranking, so iterate in order
        for (let i = 0; i < this.editorInputHandlers.length; i++) {
            const editorInputHandler = this.editorInputHandlers[i];
            if (editorInputHandler.canHandle(input)) {
                return await editorInputHandler.handle(input);
            }
        }
    }

    getEditorArea(): KTabs | null {
        return document.querySelector(`k-tabs#${EDITOR_AREA_MAIN}`) as KTabs | null
    }

    async loadEditor(editorInput: EditorInput | any) {
        if (!editorInput) {
            return
        }

        if (!("widgetFactory" in editorInput)) {
            editorInput = await this.handleInput(editorInput)
        }

        if (!editorInput || !("widgetFactory" in editorInput)) {
            return
        }

        const editorArea = this.getEditorArea();
        
        if (!editorArea) {
            console.error("Editor area not found. The split pane system may not be initialized yet.");
            return;
        }

        this.setupEventListeners(editorArea);

        if (editorArea.has(editorInput.key)) {
            editorArea.activate(editorInput.key)
            return
        }

        editorArea.open({
            name: editorInput.key,
            editorId: editorInput.editorId,
            label: editorInput.title,
            icon: editorInput.icon,
            closable: true,
            noOverflow: editorInput.noOverflow,
            component: editorInput.widgetFactory
        } as TabContribution)
    }

    getFileIcon(fileNameOrType: string): string {
        const extension = fileNameOrType.includes('.') 
            ? fileNameOrType.split('.').pop()?.toLowerCase() || ''
            : fileNameOrType.toLowerCase();
        
        const sortedContributions = this.getSortedIconContributions();
        
        if (sortedContributions.length === 0) {
            return 'file';
        }
        
        for (const contribution of sortedContributions) {
            if (contribution.mappings && contribution.mappings[extension]) {
                return contribution.mappings[extension];
            }
        }
        
        return 'file';
    }
}

export const editorRegistry = new EditorRegistry();
rootContext.put("editorRegistry", editorRegistry);

contributionRegistry.registerContribution<IconContribution>('system.icons', {
    label: 'Default File Icons',
    mappings: {
        'pdf': 'file-pdf',
        'md': 'book',
        'txt': 'file-lines',
        'ts': 'code',
        'tsx': 'code',
        'js': 'code',
        'jsx': 'code',
        'json': 'file-code',
        'geojson': 'file-code',
        'py': 'python',
        'html': 'code',
        'htm': 'code',
        'css': 'code',
        'scss': 'code',
        'sass': 'code',
        'xml': 'file-code',
        'yaml': 'file-code',
        'yml': 'file-code',
        'sql': 'database',
        'kml': 'file-code',
        'gpx': 'file-code',
        'jpg': 'image',
        'jpeg': 'image',
        'png': 'image',
        'gif': 'image',
        'svg': 'image',
        'webp': 'image',
        'bmp': 'image',
        'ico': 'image',
    },
    priority: 0
});