export interface ScriptedVars {
    params: Record<string, any>
    env: Record<string, string>
    viewState: { extent: number[], zoom: number, projection: string }
    signal?: AbortSignal
}

export interface ScriptedRuntime {
    run(src: string, vars: ScriptedVars): Promise<unknown>
}

class ScriptedRuntimeRegistryImpl {
    private runtimes = new Map<string, ScriptedRuntime>()

    register(lang: string, runtime: ScriptedRuntime): void {
        this.runtimes.set(lang, runtime)
    }

    get(lang: string): ScriptedRuntime | undefined {
        return this.runtimes.get(lang)
    }
}

export const scriptedRuntimeRegistry = new ScriptedRuntimeRegistryImpl()

const jsRuntime: ScriptedRuntime = {
    async run(src: string, vars: ScriptedVars): Promise<unknown> {
        const mod = await import(/* @vite-ignore */ src)
        const fn = mod instanceof Function ? mod : mod.default
        if (typeof fn !== 'function') {
            throw new Error(`Scripted layer module at "${src}" must export a default function`)
        }
        return fn(vars)
    }
}

scriptedRuntimeRegistry.register('javascript', jsRuntime)
