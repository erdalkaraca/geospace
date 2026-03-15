import './webawesome';

import {
    AppDefinition,
    HTMLContribution,
    StringFile,
    TOOLBAR_MAIN,
    TOOLBAR_MAIN_RIGHT,
    appLoaderService,
    contributionRegistry,
    createLogger,
    editorRegistry,
    registerAll,
    type IconContribution
} from "@eclipse-lyra/core/api";

import { fetchReleases } from "@eclipse-lyra/extension-github-service";

import '@eclipse-lyra/extension-md-editor';
import '@eclipse-lyra/extension-media-viewer';
import '@eclipse-lyra/extension-memory-usage';
import '@eclipse-lyra/extension-monaco-editor';
import '@eclipse-lyra/extension-settings-tree';
import '@eclipse-lyra/extension-utils';

import '@eclipse-lyra/extension-ai-system';
import '@eclipse-lyra/extension-command-palette';
import '@eclipse-lyra/extension-github-service';
import '@eclipse-lyra/extension-howto-system';
import '@eclipse-lyra/extension-in-browser-ml';
import '@eclipse-lyra/extension-notebook';
import '@eclipse-lyra/extension-python-runtime';
import '@eclipse-lyra/extension-dataviewer';
import '@eclipse-lyra/extension-sqleditor';
import '@eclipse-lyra/extension-duckdb';
import '@eclipse-lyra/extension-pglite';

import '@kispace-io/extension-catalog';
import '@kispace-io/extension-gtfs';
import '@kispace-io/extension-map-editor';
import '@kispace-io/extension-mapbuilder';
import '@kispace-io/extension-mapprops';
import '@kispace-io/extension-overpass';
import '@kispace-io/extension-style-editor';

import type { PromptEnhancer, PromptEnhancerContribution } from "@eclipse-lyra/extension-ai-system/api";
import { CID_PROMPT_ENHANCERS } from "@eclipse-lyra/extension-ai-system/api";

import { registerCatalog } from "@kispace-io/extension-catalog/register-catalog";
import README from "../../../README.md?raw";
import GEOSPACE_CATALOG from "./geospace-catalog.json";
import GEOSPACE_SYSPROMPT from "./geospace-sysprompt.txt?raw";

const logger = createLogger('GeoSpaceApp');


const geospaceApp: AppDefinition = {
    name: "🌐geo!space",
    metadata: {
        github: {
            owner: 'erdalkaraca',
            repo: 'geospace'
        },
        favicon: '/logo.svg'
    },
    extensions: [
        '@kispace-io/extension-catalog',
        '@kispace-io/extension-map-editor',
        '@kispace-io/extension-mapprops',
        '@kispace-io/extension-style-editor',
        '@kispace-io/extension-overpass',
        '@kispace-io/extension-gtfs',
        '@kispace-io/extension-mapbuilder',
        '@eclipse-lyra/extension-utils',
        '@eclipse-lyra/extension-command-palette',
        '@eclipse-lyra/extension-md-editor',
        '@eclipse-lyra/extension-monaco-editor',
        '@eclipse-lyra/extension-media-viewer',
        '@eclipse-lyra/extension-settings-tree',
        '@eclipse-lyra/extension-memory-usage',
        '@eclipse-lyra/extension-ai-system',
        '@eclipse-lyra/extension-dataviewer',
        '@eclipse-lyra/extension-sqleditor',
        '@eclipse-lyra/extension-github-service',
    ],
    contributions: {
        ui: [
            {
                name: "toolbar.brand.geospace",
                target: TOOLBAR_MAIN,
                slot: "start",
                label: "Brand",
                component: `<span style="margin-right: 1rem; display: inline-flex; align-items: center;"><img src="/geospace.svg" alt="geo!space" style="height: 24px; display: block;" /></span>`
            } as HTMLContribution
        ],
    },
    releaseHistory: fetchReleases,

    async initialize() {
        const basePath = (import.meta.env.BASE_URL || "/").replace(/\/?$/, "/");
        const baseUrl = (typeof window !== "undefined" ? window.location.origin : "") + basePath;
        registerCatalog(GEOSPACE_CATALOG as any, baseUrl);

        contributionRegistry.registerContribution(CID_PROMPT_ENHANCERS, {
            label: "Geo!space Prompt Enhancer",
            enhancer: {
                enhance: async (prompt: string) => `${prompt}\n\n${GEOSPACE_SYSPROMPT}`,
                priority: 5,
            } as PromptEnhancer,
        } as PromptEnhancerContribution);

        contributionRegistry.registerContribution<IconContribution>('system.icons', {
            label: 'geo!space File Icons',
            mappings: {
                'geospace': 'earth'
            },
            priority: 1
        })

        registerAll({
            command: {
                "id": "help",
                "name": "Show welcome",
                "description": "Shows the welcome page.",
                "parameters": []
            },
            handler: {
                execute: async _context => {
                    const readmeFile = new StringFile(README, "README.md");
                    await editorRegistry.loadEditor(readmeFile);
                }
            },
            contribution: {
                target: TOOLBAR_MAIN_RIGHT,
                icon: "question-circle",
                label: "Welcome"
            }
        })

        logger.info('geo!space is ready!');
    },
    layout: "standard-bottom-sidebar",
};

const appRoot = document.getElementById('app-root') ?? document.body;
appLoaderService.registerApp(geospaceApp, {
    autoStart: true,
    hostConfig: true,
    container: appRoot,
});
