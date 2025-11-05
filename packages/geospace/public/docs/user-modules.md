# geo!space Custom Module Development Guide

This guide explains how to develop custom modules (controls and overlays) for geo!space maps.

## Overview

Custom modules in geo!space are JavaScript modules that create interactive UI components for maps. There are two types:

- **Controls**: UI elements that are positioned on the map (e.g., toolbars, buttons, menus)
- **Overlays**: Popup-style elements that appear at specific map coordinates

geo!space uses **Lit** for templating and **Web Awesome** for UI components. Both are provided by default and are based on browser standards only, so you don't need any build tools to run your modules.

## Module Structure

A custom module is a JavaScript function that receives a `vars` object containing all available APIs. The function can return a Lit template or a function that returns a Lit template.

### Understanding the `vars` Object

Under the hood, your module receives a single `vars` object with all available APIs:

```javascript
export default function (vars) {
    vars.style({
        position: "absolute",
        bottom: "0"
    });

    return () => vars.html`
        <div class="my-control">
            <button @click=${() => vars.events("my-event")}>Click me</button>
        </div>
    `;
}
```

### Recommended: Destructuring Approach

For cleaner, more readable code, destructure the APIs you need from the `vars` object:

```javascript
export default function ({html, style, events, map, ...}) {
    style({
        position: "absolute",
        bottom: "0"
    });

    return () => html`
        <div class="my-control">
            <button @click=${() => events("my-event")}>Click me</button>
        </div>
    `;
}
```

### Simple Template (Static)

If your template doesn't need to update, return the template directly:

```javascript
export default function ({html, style}) {
    style({ padding: "10px" });
    
    return html`
        <div>Static content</div>
    `;
}
```

### Reactive Template (Dynamic)

If your template needs to update based on local state, return a template function. **Call `render()` without parameters in event handlers to signal a re-render is needed.**

```javascript
export default function ({html, style, render}) {
    let count = 0;
    
    style({ padding: "10px" });
    
    return () => html`
        <div>
            <p>Count: ${count}</p>
            <button @click=${() => {
                count++;
                render();
            }}>Increment</button>
        </div>
    `;
}
```

**Note**: For local state management, use local variables. The `events` API is for communicating between different modules, not for managing local state. **Remember**: Call `render()` without parameters throughout your code to signal re-renders. Return the template or template function at the end of your module function.

## Available APIs

When your module function is called, it receives a `vars` object with the following properties. Destructure the APIs you need from the `vars` object:

### Map APIs

#### `map` (OpenLayers Map)
The OpenLayers map instance. Access the full OpenLayers API through this object.

```javascript
export default function ({html, map}) {
    const view = map.getView();
    const center = view.getCenter();
    
    return () => html`<div>Center: ${center}</div>`;
}
```

#### `ol` (OpenLayers Namespace)
Access to all OpenLayers classes and utilities through the `ol` namespace object.

```javascript
export default function ({html, ol}) {
    const layer = new ol.layer.Vector({...});
    
    return () => html`<div>Content</div>`;
}
```

You can also access namespaced modules like `ol.geom`, `ol.layer`, `ol.source`, `ol.style`, etc.:

```javascript
export default function ({html, ol}) {
    const point = new ol.geom.Point([0, 0]);
    const style = new ol.style.Style({...});
    
    return () => html`<div>Content</div>`;
}
```

### DOM APIs

#### `element` (HTMLElement)
The DOM element for your control or overlay. This is where your template is rendered. Typically you don't need to access this directly when using the function-based approach.

```javascript
export default function ({html, element}) {
    // Direct DOM access (rarely needed)
    element.setAttribute('data-module', 'my-module');
    
    return () => html`<div>Content</div>`;
}
```

#### `querySelector(selector)` / `querySelectorAll(selector)`
Query the module's DOM element.

```javascript
export default function ({querySelector, querySelectorAll}) {
    const button = querySelector('button');
    const allButtons = querySelectorAll('.btn');
    
    return () => html`<div>Content</div>`;
}
```

### Rendering APIs

#### `html` (Lit Template Tag)
Template literal function from Lit for building HTML templates.

```javascript
export default function ({html}) {
    return () => html`
        <div class="my-control">
            <button @click=${this.handleClick}>Click</button>
        </div>
    `;
}
```

#### `when(condition, trueTemplate, falseTemplate)`
Conditional rendering directive from Lit.

