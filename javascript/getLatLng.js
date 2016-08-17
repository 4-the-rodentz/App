var locData = [46.222, -127.555, 47.123, -128.234];
console.log(locData);

// Store array to localStorage
function storeLocation() {
  localStorage.setItem('loc_key_data', JSON.stringify(locData));
}

storeLocation();

// Retrieve stored data (JSON stringified) and convert
var storedLoc = localStorage.getItem('locData');
if (storedLoc) {
  locData = JSON.parse(storedLoc);
}
console.log(locData);

// Hardcoded lat and lng for testing
var lat = 47.470;
var lng = -127.127
console.log(lat, lng);

locData.push(lat, lng);
console.log(locData);

storeLocation();
