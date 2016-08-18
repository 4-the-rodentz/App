// test this in the getCoords.html file

var DataPoint = function(userName, rodentType, observeMonth, size, lat, lng, weight){
    this.userName = userName;
    this.rodentType = rodentType;
    this.observeMonth = observeMonth;
    this.lat = lat;
    this.lng = lng;
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
    new DataPoint('Jon', "Beaver", "jan 1", 45.531605383770994, -122.66063690185547),
    new DataPoint('Dave', "Rat", "feb 10", 45.531605383770994, -122.66063690185547),
    new DataPoint('Karen', "Vole", "jan 1", 45.51999283770994, -122.67762483770994),
    new DataPoint('Susan', "Mouse", "feb 10", 45.51189983770994, -122.62550383770994),
    new DataPoint('Jane', "Vole", "jan 1", 45.51442183770994, -122.63226283770994),
    new DataPoint('Maddie', "Rat", "feb 10", 45.52249983770994,-122.63934383770994),
    new DataPoint('Carrie', "Mouse", "jan 1", 45.52249983770994, -122.63934383770994),
    new DataPoint('Elisabeth', "Mouse", "feb 10", 45.52249983770994, -122.63934383770994),
    new DataPoint('Amy', "Beaver", "feb 10", 45.52123383770994, -122.69546583770994),
    new DataPoint('Caroline', "Beaver", "jan 1", 45.52200783770994, -122.69144283770994)
];
