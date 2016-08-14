function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {lat: 45.52693, lng: -122.67760},
        disableDefaultUI: true
    });

    // Google maps has an 'addListener' method that you can call on the returned map after calling the above.
    // this method returns and event ( see the 'e' below ) that has a 'latlng' object for much win and profit.

    map.addListener('click', function(e) {
        // placeMarkerAndPanTo(e.latLng, map);
        console.log(e.latLng.lat());
        console.log(e.latLng.lng());
        var lat = e.latLng.lat();
        var lng = e.latLng.lng();

        // functions to store and pass lat and lang

        placeMarker(e.latLng, map);
        insertLatLng(lat, lng);
    });

    var geocoder = new google.maps.Geocoder();

    document.getElementById('submit').addEventListener('click', function() {
        geocodeAddress(geocoder, map);
    });
}

// a function to place a marker on the map after click
function placeMarker(latLng, map) {
    var marker = new google.maps.Marker({
        position: latLng,
        map: map
    });
}

// insert lat and lng into text field

var latDataDrop = document.getElementById('locationLat');
var lngDataDrop = document.getElementById('locationLng');
latDataDrop.disabled = true; // this disables the ability to edit the field. They will have to click the map
latDataDrop.disabled = true;
latDataDrop.readOnly = true;// this disables the ability to highlight the text field
lngDataDrop.readOnly = true;

// this function inserts the lat and lng values set by above map.addListener method
function insertLatLng(lat, lng) {
    latDataDrop.value = lat.toFixed(3);
    lngDataDrop.value = lng.toFixed(3);
};
