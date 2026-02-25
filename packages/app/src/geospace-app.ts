import { html } from "@kispace-io/core/externals/lit";
import geospacePackageJson from "../package.json";
const appVersion = geospacePackageJson.version;

// Framework API imports
import {
    AppDefinition,
    appLoaderService,
    createLogger,
    packageInfoService,
    contributionRegistry,
    editorRegistry,
    registerAll,
    TOOLBAR_MAIN,
    TOOLBAR_MAIN_RIGHT,
    StringFile,
    type IconContribution,
    HTMLContribution
} from "@kispace-io/core/api";

import { fetchReleases } from "@kispace-io/extension-github-service";

import '@kispace-io/extension-utils';
import '@kispace-io/extension-md-editor';
import '@kispace-io/extension-media-viewer';
import '@kispace-io/extension-memory-usage';
import '@kispace-io/extension-monaco-editor';
import '@kispace-io/extension-settings-tree';

import '@kispace-io/extension-github-service';
import '@kispace-io/extension-python-runtime';
import '@kispace-io/extension-notebook';
import '@kispace-io/extension-command-palette';
import '@kispace-io/extension-in-browser-ml';
import '@kispace-io/extension-ai-system';
import '@kispace-io/extension-howto-system';


import '@kispace-io/extension-mapbuilder';
import '@kispace-io/extension-style-editor';
import '@kispace-io/extension-overpass';
import '@kispace-io/extension-gtfs';
import '@kispace-io/extension-catalog';
import '@kispace-io/extension-mapprops';
import '@kispace-io/extension-map-editor';

import { CID_PROMPT_ENHANCERS } from "@kispace-io/extension-ai-system/api";
import type { PromptEnhancer, PromptEnhancerContribution } from "@kispace-io/extension-ai-system/api";

import README from "../../../README.md?raw";
import GEOSPACE_SYSPROMPT from "./geospace-sysprompt.txt?raw";
import GEOSPACE_CATALOG from "./geospace-catalog.json";
import { registerCatalog } from "@kispace-io/extension-catalog/register-catalog";

const logger = createLogger('GeoSpaceApp');

const GITHUB_OWNER = 'erdalkaraca';
const GITHUB_REPO = 'geospace';

export const geospaceApp: AppDefinition = {
    id: "geospace",
    name: "🌐geo!space",
    version: appVersion,
    description: "An IDE for working with geospatial data.",
    metadata: {
        github: {
            owner: GITHUB_OWNER,
            repo: GITHUB_REPO
        },
        favicon: '/geospace.svg'
    },
    extensions: [
        '@kispace-io/extension-catalog',
        '@kispace-io/extension-map-editor',
        '@kispace-io/extension-mapprops',
        '@kispace-io/extension-style-editor',
        '@kispace-io/extension-overpass',
        '@kispace-io/extension-gtfs',
        '@kispace-io/extension-mapbuilder',
        '@kispace-io/extension-utils',
        '@kispace-io/extension-command-palette',
        '@kispace-io/extension-md-editor',
        '@kispace-io/extension-monaco-editor',
        '@kispace-io/extension-media-viewer',
        '@kispace-io/extension-settings-tree',
        '@kispace-io/extension-memory-usage',
        '@kispace-io/extension-ai-system',
    ],
    contributions: {
        ui: [
            {
                target: TOOLBAR_MAIN,
                slot: "start",
                label: "Brand",
                html: `<span style="margin-right: 1rem;"><span><nobr>🌐<i><b>geo!</b></i><small>space</small></nobr></span></span>`
            } as HTMLContribution
        ],
    },
    releaseHistory: fetchReleases,

    async initialize() {
        packageInfoService.addPackage({
            name: geospacePackageJson.name,
            version: geospacePackageJson.version,
            dependencies: geospacePackageJson.dependencies,
            devDependencies: geospacePackageJson.devDependencies
        });

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
    render: () => html`<k-standard-layout show-bottom-sidebar="true"></k-standard-app>`
};

appLoaderService.registerApp(geospaceApp, {
    autoStart: true,
});
