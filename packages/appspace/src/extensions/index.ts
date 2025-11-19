import {extensionRegistry} from "../core/extensionregistry";
import {i18nLazy} from "../core/i18n";

const t = i18nLazy('extensions');

extensionRegistry.registerExtension({
    id: "system.git",
    name: t('EXT_GIT_NAME'),
    description: t('EXT_GIT_DESC'),
    loader: () => import("./git/git-extension"),
    icon: "code-branch",
    experimental: true,
})

extensionRegistry.registerExtension({
    id: "system.github-service",
    name: t('EXT_GITHUB_SERVICE_NAME'),
    description: t('EXT_GITHUB_SERVICE_DESC'),
    loader: () => import("./github-service/github-service-extension"),
    icon: "code-branch",
})

extensionRegistry.registerExtension({
    id: "system.pyterminal",
    name: t('EXT_PYTERMINAL_NAME'),
    description: t('EXT_PYTERMINAL_DESC'),
    loader: () => import("./pyterminal/pyterminal-extension"),
    icon: "k python",
    experimental: true,
})

extensionRegistry.registerExtension({
    id: "system.linuxterminal",
    name: t('EXT_LINUXTERMINAL_NAME'),
    description: t('EXT_LINUXTERMINAL_DESC'),
    loader: () => import("./linuxterminal/k-linuxterminal"),
    icon: "terminal",
    experimental: true,
})

extensionRegistry.registerExtension({
    id: "system.webllm",
    name: t('EXT_WEBLLM_NAME'),
    description: t('EXT_WEBLLM_DESC'),
    loader: () => import("./webllm/webllmservice"),
    icon: "robot",
})

extensionRegistry.registerExtension({
    id: "system.p12splitter",
    name: t('EXT_P12SPLITTER_NAME'),
    description: t('EXT_P12SPLITTER_DESC'),
    // @ts-ignore
    loader: () => import("./certs/p12-splitter"),
    icon: "certificate",
})

extensionRegistry.registerExtension({
    id: "system.pythonpackagemanager",
    name: t('EXT_PYTHONPACKAGEMANAGER_NAME'),
    description: t('EXT_PYTHONPACKAGEMANAGER_DESC'),
    loader: () => import("./python-package-manager/package-manager-extension"),
    icon: "box",
})

extensionRegistry.registerExtension({
    id: "system.notebook",
    name: t('EXT_NOTEBOOK_NAME'),
    description: t('EXT_NOTEBOOK_DESC'),
    loader: () => import("./notebook/notebook-extension"),
    icon: "k jupyter",
    dependencies: ["system.pythonpackagemanager"],
})

extensionRegistry.registerExtension({
    id: "system.commandpalette",
    name: t('EXT_COMMANDPALETTE_NAME'),
    description: t('EXT_COMMANDPALETTE_DESC'),
    loader: () => import("./command-palette/command-palette-extension"),
    icon: "terminal",
})

extensionRegistry.registerExtension({
    id: "system.download",
    name: t('EXT_DOWNLOAD_NAME'),
    description: t('EXT_DOWNLOAD_DESC'),
    loader: () => import("./download/download-extension"),
    icon: "download",
})

extensionRegistry.registerExtension({
    id: "system.unzip",
    name: t('EXT_UNZIP_NAME'),
    description: t('EXT_UNZIP_DESC'),
    loader: () => import("./unzip/unzip-extension"),
    icon: "box-archive",
})

extensionRegistry.registerExtension({
    id: "system.mdeditor",
    name: t('EXT_MDEDITOR_NAME'),
    description: t('EXT_MDEDITOR_DESC'),
    loader: () => import("./md-editor/md-editor-extension"),
    icon: "book",
})

extensionRegistry.registerExtension({
    id: "system.mediaviewer",
    name: t('EXT_MEDIAVIEWER_NAME'),
    description: t('EXT_MEDIAVIEWER_DESC'),
    loader: () => import("./media-viewer/media-viewer-extension"),
    icon: "image",
})

extensionRegistry.registerExtension({
    id: "system.monaco",
    name: t('EXT_MONACO_NAME'),
    description: t('EXT_MONACO_DESC'),
    loader: () => import("./monaco-editor/monaco-editor-extension"),
    icon: "file-pen",
    dependencies: ["system.pythonpackagemanager"],
})

extensionRegistry.registerExtension({
    id: "system.memoryusage",
    name: t('EXT_MEMORYUSAGE_NAME'),
    description: t('EXT_MEMORYUSAGE_DESC'),
    loader: () => import("./memory-usage/memory-usage-extension"),
    icon: "microchip",
})

extensionRegistry.registerExtension({
    id: "system.webdav",
    name: t('EXT_WEBDAV_NAME'),
    description: t('EXT_WEBDAV_DESC'),
    loader: () => import("./webdav/webdav-extension"),
    icon: "cloud",
})

extensionRegistry.registerExtension({
    id: "system.settings-tree",
    name: t('EXT_SETTINGS_TREE_NAME'),
    description: t('EXT_SETTINGS_TREE_DESC'),
    loader: () => import("./settings-tree/settings-tree-extension"),
    icon: "sitemap",
})

extensionRegistry.registerExtension({
    id: "system.in-browser-ml",
    name: t('EXT_IN_BROWSER_ML_NAME'),
    description: t('EXT_IN_BROWSER_ML_DESC'),
    loader: () => import("./in-browser-ml/in-browser-ml-extension"),
    icon: "brain",
})

extensionRegistry.registerExtension({
    id: "system.ai-system",
    name: t('EXT_AI_SYSTEM_NAME'),
    description: t('EXT_AI_SYSTEM_DESC'),
    loader: () => import("./ai-system/ai-system-extension"),
    icon: "robot",
    dependencies: ["system.in-browser-ml"],
})

extensionRegistry.registerExtension({
    id: "system.rag-system",
    name: t('EXT_RAG_SYSTEM_NAME'),
    description: t('EXT_RAG_SYSTEM_DESC'),
    loader: () => import("./rag-system/rag-system-extension"),
    icon: "database",
    experimental: true,
    dependencies: ["system.ai-system"],
})

extensionRegistry.registerExtension({
    id: "system.howto",
    name: t('EXT_HOWTO_NAME'),
    description: t('EXT_HOWTO_DESC'),
    loader: () => import("./howto-system/howto-extension"),
    icon: "list-check",
})
