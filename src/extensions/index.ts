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

extensionRegistry.registerExtension({
    id: "system.p12splitter",
    name: ".p12 file splitter",
    description: "Adds a command to split/separate a .p12 file into private/public and additional .pem files",
    // @ts-ignore
    loader: () => import("./certs/p12-splitter.ts"),
    icon: "certificate",
})

extensionRegistry.registerExtension({
    id: "system.notebook",
    name: "Jupyter Notebook Editor",
    description: "View and execute Jupyter notebooks (.ipynb) with Python code execution and markdown rendering",
    loader: () => import("./notebook/notebook-extension.ts"),
    icon: "book",
})

extensionRegistry.registerExtension({
    id: "system.commandpalette",
    name: "Command Palette",
    description: "VS Code-style command palette at the top center for quick command execution (Ctrl+Shift+P)",
    loader: () => import("./command-palette/command-palette-extension.ts"),
    icon: "terminal",
})

extensionRegistry.registerExtension({
    id: "system.download",
    name: "Download Files",
    description: "Download files from URLs to the workspace",
    loader: () => import("./download/download-extension.ts"),
    icon: "download",
})

extensionRegistry.registerExtension({
    id: "system.unzip",
    name: "Unzip Archives",
    description: "Extract zip archives to the workspace",
    loader: () => import("./unzip/unzip-extension.ts"),
    icon: "box-archive",
})