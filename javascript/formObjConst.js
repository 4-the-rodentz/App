var DataPoint = function(userName, location, rodentType, size, date){
    this.userName = userName;
    this.location = location;
    this.rodentType = rodentType; // 1 thru 4
    this.size = size; // 1 thru 4
    this.date = date;
};

// some sort of location constructor to be used in constructing the heatmap
// ** goes here
// locations.forEach(function(){
//
// });

// heatmap.js format: { x:5, y:5, value: 100 }

// google maps format:
// var heatmapData = [ new google.maps.LatLng(37.782, -122.447) ]
// var heatmap = new google.maps.visualization.HeatmapLayer({
//     data: heatmapData
// });



var locationObj = { x:5, y:5, value: 100 };

var locations = [
    new DataPoint('Jon', locationObj, "Beaver", "jan 1"),
    new DataPoint('Dave', locationObj, "Beaver", "feb 10")
];