import {EDITOR_AREA_MAIN} from "./constants.ts";
import {KPart} from "../parts/k-part.ts";
import {activeEditorSignal, activePartSignal, partDirtySignal} from "./appstate.ts";
import {watchSignal} from "./signals.ts";
import {subscribe} from "./events.ts";
import {TOPIC_WORKSPACE_CONNECTED} from "./filesys.ts";
import {KTabs} from "../parts/k-tabs.ts";
import {TabContribution} from "./contributionregistry.ts";
import {rootContext} from "./di.ts";

export const EVENT_SHOW_EDITOR = "editors/showEditor";

export interface EditorInput {
    key: string;
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

class EditorRegistry {
    private editorInputHandlers: EditorInputHandler[] = [];


    constructor() {
        document.addEventListener("readystatechange", () => {
            const editorArea = this.getEditorArea()
            const handler = (event: CustomEvent) => {
                const tabPanel = event.detail
                if (tabPanel) {
                    const parts = Array.from(tabPanel.querySelectorAll(`*`)).filter(element => element instanceof KPart)
                    parts.forEach((part) => {
                        activePartSignal.set(part)
                        activeEditorSignal.set(part)
                    })
                }
            }
            // @ts-ignore
            editorArea.addEventListener("tab-shown", handler)

            const closed = (event: CustomEvent) => {
                const tabPanel: HTMLElement = event.detail
                const parts = Array.from(tabPanel.querySelectorAll(`*`)).filter(element => element instanceof KPart)
                parts.forEach((part) => {
                    // part.close() will be automatically called by disconnected callback of part
                    if (activePartSignal.get() == part) {
                        activePartSignal.set(null as unknown as KPart)
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
            watchSignal(partDirtySignal, dirtyHandler)
        })
        subscribe(TOPIC_WORKSPACE_CONNECTED, () => {
            // TODO close all editors
        })
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

    getEditorArea(): KTabs {
        return document.querySelector(`k-tabs#${EDITOR_AREA_MAIN}`)! as KTabs
    }

    async loadEditor(editorInput: EditorInput | any) {
        if (!editorInput) {
            return // silently
        }

        if (!("widgetFactory" in editorInput)) {
            // adapt to EditorInput
            editorInput = await this.handleInput(editorInput)
        }

        if (!editorInput || !("widgetFactory" in editorInput)) {
            return // silently
        }

        const editorArea = this.getEditorArea()

        if (editorArea.has(editorInput.key)) {
            editorArea.activate(editorInput.key)
            return
        }

        editorArea.open({
            name: editorInput.key,
            label: editorInput.title,
            icon: editorInput.icon,
            closable: true,
            noOverflow: editorInput.noOverflow,
            component: editorInput.widgetFactory
        } as TabContribution)
    }
}

export const editorRegistry = new EditorRegistry();
rootContext.put("editorRegistry", editorRegistry);