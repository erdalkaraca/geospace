import {html, render} from "lit";

export class DependencyContext {
    private variables: any;
    private proxy: any;
    private children: DependencyContext[] = [];
    private parent?: DependencyContext;

    constructor(variables: any) {
        this.variables = variables
        // @ts-ignore
        this.proxy = new Proxy(variables, this)
    }

    get(target: any, prop: string): any {
        return target[prop] || this.parent?.getProxy()[prop];
    }

    set(target: any, prop: string, value: any) {
        target[prop] = value;
    }

    put(prop: string, value: any) {
        this.variables[prop] = value;
    }

    public getProxy() {
        return this.proxy;
    }

    public createChild(variables: any = {}): DependencyContext {
        const child = new DependencyContext(variables)
        child.parent = this
        this.children.push(child)
        return child
    }

    getChildren() {
        return this.children;
    }

    getParent() {
        return this.parent;
    }

    destroy() {
        const index = this.parent?.children.indexOf(this)
        if (index !== undefined && index >= 0) {
            this.parent?.children.splice(index, 1)
        }
        this.parent = undefined
    }
}

export const rootContext = new DependencyContext({})
export const uiContext = rootContext.createChild({})

uiContext.put("html", html)
uiContext.put("render", render)