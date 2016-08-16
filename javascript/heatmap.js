// Retrieve the latitude and longitude from storage
var retrievedLatLng = localStorage.getItem('latLngObject');
var parsedLatLng = JSON.parse(retrievedLatLng);
console.log('retrievedLatLng: ', JSON.parse(retrievedLatLng));
console.log('parsedLatLng: ', parsedLatLng);

var map, heatmap;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,  // Sets the initial zoom level on load
    center: {lat: 45.512, lng: -122.668},  // Centers map around east side of Hawthorne Bridge
    mapTypeId: 'roadmap'
  });

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map,
    radius: 30  // Size of heatmap points range 0-50, 30 best for 4-the-rodentz
  });
}


// Changes the color gradients for the heat points
function changeGradient() {
  var gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ]
}


// Heatmap data 
function getPoints() {
  return [
    new google.maps.LatLng(45.516410, -122.676450),
    new google.maps.LatLng(45.516330, -122.676490),
    new google.maps.LatLng(45.516390, -122.676510),
    new google.maps.LatLng(45.516450, -122.676380),
    new google.maps.LatLng(45.516390, -122.676380),
    new google.maps.LatLng(45.522990, -122.681100),
    new google.maps.LatLng(45.522570, -122.682480),
    new google.maps.LatLng(45.524440, -122.678700),
    new google.maps.LatLng(45.524920, -122.679040),
    new google.maps.LatLng(45.529070, -122.682220),
    new google.maps.LatLng(45.529010, -122.681960),
    new google.maps.LatLng(45.528830, -122.681880),
    new google.maps.LatLng(45.531380, -122.681770),
    new google.maps.LatLng(45.532880, -122.682280),
    new google.maps.LatLng(45.532820, -122.681600),
    new google.maps.LatLng(45.533310, -122.681940),
    new google.maps.LatLng(45.533070, -122.704000),
    new google.maps.LatLng(45.533000, -122.703740),
    new google.maps.LatLng(45.531860, -122.703140),
    new google.maps.LatLng(45.531680, -122.704430),
    new google.maps.LatLng(45.533490, -122.704600),
    new google.maps.LatLng(45.525730, -122.715930),
    new google.maps.LatLng(45.525370, -122.716190),
    new google.maps.LatLng(45.524410, -122.716270),
    new google.maps.LatLng(45.525010, -122.716360),
    new google.maps.LatLng(45.525250, -122.716360),
    new google.maps.LatLng(45.525250, -122.715670),
    new google.maps.LatLng(45.508050, -122.648640),
    new google.maps.LatLng(45.507450, -122.650700),
    new google.maps.LatLng(45.506480, -122.649840),
    new google.maps.LatLng(45.510570, -122.650780),
    new google.maps.LatLng(45.509130, -122.633100),
    new google.maps.LatLng(45.507870, -122.650780),
    new google.maps.LatLng(45.486510, -122.649070),
    new google.maps.LatLng(45.482240, -122.601950),
    new google.maps.LatLng(45.483800, -122.612590),
    new google.maps.LatLng(45.483020, -122.611730),
    new google.maps.LatLng(45.484700, -122.676880),
    new google.maps.LatLng(45.482240, -122.674820),
    new google.maps.LatLng(45.478870, -122.676190),
    new google.maps.LatLng(45.485070, -122.677990),
    new google.maps.LatLng(45.485670, -122.677560),
    new google.maps.LatLng(45.492470, -122.698850),
    new google.maps.LatLng(45.489700, -122.700310),
    new google.maps.LatLng(45.514600, -122.717730),
    new google.maps.LatLng(45.515210, -122.716100),
    new google.maps.LatLng(45.515090, -122.714990),
    new google.maps.LatLng(45.520020, -122.710270),
    new google.maps.LatLng(45.519480, -122.707180),
    new google.maps.LatLng(45.495600, -122.700570),
    new google.maps.LatLng(45.540580, -122.647180),
    new google.maps.LatLng(45.539140, -122.643320),
    new google.maps.LatLng(45.537510, -122.647780),
    new google.maps.LatLng(45.540760, -122.647350),
    new google.maps.LatLng(45.537810, -122.642290),
    new google.maps.LatLng(45.539570, -122.722710),
    new google.maps.LatLng(45.539510, -122.724350),
    new google.maps.LatLng(45.538970, -122.723570),
    new google.maps.LatLng(45.538610, -122.721680),
    new google.maps.LatLng(45.511770, -122.594470),
    new google.maps.LatLng(45.512830, -122.593530),
    new google.maps.LatLng(45.514580, -122.595060),
    new google.maps.LatLng(45.515260, -122.596900),
    new google.maps.LatLng(45.511830, -122.595900),
    new google.maps.LatLng(parsedLatLng.lat, parsedLatLng.lng) // variable data from getCoords.js
  ];
}
