// Wait for all resources (including CSS) to be loaded before starting the app
if (document.readyState !== 'complete') {
    await new Promise<void>((resolve) => {
        if (document.readyState === 'complete') {
            resolve();
        } else {
            window.addEventListener('load', () => resolve(), { once: true });
        }
    });
}

// Import the app definition after resources are loaded
// The framework bootstraps automatically when importing from @kispace-io/appspace/api
// The app loader will automatically start when the app registers with autoStart: true
import "./geospace-app.ts";

