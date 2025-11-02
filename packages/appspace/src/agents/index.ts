import {commandRegistry, CommandRegistry, CommandStack, type ExecutionContext} from "../core/commandregistry";
import {ChatMessage, CID_AGENTS, AgentContribution, PromptEnhancer, MessageProcessor} from "../extensions/ai-system/aiservice";
import {contributionRegistry} from "../core/contributionregistry";

import COMMANDS_EXEC_PLAN_SYS_PROMPT from "./commands-exec-plan.txt?raw"
import PYODIDE_SYS_PROMPT from "./py-programming.txt?raw"
import JAVASCRIPT_SYS_PROMPT from "./js-programming.txt?raw"
import {taskService} from "../core/taskservice";
import logger from "../core/logger";
import {KPart} from "../parts/k-part";
import {editorRegistry} from "../core/editorregistry";
import {StringFile} from "../core/filesys";

let counter = 0

const commandsPromptEnhancer: PromptEnhancer = {
    enhance: async (prompt: string, context: ExecutionContext) => {
        const commands = commandRegistry.listCommands(context)
        const commandsString = JSON.stringify(commands, null, 2)
        return `${prompt}\n\n***Available Commands:***\n${commandsString}`
    }
}

const commandsMessageProcessor: MessageProcessor = {
    process: async (message: ChatMessage, context: ExecutionContext) => {
        if (!message) {
            return message
        }
        
        try {
            const activeEditor = context.activeEditor as KPart | undefined
            let content = message.content.trim()
            
            content = content.replace(/```json\s*/g, "").replace(/```\s*/g, "").trim()
            
            let jsonStart = content.indexOf('[')
            if (jsonStart === -1) {
                logger.warn(`No JSON array found in commands message. Content: ${content.substring(0, 200)}`)
                return message
            }
            
            let bracketCount = 0
            let inString = false
            let escapeNext = false
            let jsonEnd = -1
            
            for (let i = jsonStart; i < content.length; i++) {
                const char = content[i]
                
                if (escapeNext) {
                    escapeNext = false
                    continue
                }
                
                if (char === '\\') {
                    escapeNext = true
                    continue
                }
                
                if (char === '"' && !escapeNext) {
                    inString = !inString
                    continue
                }
                
                if (!inString) {
                    if (char === '[') {
                        bracketCount++
                    } else if (char === ']') {
                        bracketCount--
                        if (bracketCount === 0) {
                            jsonEnd = i + 1
                            break
                        }
                    }
                }
            }
            
            if (jsonEnd === -1) {
                logger.warn(`Could not find complete JSON array. Content: ${content.substring(0, 200)}`)
                return message
            }
            
            const jsonString = content.substring(jsonStart, jsonEnd)
            
            let commands: Array<any>
            try {
                commands = JSON.parse(jsonString)
            } catch (parseError) {
                logger.error(`Failed to parse JSON array: ${parseError}. JSON string length: ${jsonString.length}, first 500 chars: ${jsonString.substring(0, 500)}`)
                return message
            }
            
            if (!Array.isArray(commands) || commands.length === 0) {
                return message
            }
            
            let valid = true
            const formattedContent = commands.map(({id, summary}, index) => {
                const command = commandRegistry.getCommand(id)
                if (!command) {
                    valid = false
                    return `${index + 1}. *INVALID COMMAND:* _${id}_`
                }
                return `${index + 1}. ${command.name}\n\t- ${summary || command.description}`
            }).join('\n')
            
            const processedMessage = {
                ...message,
                content: formattedContent,
                actions: message.actions || []
            }
            
            processedMessage.actions.push({
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
                processedMessage.actions.push({
                    label: "Execute Commands",
                    icon: "play",
                    action: async () => {
                        const commandStack = activeEditor?.getCommandStack() || new CommandStack()
                        await taskService.runAsync("Executing commands", async () => {
                            logger.debug("Executing commands: " + JSON.stringify(commands));
                            const execContext = commandRegistry.createExecutionContext(activeEditor);
                            for (const command of commands) {
                                const replaced = Object.entries(command["parameters"] || {}).map(([key, value]) => {
                                    if (typeof value === 'string') {
                                        value = value.replace(/{{(.*?)}}/g, (_, varName) =>
                                            execContext[varName.trim()] ?? ''
                                        )
                                    }
                                    return [key, value];
                                })
                                execContext.params = Object.fromEntries(replaced)
                                await commandStack.execute(command["id"], execContext)
                            }
                        })
                    }
                })
            }
            
            return processedMessage
        } catch (error) {
            logger.error(`Error processing commands message: ${error}`)
            return message
        }
    }
}

contributionRegistry.registerContribution(CID_AGENTS, {
    label: "Commander",
    description: "Commands execution plan generator",
    role: "commands",
    icon: "list",
    sysPrompt: COMMANDS_EXEC_PLAN_SYS_PROMPT,
    canHandle: (context: ExecutionContext) => {
        if (!context.activeEditor) {
            return false
        }
        const commands = commandRegistry.listCommands(context)
        return Object.keys(commands).length > 0
    },
    promptEnhancers: [commandsPromptEnhancer],
    messageProcessors: [commandsMessageProcessor]
} as AgentContribution)

const isMonacoEditor = (editor: any): boolean => {
    return editor && typeof editor.getEditor === 'function' && typeof editor.getLanguage === 'function'
}

const programmingPromptEnhancer: PromptEnhancer = {
    enhance: async (prompt: string, context: ExecutionContext) => {
        const activeEditor = context.activeEditor as any
        if (!isMonacoEditor(activeEditor)) {
            return prompt
        }
        const editor = activeEditor.getEditor()
        const model = editor.getModel()
        const code = model.getValueInRange(editor.getSelection())
        const filePath = activeEditor.input?.data.getWorkspacePath()
        
        if (code) {
            return `${prompt}\n\n Code selection within file "${filePath}":\n${code}`
        }
        return `${prompt}\n\nCode in file "${filePath}":\n${model.getValue()}`
    }
}

const createLanguageAgent = (language: string, sysPrompt: string, label: string) => ({
    label,
    description: `${label}`,
    role: `${language === 'python' ? 'py' : 'js'}-programmer`,
    icon: "code" as const,
    sysPrompt,
    canHandle: (context: ExecutionContext) => {
        const activeEditor = context.activeEditor as any
        return isMonacoEditor(activeEditor) && activeEditor.getLanguage() === language
    },
    promptEnhancers: [programmingPromptEnhancer]
} as AgentContribution)

contributionRegistry.registerContribution(CID_AGENTS, createLanguageAgent("python", PYODIDE_SYS_PROMPT, "Python Assistant"))
contributionRegistry.registerContribution(CID_AGENTS, createLanguageAgent("javascript", JAVASCRIPT_SYS_PROMPT, "JavaScript Assistant"))