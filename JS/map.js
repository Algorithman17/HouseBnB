export function createMap(parentNode, oldChild) {
    const mapElement = document.createElement("div")
    mapElement.setAttribute("id", "map")

    parentNode.replaceChild(mapElement, oldChild)

    const map = L.map(mapElement).setView([51.505, -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}
