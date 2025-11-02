import { rootContext } from "../../core/di";
import { aiService } from "./aiservice";
import "./k-aiview";
import "./components";

export default ({ }: any) => {
    rootContext.put("aiService", aiService);
}

