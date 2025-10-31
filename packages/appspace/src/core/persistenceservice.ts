import {get, set} from 'idb-keyval';
import {rootContext} from "./di";

export class PersistenceService {
    async persistObject(key: string, value: any) {
        return set(key, value);
    }

    async getObject(key: string): Promise<any> {
        return get(key)
    }
}

export const persistenceService = new PersistenceService()
rootContext.put("persistenceService", persistenceService)