```javascript
export default function ({html, when}) {
    let isVisible = true;
    
    return () => html`
        ${when(
            isVisible,
            () => html`<div>Visible</div>`,
            () => html`<div>Hidden</div>`
        )}
    `;
}
```

#### `render()`
Signal to the framework that a re-render is needed. Call `render()` without parameters throughout your code when state changes.

**Pattern:**
- Return your template or template function at the end of your module function
- Call `render()` without parameters in event handlers when state changes
- The framework stores the returned template function and uses it when `render()` is called without parameters

```javascript
export default function ({html, render}) {
    let count = 0;
    
    return () => html`
        <div>Counter: ${count}</div>
        <button @click=${() => {
            count++;
            render();
        }}>Increment</button>
    `;
}
```

#### `style(styleObject)`
Apply CSS styles to the module's element.

```javascript
export default function ({html, style}) {
    style({
        backgroundColor: 'white',
        padding: '10px',
        borderRadius: '4px'
    });
    
    return () => html`<div>Content</div>`;
}
```

### Reference APIs

#### `ref` / `createRef()`
Create references to DOM elements in Lit templates.

```javascript
export default function ({html, ref, createRef}) {
    const myRef = createRef();
    
    // Access the element
    const buttonElement = myRef.value;
    
    return () => html`
        <button ${ref(myRef)}>Button</button>
    `;
}
```

### Environment & Configuration

#### `env` (Object)
Environment variables passed to the map. Use this to configure your module.

```javascript
export default function ({html, env}) {
    const apiKey = env.apiKey;
    const theme = env.theme || 'default';
    
    return () => html`<div>Theme: ${theme}</div>`;
}
```

#### `settings(key, value?)`
Get or set persistent settings for the module.

```javascript
export default function ({html, settings}) {
    const savedValue = settings('mySetting');
    
    settings('mySetting', 'newValue');
    
    settings('mySetting', (newValue) => {
        console.log('Setting changed:', newValue);
    });
    
    return () => html`<div>Setting: ${savedValue}</div>`;
}
```

### Event System (Inter-Module Communication)

The `events` API provides a pub/sub mechanism for communication between different modules. This is not for local state management (like React context), but rather for modules to communicate with each other.

#### `events(topic, callback)` / `events(topic, data)`
Subscribe to or publish events.

**Subscribe to events** (when callback is a function):
```javascript
export default function ({html, events}) {
    events('map-click', (data) => {
        console.log('Map clicked at:', data.coords);
    });
    
    events('overlay-open', (data) => {
        console.log('Overlay opened:', data);
    });
    
    return () => html`<div>Content</div>`;
}
```

**Publish events** (when callback is data/value):
```javascript
export default function ({html, events}) {
    return () => html`
        <div>
            <button @click=${() => events('drawer/openMenu', { source: 'toolbar' })}>
                Open Menu
            </button>
            <button @click=${() => events('toolbar/buttonClicked', { buttonId: 'search' })}>
                Search
            </button>
        </div>
    `;
}
```

**Example: Module Communication**
```javascript
// Module A: Toolbar control
export default function ({html, style, events}) {
    style({ position: "absolute", bottom: "0" });
    
    return () => html`
        <button @click=${() => events('toolbar/search')}>
            Search
        </button>
    `;
}

// Module B: Search overlay
export default function ({html, overlay, events}) {
    events('toolbar/search', () => {
        overlay.show([0, 0]);
    });
    
    return () => html`<div>Search overlay</div>`;
}
```

### Utilities

#### `utils.uuid()`
Generate a UUID.

```javascript
export default function ({html, utils}) {
    const id = utils.uuid();
    
    return () => html`<div>ID: ${id}</div>`;
}
```

#### `asset(path)`
Resolve a path to an asset in the workspace's `assets` folder. Returns a Promise.

```javascript
export default function ({html, asset, ref, createRef}) {
    // Create a ref for the image element
    const imgRef = createRef();
    
    // Load the asset and set the src once the promise resolves
    // The ref will be available by the time the promise resolves since rendering is synchronous
    asset('images/icon.png').then(url => {
        imgRef.value.src = url;
    });
    
    return () => html`
        <img ${ref(imgRef)} alt="Icon">
    `;
}
```

