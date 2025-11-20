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
// Using dynamic import ensures this runs after the wait logic
await import("./geospace-app");

