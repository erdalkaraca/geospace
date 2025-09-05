import {extensionRegistry} from "../core/extensionregistry.ts";

extensionRegistry.registerExtension({
    id: "system.git",
    name: "Git Support",
    description: "Git commands and UI elements",
    loader: () => import("./git/git-extension.ts"),
    icon: "code-branch",
    experimental: true,
})

extensionRegistry.registerExtension({
    id: "system.pyterminal",
    name: "Python terminal",
    description: "Python terminal view",
    loader: () => import("./pyterminal/k-pyterminal.ts"),
    icon: "terminal",
    experimental: true,
})

extensionRegistry.registerExtension({
    id: "system.linuxterminal",
    name: "Linux terminal",
    description: "Linux terminal view",
    loader: () => import("./linuxterminal/k-linuxterminal.ts"),
    icon: "terminal",
    experimental: true,
})

extensionRegistry.registerExtension({
    id: "system.webllm",
    name: "WebLLM",
    description: "In-Browser LLM inference",
    loader: () => import("./webllm/webllmservice.ts"),
    icon: "robot",
})

extensionRegistry.registerExtension({
    id: "system.helloworld",
    name: "Hello World!",
    description: "Hello World!",
    // @ts-ignore
    loader: () => import("./hello-world.js"),
    icon: "flask",
})