**Note**: The framework ensures the ref is available when the promise resolves. Since rendering is synchronous and happens before any promise callbacks execute, `imgRef.value` will be set by the time the `.then()` callback runs. The check for `imgRef.value` is not necessary in this case.

### Module-Specific APIs

#### `control` (GsControlAdapter)
Available only for control modules. This is currently available in the `vars` object but there are no control-specific methods yet.

#### `overlay` (GsOverlayAdapter)
Available only for overlay modules. Provides overlay-specific methods.

**Positioning Controls with `--gs-contribution`**

The `--gs-contribution` CSS property allows you to position your control in a specific container within the map UI, rather than the default OpenLayers control position. This only works for controls.

```javascript
export default function ({html, style}) {
    // Position control in a specific container
    style({
        '--gs-contribution': '#map-toolbar'
    });
    
    return () => html`<div>Control</div>`;
}
```

**Selector Syntax:**
- Basic: `'#map-toolbar'` - Appends the control to the element with id `map-toolbar`
- With positioning: `'#map-toolbar?before=search-button'` - Inserts the control before an element with `name="search-button"` within the parent

**How it works:**
1. The framework finds the parent element using `querySelector()` on the map's target element
2. If a query string with `before` parameter is provided, the control is inserted before the specified sibling
3. Otherwise, the control is appended to the parent
4. The control is then re-rendered in its new position

**Example:**
```javascript
export default function ({html, style}) {
    // Position in toolbar, before the search button
    style({
        '--gs-contribution': '#map-toolbar?before=search-button',
        padding: '10px'
    });
    
    return () => html`<button>My Control</button>`;
}
```

```javascript
export default function ({html, overlay}) {
    // Show overlay at coordinates
    overlay.show([lon, lat]);
    
    // Hide overlay
    overlay.hide();
    
    return () => html`<div>Overlay</div>`;
}
```

## Example: Simple Control Module

```javascript
export default function ({html, style, events, map, render}) {
    let count = 0;
    
    // Style the control element
    style({
        position: "absolute",
        bottom: "10px",
        left: "10px",
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "4px"
    });

    events('map-click', (data) => {
        console.log('Map clicked at:', data.coords);
        count = 0;
        render();
    });

    return () => html`
        <div class="my-control">
            <h3>My Control</h3>
            <p>Count: ${count}</p>
            <button @click=${() => {
                count++;
                render();
            }}>
                Increment
            </button>
            <button @click=${() => {
                events('control/reset', { source: 'my-control' });
            }}>
                Reset (broadcast)
            </button>
        </div>
    `;
}
```

### Using Destructuring

You can destructure only the APIs you need:

```javascript
export default function ({html, style, events, render}) {
    style({ position: "absolute", bottom: "0" });
    
    return () => html`
        <button @click=${() => events("my-event")}>
            Click me
        </button>
    `;
}
```

## Example: Overlay Module

```javascript
export default function ({html, style, overlay, events, render}) {
    let data = null;
    
    // Style the overlay
    style({
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        minWidth: '200px'
    });

    events('open-overlay', (eventData) => {
        data = eventData;
        overlay.show(eventData.coords);
        render();
    });

    return () => {
        if (!data) {
            return html``;
        }
        
        return html`
            <div class="my-overlay">
                <h4>${data.title}</h4>
                <p>${data.description}</p>
                <button @click=${() => {
                    overlay.hide();
                    data = null;
                    render();
                }}>Close</button>
            </div>
        `;
    };
}
```

### Example: Bottom Toolbar

Here's a real-world example of a bottom toolbar with buttons:

```javascript
export default function ({html, style, events, render}) {
    style({
        position: "absolute",
        bottom: "0",
        left: "0",
        right: "0",
    });

    return () => html`
        <div class="navbar-bottoms" style="display: grid; grid-template-columns: 1fr 1fr 1fr; background-color: white; padding: 10px;">
            <wa-button appearance="plain">
                <div style="display: flex; flex-direction: column; align-items: center;">
                    <wa-icon name="location-dot" style="font-size: 1.5em;"></wa-icon>
                    <span>Karte</span>
                </div>
            </wa-button>
            <wa-button appearance="plain">
                <div style="display: flex; flex-direction: column; align-items: center;">
                    <wa-icon name="magnifying-glass" style="font-size: 1.5em;"></wa-icon>
                    <span>Suche</span>
                </div>
            </wa-button>
            <wa-button appearance="plain" @click=${() => events("drawer/openMenu")}>
                <div style="display: flex; flex-direction: column; align-items: center;">
                    <wa-icon name="house" style="font-size: 1.5em;"></wa-icon>
                    <span>Menü</span>
                </div>
            </wa-button>
        </div>
    `;
}
```

