/**
 * Runtime dependencies that can be provided to user modules.
 * These are optional dependencies that gs-lib can provide to user modules
 * but are not required for gs-lib itself to function.
 */

export interface RuntimeDependencies {
    /**
     * Lit library - provides templating APIs for user modules
     * If not provided, user modules won't have access to html, css, etc.
     */
    lit?: {
        html: any;
        css: any;
        svg: any;
        nothing: any;
        unsafeCSS: any;
        when: any;
        repeat: any;
        keyed: any;
        classMap: any;
        styleMap: any;
        ifDefined: any;
        guard: any;
        cache: any;
        unsafeHTML: any;
        until: any;
        live: any;
        ref: any;
        createRef: any;
        defineComponent: any;
        LitElement: any;
    };
    
    /**
     * WebAwesome - provides web component library
     * If not provided, user modules won't have access to WebAwesome components
     */
    webawesome?: {
        // WebAwesome components are auto-registered when imported
        // This is just a marker that WebAwesome is available
        available: boolean;
    };
}

/**
 * Default runtime dependencies provider.
 * Attempts to load dependencies if available, but gracefully handles missing ones.
 */
export async function loadRuntimeDependencies(): Promise<RuntimeDependencies> {
    const deps: RuntimeDependencies = {};
    
    // Try to load Lit
    try {
        const litModule = await import('lit');
        const litDirectives = await Promise.all([
            import('lit/directives/when.js').catch(() => null),
            import('lit/directives/repeat.js').catch(() => null),
            import('lit/directives/keyed.js').catch(() => null),
            import('lit/directives/class-map.js').catch(() => null),
            import('lit/directives/style-map.js').catch(() => null),
            import('lit/directives/if-defined.js').catch(() => null),
            import('lit/directives/guard.js').catch(() => null),
            import('lit/directives/cache.js').catch(() => null),
            import('lit/directives/unsafe-html.js').catch(() => null),
            import('lit/directives/until.js').catch(() => null),
            import('lit/directives/live.js').catch(() => null),
            import('lit/directives/ref.js').catch(() => null),
        ]);
        
        deps.lit = {
            html: litModule.html,
            css: litModule.css,
            svg: litModule.svg,
            nothing: litModule.nothing,
            unsafeCSS: litModule.unsafeCSS,
            LitElement: litModule.LitElement,
            when: litDirectives[0]?.when,
            repeat: litDirectives[1]?.repeat,
            keyed: litDirectives[2]?.keyed,
            classMap: litDirectives[3]?.classMap,
            styleMap: litDirectives[4]?.styleMap,
            ifDefined: litDirectives[5]?.ifDefined,
            guard: litDirectives[6]?.guard,
            cache: litDirectives[7]?.cache,
            unsafeHTML: litDirectives[8]?.unsafeHTML,
            until: litDirectives[9]?.until,
            live: litDirectives[10]?.live,
            ref: litDirectives[11]?.ref,
            createRef: litDirectives[11]?.createRef,
            defineComponent: undefined, // This is defined in gs-litns
        };
    } catch (error) {
        // Lit not available - that's okay
        console.warn('Lit not available for user modules:', error);
    }
    
    // Check if WebAwesome is available (components auto-register when imported)
    // We check by looking for a known WebAwesome component
    try {
        if (customElements.get('wa-button') || customElements.get('wa-icon')) {
            deps.webawesome = { available: true };
        }
    } catch {
        // WebAwesome not available - that's okay
    }
    
    return deps;
}

/**
 * Create a lit namespace object from runtime dependencies.
 * Falls back to a no-op implementation if Lit is not available.
 */
export function createLitNamespace(deps: RuntimeDependencies): any {
    if (deps.lit) {
        // Import defineComponent from gs-litns if available
        // For now, we'll need to handle this in gs-litns itself
        return {
            ...deps.lit,
            // defineComponent will be added by gs-litns
        };
    }
    
    // Return a minimal no-op implementation if Lit is not available
    return {
        html: (strings: TemplateStringsArray, ...values: any[]) => strings.join(''),
        css: (strings: TemplateStringsArray, ...values: any[]) => '',
        svg: (strings: TemplateStringsArray, ...values: any[]) => strings.join(''),
        nothing: '',
        unsafeCSS: (value: any) => value,
        when: () => '',
        repeat: () => '',
        keyed: () => '',
        classMap: () => ({}),
        styleMap: () => ({}),
        ifDefined: (value: any) => value,
        guard: () => '',
        cache: () => '',
        unsafeHTML: (value: any) => value,
        until: () => '',
        live: () => '',
        ref: () => {},
        createRef: () => ({ value: null }),
        defineComponent: () => '',
        LitElement: class extends HTMLElement {},
    };
}

