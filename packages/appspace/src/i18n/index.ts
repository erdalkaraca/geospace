import { contributionRegistry, Contribution } from "..";
import { LanguageBundleContribution, SYSTEM_LANGUAGE_BUNDLES } from "../core/i18n";

import filebrowserBundle from "./filebrowser.json";

contributionRegistry.registerContribution(SYSTEM_LANGUAGE_BUNDLES,
    filebrowserBundle as unknown as Contribution)