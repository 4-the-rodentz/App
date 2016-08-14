// capture all data fields when button is pressed
document.getElementById('formSubmit').addEventListener('click', function(){
    var lat, lng, rodentTypeEl, rodentTypeValue, rodentSize;

    lat = document.getElementById('locationLat').value;
    lng = document.getElementById('locationLng').value;
    rodentTypeEl = document.getElementById('rodentType');
    rodentTypeValue = rodentTypeEl.options[rodentTypeEl.selectedIndex].value;

});

// create function to convert data to json format and store in local storage