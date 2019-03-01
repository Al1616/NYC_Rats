'use strict'

console.log('Loaded map.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiYWwxNjE2IiwiYSI6ImNqc200ZXQ0YTBnOWE0NG54Ym45YnYybHgifQ.t9lM7oOjsxtKmQS_BGfbdg'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/al1616/cjsqb2ba63pj21fsbm4o5vyr6',
    center: [-73.96216,40.80779],
    zoom: 16
})

let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})
map.addControl(navigation, 'top-left')

let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})
map.addControl(scale, 'bottom-right')

let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation: true,
    fitBoundsOptions: {
    }
})
map.addControl(geolocate, 'top-left')

geolocate.on('geolocate', function(event) {

})