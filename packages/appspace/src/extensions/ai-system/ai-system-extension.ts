import { rootContext } from "../../core/di";
import { aiService } from "./aiservice";
import "./k-aiview";

export default ({ }: any) => {
    rootContext.put("aiService", aiService);
}

