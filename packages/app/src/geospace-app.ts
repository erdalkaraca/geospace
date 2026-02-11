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
import type { PromptEnhancer, PromptEnhancerContribution } from "@kispace-io/extension-ai-system/api";
import { CID_PROMPT_ENHANCERS } from "@kispace-io/extension-ai-system/api";
import '@kispace-io/extension-in-browser-ml';
import '@kispace-io/extension-ai-system';
import '@kispace-io/extension-mapbuilder';
import '@kispace-io/extension-style-editor';
import '@kispace-io/extension-overpass';
import '@kispace-io/extension-gtfs';
import '@kispace-io/extension-catalog';
import '@kispace-io/extension-mapprops';
import '@kispace-io/extension-map-editor';

import README from "../../../README.md?raw";
import GEOSPACE_SYSPROMPT from "./geospace-sysprompt.txt?raw";

const logger = createLogger('GeoSpaceApp');

export const geospaceApp: AppDefinition = {
    id: "geospace",
    name: "🌐geo!space",
    version: appVersion,
    description: "An IDE for working with geospatial data.",
    metadata: {
        github: {
            owner: 'erdalkaraca',
            repo: 'geospace'
        },
        favicon: '/geospace.svg'
    },
    extensions: [
        "geospace.catalog",
        "geospace.mapEditor",
        "geospace.mapProps",
        "geospace.styleEditor",
        "system.mdeditor",
        "system.monaco",
        "system.utils",
        "system.commandpalette",
        "system.github-service",
        "system.memoryusage",
        "system.settings-tree",
        "system.ai-system",
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
    releaseHistory: [],

    async initialize() {
        packageInfoService.addPackage({
            name: geospacePackageJson.name,
            version: geospacePackageJson.version,
            dependencies: geospacePackageJson.dependencies,
            devDependencies: geospacePackageJson.devDependencies
        });

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
