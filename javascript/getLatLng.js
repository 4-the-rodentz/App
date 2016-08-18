// If key exists initialize locData with parsed localStorage, or else create new array
var locData = JSON.parse(localStorage.getItem('loc_key_data')) || [];
console.log(locData);


// Get latitude and longitude and push values to locData array
var lat = prompt("Enter latitude: ");
var lng = prompt("Enter longitude: ");
locData.push(parseFloat(lat));
locData.push(parseFloat(lng));
localStorage.setItem('loc_key_data', JSON.stringify(locData));
// storeLocation();
console.log(JSON.parse(localStorage.getItem('loc_key_data')));
