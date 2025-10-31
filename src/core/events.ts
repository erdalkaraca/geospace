import PubSub from 'pubsub-js'
import {rootContext} from "./di";

export const subscribe = (topic: string, callback: (data: any) => any) => {
    PubSub.subscribe(topic, (_topic, data) => callback(data));
}

export const publish = (topic: string, data: any) => {
    PubSub.publish(topic, data);
}

export const EVENT_ACTIVE_PART_CHANGED = "events/activePartChanged"

export const topic = (topic: string) => {
    return function (_target: any, _propertyKey: string, descriptor: any) {
        const originalMethod = descriptor.value;
        originalMethod.topic = topic;
        return descriptor
    }
}

rootContext.put("subscribe", subscribe)
rootContext.put("publish", publish)