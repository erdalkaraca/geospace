import {OpenLayersMapRenderer} from "./openlayers-map-renderer.ts";
import {DEFAULT_GSMAP} from "../rt/gs-model.ts";

/**
 * Simple test to verify the OpenLayers map renderer works
 */
export async function testOpenLayersMapRenderer() {
    console.log('Testing OpenLayersMapRenderer...');
    
    // Create a test container
    const container = document.createElement('div');
    container.style.width = '400px';
    container.style.height = '300px';
    document.body.appendChild(container);
    
    try {
        // Create renderer with the default map
        const renderer = new OpenLayersMapRenderer(DEFAULT_GSMAP);
        
        // Render the map
        await renderer.render(container);
        
        console.log('✅ Map rendered successfully');
        console.log('✅ View:', renderer.getView());
        console.log('✅ Layers:', renderer.getLayers());
        
        // Test getting the map back
        const gsMap = renderer.getGsMap();
        console.log('✅ GsMap retrieved:', gsMap);
        
        // Clean up
        renderer.destroy();
        document.body.removeChild(container);
        
        console.log('✅ Test completed successfully');
        
    } catch (error) {
        console.error('❌ Test failed:', error);
        document.body.removeChild(container);
    }
}

// Run test if this file is executed directly
if (import.meta.url === `file://${__filename}`) {
    testOpenLayersMapRenderer();
}
