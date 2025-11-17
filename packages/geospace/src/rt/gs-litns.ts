// Lit namespace module - exports all lit APIs for user modules
import {html, css, nothing, svg, LitElement, unsafeCSS} from "lit";
import {when} from "lit/directives/when.js";
import {repeat} from "lit/directives/repeat.js";
import {keyed} from "lit/directives/keyed.js";
import {classMap} from "lit/directives/class-map.js";
import {styleMap} from "lit/directives/style-map.js";
import {ifDefined} from "lit/directives/if-defined.js";
import {guard} from "lit/directives/guard.js";
import {cache} from "lit/directives/cache.js";
import {unsafeHTML} from "lit/directives/unsafe-html.js";
import {until} from "lit/directives/until.js";
import {live} from "lit/directives/live.js";
import {createRef, ref} from "lit/directives/ref.js";

/**
 * Helper function to define a custom web component from a simple function.
 * Converts a render function into a LitElement-based web component.
 * Properties are automatically inferred from the props used in the render function.
 * 
 * @param tagName - The custom element tag name (must contain a hyphen)
 * @param renderFn - Function that receives props and returns a Lit template
 * @param options - Optional configuration (props defaults, styles, etc.)
 * @returns The tag name of the registered component
 * 
 * @example
 * ```javascript
 * export default function ({lit: {html, css, defineComponent}}) {
 *   // Simple component - properties inferred from props usage
 *   defineComponent('my-button', (props) => html`
 *     <button @click=${props.onClick}>${props.label || 'Click'}</button>
 *   `);
 * 
 *   // Component with default props (auto-converted to properties)
 *   defineComponent('my-counter', (props) => html`
 *     <div class="counter">Count: ${props.count}</div>
 *   `, {
 *     props: { count: 0, label: '' },  // Simple object - auto-converted
 *     styles: css`
 *       .counter { font-weight: bold; }
 *     `
 *   });
 * 
 *   // Use the component in your template
 *   return () => html`
 *     <my-counter count="5"></my-counter>
 *   `;
 * }
 * ```
 */
const defineComponent = (
    tagName: string,
    renderFn: (props: any) => any,
    options?: {
        props?: Record<string, any> | Record<string, { type?: any; reflect?: boolean; attribute?: string | boolean }>;
        styles?: any;
        shadowRootOptions?: ShadowRootInit;
    }
): string => {
    if (!tagName.includes('-')) {
        throw new Error(`Custom element tag name must contain a hyphen: ${tagName}`);
    }

    // Check if already defined
    if (customElements.get(tagName)) {
        return tagName;
    }

    // Convert simple props object to LitElement property definitions
    const convertPropsToProperties = (props: Record<string, any>): Record<string, any> => {
        const properties: Record<string, any> = {};
        
        for (const [key, value] of Object.entries(props)) {
            // If it's already a LitElement property config, use it as-is
            if (value && typeof value === 'object' && ('type' in value || 'reflect' in value || 'attribute' in value)) {
                properties[key] = value;
            } else {
                // Infer type from default value
                const type = value === null || value === undefined ? String
                    : typeof value === 'boolean' ? Boolean
                    : typeof value === 'number' ? Number
                    : typeof value === 'object' ? Object
                    : String;
                
                properties[key] = {
                    type: type,
                    // Set default value
                    ...(value !== undefined && { value })
                };
            }
        }
        
        return properties;
    };

    // Determine properties from options
    let properties: Record<string, any> = {};
    if (options?.props) {
        properties = convertPropsToProperties(options.props);
    }

    // Track props accessed during render to auto-create properties
    // This allows properties to be inferred from render function usage
    const accessedProps = new Set<string>();
    const propsProxy = new Proxy({ $this: {} }, {
        get(_target, prop: string) {
            // Track all property accesses except built-ins and $this
            if (typeof prop === 'string' && 
                prop !== '$this' &&
                prop !== 'toJSON' && 
                prop !== 'toString' && 
                prop !== 'valueOf' &&
                !prop.startsWith('Symbol.')) {
                accessedProps.add(prop);
            }
            // Return a safe default value based on common patterns
            return prop.endsWith('Handler') || prop.startsWith('on') ? (() => {}) : '';
        }
    });

    // Do an initial render to detect accessed props
    // This is safe because we catch all errors and the render function
    // should be pure (no side effects)
    try {
        renderFn(propsProxy);
    } catch {
        // Ignore errors during prop detection - render function might
        // throw if props are required, but that's okay for detection
    }

    // Add auto-detected props that weren't explicitly defined
    // Default to String type for auto-detected props
    for (const prop of accessedProps) {
        if (!(prop in properties)) {
            properties[prop] = { type: String };
        }
    }

    class DynamicComponent extends LitElement {
        static properties = properties;

        static styles = options?.styles;

        constructor() {
            super();
            // Initialize default values from simple props (not LitElement config objects)
            if (options?.props) {
                for (const [key, value] of Object.entries(options.props)) {
                    // Only set default if it's a simple value, not a LitElement property config
                    if (value !== undefined && !(value && typeof value === 'object' && ('type' in value || 'reflect' in value || 'attribute' in value))) {
                        (this as any)[key] = value;
                    }
                }
            }
        }

        createRenderRoot() {
            if (options?.shadowRootOptions) {
                return this.attachShadow(options.shadowRootOptions);
            }
            return super.createRenderRoot();
        }

        render() {
            // Create a props object from element properties
            const props: any = {
                $this: this  // Element instance - needed for arrow functions which don't have 'this'
            };
            
            // Copy all properties to props object
            for (const key of Object.keys(properties)) {
                props[key] = (this as any)[key];
            }

            // Bind render function to this element so 'this' refers to the element instance
            // Note: 'this' works for regular functions, 'props.$this' works for arrow functions
            return renderFn.call(this, props);
        }
    }

    // Register the custom element
    customElements.define(tagName, DynamicComponent);

    return tagName;
};

// Export all lit APIs as a namespace object
export const lit = {
    html,
    css,
    unsafeCSS,
    svg,
    nothing,
    when,
    repeat,
    keyed,
    classMap,
    styleMap,
    ifDefined,
    guard,
    cache,
    unsafeHTML,
    until,
    live,
    ref,
    createRef,
    defineComponent
};

