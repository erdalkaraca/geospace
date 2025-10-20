import {commandRegistry, CommandRegistry, CommandStack, ExecutionContext} from "../core/commandregistry.ts";
import {ChatMessage, CID_PROMPTS, SysPromptContribution} from "../core/chatservice.ts";
import {contributionRegistry} from "../core/contributionregistry.ts";

import COMMANDS_EXEC_PLAN_SYS_PROMPT from "./commands-exec-plan.txt?raw"
import PYODIDE_SYS_PROMPT from "./py-programming.txt?raw"
import JAVASCRIPT_SYS_PROMPT from "./js-programming.txt?raw"
import {taskService} from "../core/taskservice.ts";
import logger from "../core/logging.ts";
import {KPart} from "../parts/k-part.ts";
import {editorRegistry} from "../core/editorregistry.ts";
import {StringFile} from "../core/filesys.ts";

let counter = 0

contributionRegistry.registerContribution(CID_PROMPTS, {
    label: "Commander",
    description: "Commands execution plan generator",
    role: "commands",
    sysPrompt: COMMANDS_EXEC_PLAN_SYS_PROMPT,
    canHandle: ({activeEditor}: { activeEditor: KPart }) => {
        const commands = commandRegistry.listCommands({
            source: activeEditor
        })
        return Object.keys(commands).length > 0
    },
    promptDecorator: async ({userPrompt, commandRegistry, activeEditor}: {
        userPrompt: string,
        commandRegistry: CommandRegistry,
        activeEditor: KPart
    }) => {
        const commands = commandRegistry.listCommands({
            source: activeEditor
        })
        const commandsString = JSON.stringify(commands, null, 2)
        return `${userPrompt}\n\n***Available Commands:***\n${commandsString}`
    },
    messageDecorator: async ({message, activeEditor}: { message: ChatMessage, activeEditor: KPart }) => {
        if (!message) {
            return
        }
        const content = message.content.replace("```json", "").replace("```", "");
        const commands: Array<any> = JSON.parse(content);
        let valid = true
        message.content = commands.map(({id, summary}, index) => {
            const command = commandRegistry.getCommand(id)
            if (!command) {
                valid = false
                return `${index + 1}. *INVALID COMMAND:* _${id}_`
            }
            return `${index + 1}. ${command.name}\n\t- ${summary || command.description}`
        }).join('\n')
        message.actions = message.actions || []
        message.actions.push({
            label: "Show Commands Execution Plan",
            icon: "list",
            action: async () => {
                const currentIndex = counter++
                const content = `\`\`\`json\n${JSON.stringify(commands, null, 2)}\n\`\`\``
                const commandsPlanFile = new StringFile(content, `Commands Execution Plan (${currentIndex}).md`)
                await editorRegistry.loadEditor(commandsPlanFile)
            }
        })
        if (valid) {
            message.actions.push({
                label: "Execute Commands",
                icon: "play",
                action: async () => {
                    const commandStack = activeEditor?.getCommandStack() || new CommandStack()
                    await taskService.runAsync("Executing commands", async () => {
                        logger.debug("Executing commands: " + JSON.stringify(commands));
                        const context: ExecutionContext = {
                            source: activeEditor,
                        }
                        for (const command of commands) {
                            const replaced = Object.entries(command["parameters"] || {}).map(([key, value]) => {
                                if (typeof value === 'string') {
                                    value = value.replace(/{{(.*?)}}/g, (_, varName) =>
                                        context[varName.trim()] ?? ''
                                    )
                                }
                                return [key, value];
                            })
                            context.params = Object.fromEntries(replaced)
                            await commandStack.execute(command["id"], context)
                        }
                    })
                }
            })
        }
    }
} as SysPromptContribution)

// TODO remove dependency to specific editor
const isMonacoEditor = (editor: any): boolean => {
    return editor && typeof editor.getEditor === 'function' && typeof editor.getLanguage === 'function'
}

const programmingPromptDecorator = async ({userPrompt, activeEditor}: {
    userPrompt: string,
    activeEditor: any
}) => {
    const editor = activeEditor.getEditor()
    const model = editor.getModel()
    const code = model.getValueInRange(editor.getSelection())
    if (code) {
        return `${userPrompt}\n\n Code selection within file "${activeEditor.input?.data.getWorkspacePath()}":\n
            ${code}`
    }
    return `${userPrompt}\n\nCode in file "${activeEditor.input?.data.getWorkspacePath()}":\n
            ${model.getValue()}`
}

contributionRegistry.registerContribution(CID_PROMPTS, {
    label: "Python Assistant",
    description: "Python code assistant",
    role: "py-programmer",
    sysPrompt: PYODIDE_SYS_PROMPT,
    canHandle: ({activeEditor}: { activeEditor: KPart }) => {
        return isMonacoEditor(activeEditor) && (activeEditor as any).getLanguage() == "python"
    },
    promptDecorator: programmingPromptDecorator
} as SysPromptContribution)

contributionRegistry.registerContribution(CID_PROMPTS, {
    label: "JavaScript Assistant",
    description: "JavaScript code assistant",
    role: "js-programmer",
    sysPrompt: JAVASCRIPT_SYS_PROMPT,
    canHandle: ({activeEditor}: { activeEditor: KPart }) => {
        return isMonacoEditor(activeEditor) && (activeEditor as any).getLanguage() == "javascript"
    },
    promptDecorator: programmingPromptDecorator
} as SysPromptContribution)