import type { Plugin } from 'vite';

export function cssBeforeJsPlugin(): Plugin {
    return {
        name: 'css-before-js',
        transformIndexHtml(html) {
            const cssLinkRegex = /<link[^>]*rel=["']stylesheet["'][^>]*>/gi;
            const scriptRegex = /<script[^>]*type=["']module["'][^>]*><\/script>/gi;
            const modulePreloadRegex = /<link[^>]*rel=["']modulepreload["'][^>]*>/gi;
            
            const cssLinks: string[] = [];
            const scripts: string[] = [];
            const modulePreloads: string[] = [];
            
            html.match(cssLinkRegex)?.forEach(match => cssLinks.push(match));
            html.match(scriptRegex)?.forEach(match => scripts.push(match));
            html.match(modulePreloadRegex)?.forEach(match => modulePreloads.push(match));
            
            if (cssLinks.length === 0 && scripts.length === 0 && modulePreloads.length === 0) {
                return html;
            }
            
            let result = html;
            
            cssLinks.forEach(link => {
                result = result.replace(link, '');
            });
            
            scripts.forEach(script => {
                result = result.replace(script, '');
            });
            
            modulePreloads.forEach(preload => {
                result = result.replace(preload, '');
            });
            
            const insertionPoint = result.indexOf('</head>');
            if (insertionPoint !== -1) {
                const orderedAssets = [
                    ...cssLinks,
                    ...modulePreloads,
                    ...scripts
                ].join('\n  ');
                
                result = result.slice(0, insertionPoint) + 
                    (orderedAssets ? '\n  ' + orderedAssets + '\n' : '') +
                    result.slice(insertionPoint);
            }
            
            return result;
        }
    };
}

