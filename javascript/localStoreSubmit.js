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

    // another function for storing in local storage in chart format
    var forchart = {};

    // format to be stored: it asks for count and animal type.
    // Create a storage for each animals count

    // if local storage has 'this' animal, add to animals count in chart.js
    if(!localStorage.getItem('animalCount')) {
        populateStorage();
    } else {
        // pull out the array and append to it
        pullLocalStorage();
    }

    function populateStorage(){

        var localAnimalCount = {
            localBeaverCount: 0,
            localRatCount: 0,
            localVoleCount: 0,
            localMouseCount:0
        };

        switch(rodentTypeValue) {
            case "beaver":
                localAnimalCount.localBeaverCount++;
                break;
            case "rat":
                localAnimalCount.localRatCount++;
                break;
            case "vole":
                localAnimalCount.localVoleCount++;
                break;
            case "mouse":
                localAnimalCount.localMouseCount++;
                break;
        }
        console.log(localAnimalCount);
      localStorage.setItem('animalCount', JSON.stringify(localAnimalCount));
    }

    function pullLocalStorage(){
     var shortAnimalObj = JSON.parse(localStorage.getItem('animalCount'));
        switch(rodentTypeValue) {
            case "beaver":
                shortAnimalObj.localBeaverCount++;
                break;
            case "rat":
                shortAnimalObj.localRatCount++;
                break;
            case "vole":
                shortAnimalObj.localVoleCount++;
                break;
            case "mouse":
                shortAnimalObj.localMouseCount++;
                break;
        }
        localStorage.setItem('animalCount', JSON.stringify(shortAnimalObj));
        console.log("Pull local storage function fired");
    }

    // localStorage.setItem('forChart', JSON.stringify(forChart));


    console.log(JSON.parse(localStorage.getItem('heatMap'))); // testing results

    // create a constructor for accessing data from local storage


    document.location = "../html/AppWebPage-2.html"; // redirect after submit
});
