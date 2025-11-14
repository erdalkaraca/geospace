import { rootContext } from "../../core/di";
import { aiService } from "./service/ai-service";
import { contributionRegistry, HTMLContribution } from "../../core/contributionregistry";
import { TOOLBAR_BOTTOM } from "../../core/constants";
import "./view/k-aiview";
import "./view/k-token-usage";

export default ({ }: any) => {
    rootContext.put("aiService", aiService);
    
    contributionRegistry.registerContribution(TOOLBAR_BOTTOM, {
        target: TOOLBAR_BOTTOM,
        label: "Token Usage",
        html: `<k-token-usage></k-token-usage>`
    } as HTMLContribution);
}

