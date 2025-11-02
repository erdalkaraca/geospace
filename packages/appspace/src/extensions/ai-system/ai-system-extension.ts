import { rootContext } from "../../core/di";
import { aiService } from "./service/ai-service";
import "./view/k-aiview";

export default ({ }: any) => {
    rootContext.put("aiService", aiService);
}

