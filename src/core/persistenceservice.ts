import {get, set} from 'idb-keyval';

export class PersistenceService {
    async persistObject(key: string, value: any) {
        return set(key, value);
    }

    async getObject(key: string): Promise<any> {
        return get(key)
    }
}

export const persistenceService = new PersistenceService()