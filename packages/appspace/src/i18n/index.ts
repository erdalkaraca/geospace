import { contributionRegistry, Contribution } from "..";
import { LanguageBundleContribution, SYSTEM_LANGUAGE_BUNDLES } from "../core/i18n";

import filebrowserBundle from "./filebrowser.json";
import extensionsBundle from "./extensions.json";
import tasksBundle from "./tasks.json";
import workspaceBundle from "./workspace.json";
import fastviewsBundle from "./fastviews.json";
import logterminalBundle from "./logterminal.json";
import partnameBundle from "./partname.json";

contributionRegistry.registerContribution(SYSTEM_LANGUAGE_BUNDLES,
    filebrowserBundle as unknown as Contribution);
contributionRegistry.registerContribution(SYSTEM_LANGUAGE_BUNDLES,
    extensionsBundle as unknown as Contribution);
contributionRegistry.registerContribution(SYSTEM_LANGUAGE_BUNDLES,
    tasksBundle as unknown as Contribution);
contributionRegistry.registerContribution(SYSTEM_LANGUAGE_BUNDLES,
    workspaceBundle as unknown as Contribution);
contributionRegistry.registerContribution(SYSTEM_LANGUAGE_BUNDLES,
    fastviewsBundle as unknown as Contribution);
contributionRegistry.registerContribution(SYSTEM_LANGUAGE_BUNDLES,
    logterminalBundle as unknown as Contribution);
contributionRegistry.registerContribution(SYSTEM_LANGUAGE_BUNDLES,
    partnameBundle as unknown as Contribution);