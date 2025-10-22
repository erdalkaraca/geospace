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
    ID_COMMANDS_HISTORY,
    TOPIC_AICONFIG_CHANGED
} from "../core/chatservice.ts";
import {toastError} from "../core/toast.ts";
import {createRef, ref} from "lit/directives/ref.js";
import {observeOverflow} from "../core/k-utils.ts";
import {when} from "lit/directives/when.js";
import {topic} from "../core/events.ts";
import {taskService} from "../core/taskservice.ts";
import {activeEditorSignal, activePartSignal} from "../core/appstate.ts";
import {
    commandRegistry as globalCommandRegistry,
    CommandRegistry,
    commandRegistry,
    ExecutionContext
} from "../core/commandregistry.ts";
import {persistenceService} from "../core/persistenceservice.ts";
import {uiContext} from "../core/di.ts";
import {watching} from "../core/signals.ts";

@customElement('k-aiassist')
export class KAIAssist extends KPart {
    private defaultChatContext: ChatContext = {
        history: []
    }

    @state()
    private chatContext: ChatContext = this.defaultChatContext

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
    protected onPartChanged(part: KPart) {
        if (!!part && "chatContext" in part) {
            this.chatContext = part.chatContext as ChatContext
        } else {
            this.chatContext = this.defaultChatContext
        }
    }

    protected doBeforeUI() {
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
        await this.handlePrompt(prompt)
    }

    async getCommandsHistory(): Promise<string[]> {
        return persistenceService.getObject(ID_COMMANDS_HISTORY).then(h => h || [])
    }

    async runCommand(prompt: string, commandRegistry?: CommandRegistry) {
        const currentCommandRegistry = commandRegistry || globalCommandRegistry
        const splits = prompt.trim().split(/\s+/)
        if (splits.length > 0) {
            const commandId = splits.shift()!
            const command = currentCommandRegistry.getCommand(commandId)
            if (!command) {
                toastError("Command not found: " + commandId)
            }
            const params = {}
            splits.forEach((c, i) => {
                // @ts-ignore
                params[command.parameters[i].name] = c
            })
            const context: ExecutionContext = {
                source: this,
                params: params
            }
            currentCommandRegistry.execute(commandId, context)
            this.requestUpdate()
        }
    }

    public async handlePrompt(prompt: string) {
        if (prompt && prompt.trim().startsWith("/")) {
            await this.runCommand(prompt.substring(1), commandRegistry);
            return
        }

        const message = chatService.createMessage(prompt)
        this.chatContext.history.push(message)
        this.requestUpdate()
        this.busy = true

        const callContext = uiContext.createChild({
            activePart: activePartSignal.get(),
            activeEditor: activeEditorSignal.get()
        })
        taskService.runAsync("Calling AI assistant", _progress => chatService.handleUserPrompt({
            chatContext: this.chatContext,
            callContext: callContext
        }).then(_message => {
            this.requestUpdate()
        })).catch((error: Response) => {
            toastError(`${error}`)
        }).finally(() => {
            this.busy = false
            callContext.destroy()
        })
    }

    private async onChangeDefaultProvider(event: CustomEvent) {
        // @ts-ignore
        this.defaultProvider = await chatService.setDefaultProvider(event.currentTarget!.value)
    }

    render() {

        return html`
            ${when(!this.defaultProvider, () => html`
                <k-no-content message="Select a provider."></k-no-content>`)}
            <div class="chat-messages" ${ref(this.containerRef)}}>
                ${this.chatContext.history.map((message: ChatMessage) => {
                    return html`
                        <wa-card class="message ${message.role}">
                            <div slot="header">
                                <wa-icon name=${message.role == "user" ? "user" : "robot"} label="${message.role}"></wa-icon>
                                ${when(chatService.getPromptContribution(message.role), (pc) => pc.label, () => message.role)}
                            </div>
                            <wa-divider></wa-divider>
                            ${unsafeHTML(marked.parse(message.content) as string)}
                            <div slot="footer" style="display: flex; justify-content: flex-end">
                                ${message.actions?.map(a => html`
                                    <wa-button @click="${() => a.action()}" size="small" variant="success"
                                               appearance="outlined" title="${a.label}">
                                        <wa-icon name="${a.icon}" label="${a.label}"></wa-icon>
                                    </wa-button>
                                `)}
                            </div>
                        </wa-card>
                    `
                })}
                ${when(this.busy, () => html`
                    <wa-card class="message">
                        <wa-animation name="flip" duration="2000" play>
                            <wa-icon name="robot" label="AI Assistant"></wa-icon>
                        </wa-animation>
                        <span>Waiting for reply...</span>
                    </wa-card>
                `)}
            </div>
            <wa-input
                    placeholder="How can I help you?"
                    @change=${this.onHandlePrompt} autocomplete="off">

                <wa-dropdown slot="end">
                    <wa-button slot="trigger" appearance="plain" size="small">
                        <wa-icon name="ellipsis-vertical" label="Options"></wa-icon>
                    </wa-button>
                    ${this.providers?.map(provider => html`
                        <wa-dropdown-item type="checkbox"
                                          value="${provider.name}"
                                          ?checked="${provider.name == this.defaultProvider?.name}"
                                          @click="${this.onChangeDefaultProvider}">
                            ${provider.name}
                        </wa-dropdown-item>
                    `)}
                </wa-dropdown>
            </wa-input>
        `
    }

    static styles = css`
        :host {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
        }

        .chat-messages {
            flex: 1;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        p, pre {
            margin: 0;
            white-space: break-spaces;
        }

        .message {
            padding: 10px 14px;
            border-radius: 4px;
            font-size: small;
            line-height: 1.4;
            word-break: break-word;
            display: inline-block;
        }

        wa-card::part(body) {
            --spacing: 0.5rem;
        }

        .message.user {
            background-color: var(--wa-color-neutral-fill-normal);
            align-self: flex-end;
        }

        .message.assistant {
            background-color: var(--wa-color-neutral-fill-quiet);
            align-self: flex-start;
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'k-aiassist': KAIAssist
    }
}