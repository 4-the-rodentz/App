// capture all data fields when button is pressed

document.getElementById('formSubmit').addEventListener('click', function(e){
    e.preventDefault(); // this prevents the form button from submitting -- for testing --

    var localLat, localLng, rodentTypeEl, rodentTypeValue;

    localLat = document.getElementById('locationLat').value;
    localLng = document.getElementById('locationLng').value;
    rodentTypeEl = document.getElementById('rodentType');
    rodentTypeValue = rodentTypeEl.options[rodentTypeEl.selectedIndex].value;
    
    // create function to convert data to json format and store in local storage
    var userInput = {userName: getUserInfo["0"].userName, rodentType: rodentTypeValue};
    localStorage.setItem("userData", JSON.stringify(userInput));

    // create function to convert data to json format and store in local storage
    var forHeatmap = {location: new google.maps.LatLng(localLat, localLng)};
    localStorage.setItem('heatMap', JSON.stringify(forHeatmap));

    console.log(JSON.parse(localStorage.getItem('heatMap'))); // testing results

    // create a constructor for accessing data from local storage
    document.location = "../html/AppWebPage-2.html";
});
