/* eslint-disable */

const locations = JSON.parse(document.getElementById('map').dataset.locations);

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXNiY2xhcmsiLCJhIjoiY2tiYjFwenJ1MDAzeDJ2cWh3ajh2Zmd2dSJ9.ZadTq3QiGvrica-K1luvPQ';

var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/chrisbclark/ckbb2ourn08de1iqiy7o743ic',
// center: [-80.743814,34.925885],
// zoom: 15
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach(loc => {
    //Create the Marker
    const el = document.createElement('div');
    el.className = 'marker'
    
    // Add the marker
    new mapboxgl.Marker({
        element: el,
        anchor: 'bottom'
    }).setLngLat(loc.coordinates).addTo(map);
//Extend the bounds to include the current location
bounds.extend(loc.coordinates)
map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 99
    }
  })
})