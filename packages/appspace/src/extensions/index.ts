import {extensionRegistry} from "../core/extensionregistry";

extensionRegistry.registerExtension({
    id: "system.git",
    name: "Git Support",
    description: "Git commands and UI elements",
    loader: () => import("./git/git-extension"),
    icon: "code-branch",
    experimental: true,
})

extensionRegistry.registerExtension({
    id: "system.pyterminal",
    name: "Python terminal",
    description: "Python terminal view",
    loader: () => import("./pyterminal/pyterminal-extension"),
    icon: "k python",
    experimental: true,
})

extensionRegistry.registerExtension({
    id: "system.linuxterminal",
    name: "Linux terminal",
    description: "Linux terminal view",
    loader: () => import("./linuxterminal/k-linuxterminal"),
    icon: "terminal",
    experimental: true,
})

extensionRegistry.registerExtension({
    id: "system.webllm",
    name: "WebLLM",
    description: "In-Browser LLM inference",
    loader: () => import("./webllm/webllmservice"),
    icon: "robot",
})

extensionRegistry.registerExtension({
    id: "system.p12splitter",
    name: ".p12 file splitter",
    description: "Adds a command to split/separate a .p12 file into private/public and additional .pem files",
    // @ts-ignore
    loader: () => import("./certs/p12-splitter"),
    icon: "certificate",
})

extensionRegistry.registerExtension({
    id: "system.pythonpackagemanager",
    name: "Python Package Manager",
    description: "Manage Python packages for notebooks and other Python-based extensions",
    loader: () => import("./python-package-manager/package-manager-extension"),
    icon: "box",
})

extensionRegistry.registerExtension({
    id: "system.notebook",
    name: "Jupyter-like Notebook Editor",
    description: "View and execute Jupyter-like notebooks (.ipynb) with Python code execution and markdown rendering",
    loader: () => import("./notebook/notebook-extension"),
    icon: "k jupyter",
    dependencies: ["system.pythonpackagemanager"],
})

extensionRegistry.registerExtension({
    id: "system.commandpalette",
    name: "Command Palette",
    description: "VS Code-style command palette at the top center for quick command execution (Ctrl+Shift+P)",
    loader: () => import("./command-palette/command-palette-extension"),
    icon: "terminal",
})

extensionRegistry.registerExtension({
    id: "system.download",
    name: "Download Files",
    description: "Download files from URLs to the workspace",
    loader: () => import("./download/download-extension"),
    icon: "download",
})

extensionRegistry.registerExtension({
    id: "system.unzip",
    name: "Unzip Archives",
    description: "Extract zip archives to the workspace",
    loader: () => import("./unzip/unzip-extension"),
    icon: "box-archive",
})

extensionRegistry.registerExtension({
    id: "system.mdeditor",
    name: "Markdown Editor",
    description: "View and render Markdown (.md) files",
    loader: () => import("./md-editor/md-editor-extension"),
    icon: "book",
})

extensionRegistry.registerExtension({
    id: "system.pdfviewer",
    name: "PDF Viewer",
    description: "View PDF files",
    loader: () => import("./pdf-viewer/pdf-viewer-extension"),
    icon: "file-pdf",
})

extensionRegistry.registerExtension({
    id: "system.monaco",
    name: "Monaco Code Editor",
    description: "Code editor with syntax highlighting, code completion, and Python execution support",
    loader: () => import("./monaco-editor/monaco-editor-extension"),
    icon: "file-pen",
    dependencies: ["system.pythonpackagemanager"],
})

extensionRegistry.registerExtension({
    id: "system.memoryusage",
    name: "Memory Usage Monitor",
    description: "Displays JavaScript heap memory usage in the bottom toolbar",
    loader: () => import("./memory-usage/memory-usage-extension"),
    icon: "microchip",
})

extensionRegistry.registerExtension({
    id: "system.webdav",
    name: "WebDAV Workspace",
    description: "Connect to WebDAV servers (Nextcloud, ownCloud) as workspace folders for cloud storage integration",
    loader: () => import("./webdav/webdav-extension"),
    icon: "cloud",
})

extensionRegistry.registerExtension({
    id: "system.settings-tree",
    name: "Settings Tree Editor",
    description: "Tree-based editor for settings with in-place editing",
    loader: () => import("./settings-tree/settings-tree-extension"),
    icon: "sitemap",
})

extensionRegistry.registerExtension({
    id: "system.ai-system",
    name: "AI System",
    description: "Modern AI service with streaming support and agent workflows",
    loader: () => import("./ai-system/ai-system-extension"),
    icon: "robot",
})