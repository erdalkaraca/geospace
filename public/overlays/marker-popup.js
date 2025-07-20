// geospace expects a default function taking an overlay object as its single parameter
// the overlay parameter acts as the context to interact with the map
export default (overlay) => {
    // get a reference to the map via the provided overlay parameter
    const map = overlay.getMap()

    // if the user clicks into the map
    map.on('click', (event) => {
        // if the overlay is already shown, hide it
        overlay.hide()
        const feature = map.forEachFeatureAtPixel(event.pixel, (feature) => feature);
        if (!feature) {
            // no hit, nothing to show
            return
        }
        // overwrite the overlay's HTML content
        overlay.html(`
            <div style="background: white; padding: 3px; border-radius: 5px; max-width: 300px">
                <b>${feature.get("name")}</b>
                <hr>
                <div>${feature.get("description")}</div>
            </div>
        `)
        // show the overlay at the hit coordinates
        overlay.show(event.coordinate)
    })

    // when user moves the pointer, change the cursor to signal a potential hit
    map.on('pointermove', event => {
        const hit = map.hasFeatureAtPixel(event.pixel);
        map.getTargetElement().style.cursor = hit ? 'pointer' : '';
    });
}