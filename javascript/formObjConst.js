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
    new DataPoint('Dave', (45.531605383770994, -122.66063690185547, 10), "Rat", "feb 10"),
    new DataPoint('Karen', (45.51999283770994, -122.67762483770994, 10), "Vole", "jan 1"),
    new DataPoint('Susan', (45.51189983770994, -122.62550383770994, 10), "Mouse", "feb 10"),
    new DataPoint('Jane', (45.51442183770994, -122.63226283770994, 10), "Vole", "jan 1"),
    new DataPoint('Maddie', (45.52249983770994, -122.63934383770994, 10), "Rat", "feb 10"),
    new DataPoint('Carrie', (45.52249983770994, -122.63934383770994, 10), "Mouse", "jan 1"),
    new DataPoint('Elisabeth', (45.52249983770994, -122.63934383770994, 10), "Mouse", "feb 10"),
    new DataPoint('Caroline', (45.52200783770994, -122.69144283770994, 10), "Beaver", "jan 1"),
    new DataPoint('Amy', (45.52123383770994, -122.69546583770994, 10), "Beaver", "feb 10")
];
