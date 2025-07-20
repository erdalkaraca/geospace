import {EDITOR_AREA_MAIN} from "./constants.ts";
import {observeOverflow} from "./k-utils.ts";
import {KPart} from "../parts/k-part.ts";
import {activePartDirtySignal, activePartSignal} from "./appstate.ts";
import {watchSignal} from "./signals.ts";
import {subscribe} from "./events.ts";
import {TOPIC_WORKSPACE_CONNECTED} from "./filesys.ts";

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
}

class EditorRegistry {
    private editorInputHandlers: EditorInputHandler[] = [];

    constructor() {
        document.addEventListener("readystatechange", () => {
            const editorArea = this.getEditorArea()
            const handler = (event: CustomEvent) => {
                const tabPanel = editorArea.querySelector(`:scope>wa-tab-panel[name='${event.detail.name}']`)! as HTMLElement
                if (tabPanel) {
                    const parts = Array.from(tabPanel.querySelectorAll(`*`)).filter(element => element instanceof KPart)
                    parts.forEach((part) => {
                        activePartSignal.set(part)
                    })
                }
            }
            // @ts-ignore
            editorArea.addEventListener("wa-tab-show", handler)

            watchSignal(activePartDirtySignal, (targetPart: KPart) => {
                const tabPanel = targetPart.closest("wa-tab-panel") as HTMLElement
                const name = tabPanel.getAttribute("name") as string
                const tab = editorArea.querySelector(`:scope>wa-tab[panel='${name}']`) as HTMLElement
                if (targetPart.isDirty()) {
                    tab.classList.add("part-dirty")
                } else {
                    tab.classList.remove("part-dirty")
                }
            })
        })
        subscribe(TOPIC_WORKSPACE_CONNECTED, () => {
            // TODO close all editors
        })
    }

    registerEditorInputHandler(editorInputHandler: EditorInputHandler) {
        this.editorInputHandlers.push(editorInputHandler);
    }

    async handleInput(input: any) {
        for (let i = 0; i < this.editorInputHandlers.length; i++) {
            const editorInputHandler = this.editorInputHandlers[i];
            if (editorInputHandler.canHandle(input)) {
                return await editorInputHandler.handle(input);
            }
        }
    }

    getEditorArea() {
        return document.querySelector(`wa-tab-group#${EDITOR_AREA_MAIN}`)! as HTMLElement
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

        const existingEditor = editorArea.querySelector(`:scope>wa-tab[panel='${editorInput.key}']`)
        if (existingEditor) {
            editorArea.setAttribute("active", editorInput.key)
            return
        }

        const closeTab = (event: Event) => {
            event.stopPropagation();
            const tab = (<HTMLElement>event.currentTarget!).parentElement!
            tab.remove();
            const tabPanel = <HTMLElement>editorArea.querySelector(`:scope>*[name='${editorInput.key}']`)
            const parts = Array.from(tabPanel.querySelectorAll(`*`)).filter(element => element instanceof KPart)
            parts.forEach((part) => {
                part.close()
                if (activePartSignal.get() == part) {
                    activePartSignal.set(null as unknown as KPart)
                }
            })
            tabPanel.remove()

            const allRemainingTabs = editorArea.querySelectorAll(":scope>wa-tab")
            if (allRemainingTabs.length > 0) {
                const newActive = allRemainingTabs.item(0).getAttribute("panel")!
                editorArea.setAttribute("active", newActive)
            } else {
                editorArea.removeAttribute("active")
            }
        }

        const doc = new DOMParser().parseFromString(`
            <wa-tab panel="${editorInput.key}">
                <wa-icon name="${editorInput.icon}"></wa-icon>
                ${editorInput.title}
                <wa-button for="${editorInput.key}" tabindex="-1" title="Close editor" appearance="plain" size="small"><wa-icon name="xmark"></wa-icon></wa-button>
            </wa-tab>
            <wa-tab-panel name="${editorInput.key}"></wa-tab-panel>`, "text/html")
        editorArea.append(...doc.body.children);
        editorArea.querySelector(`wa-button[for="${editorInput.key}"]`)!.addEventListener("click", closeTab);

        const tabPanel = editorArea.querySelector(`:scope>wa-tab-panel[name='${editorInput.key}']`)! as HTMLElement
        editorArea.setAttribute("active", editorInput.key)
        await editorInput.widgetFactory(tabPanel)

        if (editorInput.noOverflow === undefined || editorInput.noOverflow) {
            observeOverflow(tabPanel)
        }
    }
}

export const editorRegistry = new EditorRegistry();