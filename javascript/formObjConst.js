// test this in the getCoords.html file

var DataPoint = function(userName, location, rodentType, size, date, lat, lng, weight){
    this.userName = userName;
    this.location = location;
    this.rodentType = rodentType; // 1 thru 4
    this.size = size; // 1 thru 4
    this.date = date;
    this.lat = lat;
    this.lng = lng;
    this.weight = weight;
    this.heatmapObject = function(lat, lng, weight){
        return {location: new google.maps.LatLng(lat, lng), weight: weight};
    };
};

// some sort of location constructor to be used in constructing the heatmap
// ** goes here

// google maps format:
// var heatmapData = [ new google.maps.LatLng(37.782, -122.447) ]
// var heatmap = new google.maps.visualization.HeatmapLayer({
//     data: heatmapData
// });

var locations = [
    new DataPoint('Jon', (45.531605383770994, -122.66063690185547, 10), "Beaver", "jan 1"),
    new DataPoint('Dave', (45.531605383770994, -122.66063690185547, 10), "Beaver", "feb 10")
];