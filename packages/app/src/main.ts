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
} from "@eclipse-docks/core";

import { fetchReleases } from "@eclipse-docks/extension-github-service";

import '@eclipse-docks/extension-md-editor';
import '@eclipse-docks/extension-media-viewer';
import '@eclipse-docks/extension-memory-usage';
import '@eclipse-docks/extension-monaco-editor';
import '@eclipse-docks/extension-settings-tree';
import '@eclipse-docks/extension-utils';
import '@eclipse-docks/extension-catalog';
import '@eclipse-docks/extension-ai-system';
import '@eclipse-docks/extension-command-palette';
import '@eclipse-docks/extension-github-service';
import '@eclipse-docks/extension-howto-system';
import '@eclipse-docks/extension-in-browser-ml';
import '@eclipse-docks/extension-notebook';
import '@eclipse-docks/extension-python-runtime';
import '@eclipse-docks/extension-dataviewer';
import '@eclipse-docks/extension-sqleditor';
import '@eclipse-docks/extension-duckdb';
import '@eclipse-docks/extension-pglite';


import '@kispace-io/extension-gtfs';
import '@kispace-io/extension-overpass';
import '@kispace-io/extension-map-editor';
import '@kispace-io/extension-mapprops';
import '@kispace-io/extension-style-editor';
import '@kispace-io/extension-mapbuilder';
import '@kispace-io/extension-routing';

import type { PromptEnhancer, PromptEnhancerContribution } from "@eclipse-docks/extension-ai-system/api";
import { CID_PROMPT_ENHANCERS } from "@eclipse-docks/extension-ai-system/api";

import { registerCatalog } from "@eclipse-docks/extension-catalog/api";
import README from "../../../README.md?raw";
import GEOSPACE_CATALOG from "./geospace-catalog.json";
import GEOSPACE_SYSPROMPT from "./geospace-sysprompt.txt?raw";

const logger = createLogger('GeoSpaceApp');


const geospaceApp: AppDefinition = {
    name: "geo!space",
    metadata: {
        github: {
            owner: 'erdalkaraca',
            repo: 'geospace'
        },
        favicon: '/logo.svg'
    },
    extensions: [
        '@kispace-io/extension-map-editor',
        '@kispace-io/extension-mapprops',
        '@kispace-io/extension-style-editor',
        '@kispace-io/extension-overpass',
        '@kispace-io/extension-gtfs',
        '@kispace-io/extension-mapbuilder',
        '@kispace-io/extension-routing',

        '@eclipse-docks/extension-catalog',
        '@eclipse-docks/extension-utils',
        '@eclipse-docks/extension-command-palette',
        '@eclipse-docks/extension-md-editor',
        '@eclipse-docks/extension-monaco-editor',
        '@eclipse-docks/extension-media-viewer',
        '@eclipse-docks/extension-settings-tree',
        '@eclipse-docks/extension-memory-usage',
        '@eclipse-docks/extension-ai-system',
        '@eclipse-docks/extension-dataviewer',
        '@eclipse-docks/extension-sqleditor',
        '@eclipse-docks/extension-github-service',
        '@eclipse-docks/extension-notebook'
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
