export default (overlay) => {
    const map = overlay.getMap()
    overlay.getResourceUrl("location-user-24.png").then(url => {
        overlay.html(`
                <img src="${url}" alt="user location">
            `)
    })
    const id = navigator.geolocation.watchPosition(
        function (pos) {
            const coords = [pos.coords.longitude, pos.coords.latitude];
            overlay.show(overlay.fromLonLat(coords))
            // clear watch, else no other watches will be possible
            navigator.geolocation.clearWatch(id)
        },
        function (error) {
            alert(`ERROR: ${error.message}`);
        },
        {
            enableHighAccuracy: true,
        },
    );
}