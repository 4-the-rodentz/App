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
    });

    var geocoder = new google.maps.Geocoder();

    document.getElementById('submit').addEventListener('click', function() {
        geocodeAddress(geocoder, map);
    });
}
// var mapResults;
// function geocodeAddress(geocoder, resultsMap) {
//     var address = document.getElementById('address').value;
//     geocoder.geocode({'address': address}, function(results, status) {
//         mapResults = results;
//         if (status === 'OK') {
//             resultsMap.setCenter(results[0].geometry.location);
//             var marker = new google.maps.Marker({
//                 map: resultsMap,
//                 position: results[0].geometry.location
//             });
//
//         } else {
//             alert('Geocode was not successful for the following reason: ' + status);
//         }
//     });
// }