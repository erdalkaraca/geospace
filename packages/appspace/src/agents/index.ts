import {type ExecutionContext} from "../core/commandregistry";
import {CID_AGENTS, AgentContribution, PromptEnhancer} from "../extensions/ai-system";
import {contributionRegistry} from "../core/contributionregistry";

import PYODIDE_SYS_PROMPT from "./py-programming.txt?raw"
import JAVASCRIPT_SYS_PROMPT from "./js-programming.txt?raw"

// Commander agent removed - App Support agent now handles command execution via tools
// This simplifies the agent architecture: one general-purpose agent with tool access
// instead of a specialized command-planning agent that generated JSON execution plans

// The old Commander agent used:
// - commandsPromptEnhancer: Added commands list to prompt (now handled by tools)
// - commandsMessageProcessor: Parsed JSON command arrays and added "Execute Commands" button (now handled by direct tool execution)
// These are no longer needed since tools allow direct command execution

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