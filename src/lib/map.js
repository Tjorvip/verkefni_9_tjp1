import L from 'leaflet';

// Býr til popup á korti út frá geojson með content
export function createPopup(geojson, content) {
  // TODO
}


export function init(el) {
  var map = L.map('map', {
    center: [0, 0],
    zoom: 2
});
  
  
  var tileUrl = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token',
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
  }).addTo(map);
}
