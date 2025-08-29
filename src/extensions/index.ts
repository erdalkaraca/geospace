import {extensionRegistry} from "../core/extensionregistry.ts";
import gitExtensionUrl from "./git/git-extension.ts?url"
import pyExtensionUrl from "./pyterminal/k-pyterminal.ts?url"
import lxExtensionUrl from "./linuxterminal/k-linuxterminal.ts?url"
import webLLMUrl from "./webllm/webllmservice.ts?url"

extensionRegistry.registerExtension({
    id: "system.git",
    name: "Git Support",
    description: "Git commands and UI elements",
    url: gitExtensionUrl,
    icon: "code-branch",
})

extensionRegistry.registerExtension({
    id: "system.pyterminal",
    name: "Python terminal",
    description: "Python terminal view",
    url: pyExtensionUrl,
    icon: "terminal",
})

extensionRegistry.registerExtension({
    id: "system.linuxterminal",
    name: "Linux terminal",
    description: "Linux terminal view",
    url: lxExtensionUrl,
    icon: "terminal",
})

extensionRegistry.registerExtension({
    id: "system.webllm",
    name: "WebLLM",
    description: "In-Browser LLM inference",
    url: webLLMUrl,
    icon: "robot",
})