## Importing Other Modules

You can import other JavaScript modules from your workspace:

```javascript
import { helperFunction } from './shared-utils.js';
import { MyComponent } from './components/MyComponent.js';

export default function ({html, style, render}) {
    const result = helperFunction();
    
    style({ padding: "10px" });
    
    return () => html`
        <div>${result}</div>
    `;
}
```

**Important**: Use relative paths (`./` or `../`) or bare specifiers (module name without path) for imports within your workspace. The module resolver will automatically handle these imports.

## Using OpenLayers API

You have full access to the OpenLayers API through `map` and `ol`:

```javascript
export default function ({html, map, ol, style}) {
    const layers = map.getLayers();

    const source = new ol.source.Vector();
    const layer = new ol.layer.Vector({ source });
    map.addLayer(layer);

    map.on('moveend', () => {
        const center = map.getView().getCenter();
        console.log('Map center:', center);
    });

    style({ padding: "10px" });
    
    return () => html`<div>Map controls</div>`;
}
```

**Note**: The `ol` namespace object provides access to all OpenLayers classes. You can use:
- `ol.layer.Vector` instead of importing from `'ol/layer/Vector'`
- `ol.source.Vector` instead of importing from `'ol/source/Vector'`
- `ol.geom.Point`, `ol.style.Style`, etc.

All OpenLayers classes are available through the `ol` namespace.

## Best Practices

1. **Use destructuring**: Destructure only the APIs you need from the `vars` object for cleaner code:
   ```javascript
   export default function ({html, style, events}) {
       // Use html, style, events directly
   }
   ```

2. **Call `render()` without parameters to signal re-renders**: Call `render()` without parameters throughout your code when state changes. Return the template or template function at the end:
   ```javascript
   let value = 0;
   return () => html`<div>${value}</div>`;
   // When value changes, call render() without parameters
   ```

3. **Static vs Dynamic**: If your template never changes, return the template directly. If it needs to update, return a template function:
   ```javascript
   // Static
   return html`<div>Static content</div>`;
   
   // Dynamic
   let count = 0;
   return () => html`<div>${count}</div>`;
   ```

4. **Inter-module communication**: Use the `events` API for communication between different modules (not for local state management):
   ```javascript
   events('topic', (data) => { /* handle */ });
   events('topic', { data: 'value' });
   ```
   
   For local state management, use local variables within your module function.

5. **Error handling**: Wrap async operations in try-catch blocks:
   ```javascript
   try {
       const result = await someAsyncOperation();
   } catch (error) {
       console.error('Error:', error);
   }
   ```

6. **Module organization**: Split complex modules into smaller, reusable components and import them.

7. **Environment variables**: Use `env` for configuration instead of hardcoding values:
   ```javascript
   export default function ({html, env}) {
       const apiKey = env.apiKey;
   }
   ```

8. **Settings persistence**: Use `settings()` for user preferences that should persist across sessions.

## Module Configuration in Maps

To use your custom module in a map, add it to the map's `controls` or `overlays` array:

```json
{
  "controls": [
    {
      "src": "my-control.js",
      "position": "top-left"
    }
  ],
  "overlays": [
    {
      "src": "my-overlay.js"
    }
  ]
}
```

The `src` path should be relative to your workspace root.

## Additional Resources

- [OpenLayers Documentation](https://openlayers.org/)
- [Lit Documentation](https://lit.dev/)
- [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Web Awesome](https://webawesome.com) - Web components library used in geo!space

## Troubleshooting

### Module not loading
- Check that the `src` path in your map configuration is correct
- Ensure the module file is in your workspace
- Check the browser console for import errors

### Styles not applying
- Use `style()` for CSS properties (destructured from vars)
- Check that CSS selectors target elements within the module's element

### Events not firing
- Verify event names match between publisher and subscriber
- Ensure event handlers are set up in your module function (not in the returned template function)

### Import errors
- Use relative paths (`./` or `../`) for workspace imports
- Ensure imported modules export valid JavaScript
- Check for circular dependencies

