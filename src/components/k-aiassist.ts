import {css, html} from 'lit'
import {customElement, state} from 'lit/decorators.js'
import {KPart} from "../parts/k-part.ts";

import {marked} from "marked";
import {unsafeHTML} from 'lit/directives/unsafe-html.js';
import {
    ChatContext,
    ChatMessage,
    ChatProvider,
    chatService,
    defaultChatContext,
    TOPIC_AICONFIG_CHANGED
} from "../core/chatservice.ts";
import {toastError} from "../core/toast.ts";
import {createRef, ref} from "lit/directives/ref.js";
import {observeOverflow} from "../core/k-utils.ts";
import {when} from "lit/directives/when.js";
import {topic} from "../core/events.ts";
import {watching} from "../core/signals.ts";
import {activePartSignal} from "../core/appstate.ts";
import {taskService} from "../core/taskservice.ts";

@customElement('k-ai-assist')
export class KAIAssist extends KPart {
    @state()
    private chatContext: ChatContext = defaultChatContext
    @state()
    private commandsHistory: string[] = []
    @state()
    private providers?: ChatProvider[]
    @state()
    private defaultProvider?: ChatProvider
    @state()
    private busy: boolean = false

    private containerRef = createRef<HTMLElement>();

    @topic(TOPIC_AICONFIG_CHANGED)
    public onAIConfigChanged() {
        this.doBeforeUI()
    }

    @watching(activePartSignal)
    public onPartChanged(part: KPart) {
        if (part && "chatContext" in part) {
            this.chatContext = part.chatContext as ChatContext;
        } else {
            this.chatContext = defaultChatContext
        }
    }

    protected doBeforeUI() {
        //this.chatHistory.push(...dummyMessages, ...dummyMessages)
        chatService.getCommandsHistory().then(history => {
            this.commandsHistory = history || []
        })
        chatService.getProviders().then((providers: ChatProvider[]) => {
            this.providers = providers || []
        })
        chatService.getDefaultProvider().then(defaultProvider => {
            this.defaultProvider = defaultProvider
        })
    }

    protected doInitUI() {
        observeOverflow(this.containerRef.value!)
    }

    private async onHandlePrompt(event: Event) {
        event.stopPropagation()
        // @ts-ignore
        const prompt = event.target.value
        // @ts-ignore
        event.target.select()
        // @ts-ignore
        event.target.setRangeText("")
        this.handlePrompt(prompt)
    }

    public handlePrompt(prompt: string) {
        const message = chatService.createMessage(prompt)
        this.chatContext.history.push(message)
        this.requestUpdate()
        this.busy = true

        taskService.runAsync("Calling AI assistant", _progress => chatService.handleUserPrompt(message, {chatContext: this.chatContext}).then(_message => {
            this.requestUpdate()
        })).catch((error: Response) => {
            toastError(`${error}`)
        }).finally(() => {
            this.busy = false
        })
    }

    private onRunCommand(event: Event) {
        // @ts-ignore
        this.handlePrompt("/" + event.currentTarget.value)
    }

    private async onChangeDefaultProvider(event: CustomEvent) {
        // @ts-ignore
        this.defaultProvider = await chatService.setDefaultProvider(event.currentTarget!.value)
    }

    render() {
        return html`
            <wa-input
                    placeholder="${this.chatContext.label}: ${this.chatContext.userHelp}"
                    title=${this.chatContext.userHelp}
                    @change=${this.onHandlePrompt}>
                <wa-icon slot="start" name="${this.chatContext.icon}"></wa-icon>

                <wa-dropdown slot="end">
                    <wa-button slot="trigger" appearance="plain" size="small">
                        <wa-icon name="ellipsis-vertical"></wa-icon>
                    </wa-button>
                    <wa-dropdown-item>
                        Default Provider
                        ${when(this.providers, () => this.providers!.map(provider => html`
                            <wa-dropdown-item slot="submenu" type="checkbox"
                                              value="${provider.name}"
                                              ?checked="${provider.name == this.defaultProvider?.name}"
                                              @click="${this.onChangeDefaultProvider}">
                                ${provider.name}
                            </wa-dropdown-item>
                        `))}
                    </wa-dropdown-item>
                    <wa-divider></wa-divider>
                    <wa-dropdown-item>
                        Commands History
                        ${this.commandsHistory.slice(-5).map(command => html`
                            <wa-dropdown-item slot="submenu" @click=${this.onRunCommand} value="${command}">${command}
                            </wa-dropdown-item>
                        `)}
                    </wa-dropdown-item>
                </wa-dropdown>
            </wa-input>
            ${when(!this.defaultProvider, () => html`
                <k-no-content message="Select a provider."></k-no-content>`)}
            <div class="container" ${ref(this.containerRef)}}>
                ${when(this.busy, () => html`
                    <wa-card>
                        <wa-animation name="flip" duration="2000" play>
                            <wa-icon name="robot"></wa-icon>
                        </wa-animation>
                        <span>Waiting for reply...</span>
                    </wa-card>
                `)}
                ${this.chatContext.history.map((chat: ChatMessage) => {
                    return html`
                        <wa-card class="${chat.role}">
                            <wa-icon slot="image" name=${chat.role == "user" ? "user" : "robot"}></wa-icon>
                            ${unsafeHTML(marked.parse(chat.content) as string)}
                        </wa-card>
                    `
                }).reverse()}
            </div>
        `
    }

    static styles = css`
        :host {
        }

        p, pre {
            margin: 0;
            white-space: break-spaces;
        }

        wa-card {
            padding: 0;
            margin: 0.5rem;
            overflow: auto;
            word-break: break-word;
        }

        wa-card::part(body) {
            --spacing: 0.5rem;
        }

        wa-card.user {
            background-color: var(--wa-color-neutral-fill-normal)
        }

        wa-card.assistant {
            background-color: var(--wa-color-neutral-fill-quiet)
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'k-ai-assist': KAIAssist
    }
}