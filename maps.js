L.mapbox.accessToken = 'pk.eyJ1IjoiamVvbmdzaGluIiwiYSI6ImNrcnM0dXQ4bTAya3IyeHA5ODBjNjVjNmEifQ.ShFO1bxqVvldKvwnY53ooQ';
var map = L.map('mapid').setView([34.79, 126.355], 13);

// Add tiles from the Mapbox Static Tiles API
L.tileLayer(
    'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=' + L.mapbox.accessToken, {
        tileSize: 512,
        zoomOffset: -1,
        attribution: '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
L.mapbox.styleLayer('mapbox://styles/jeongshin/ckru31iae3qwu19pjs9gy6xoa/draft').addTo(map);