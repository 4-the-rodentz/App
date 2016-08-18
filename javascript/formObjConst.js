// test this in the getCoords.html file

var DataPoint = function(userName, location, rodentType, observeMonth, size, lat, lng, weight){
    this.userName = userName;
    this.location = location;
    this.rodentType = rodentType; // 1 thru 4
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
    new DataPoint('Jon', (45.531605383770994, -122.66063690185547), "Beaver", "January"),
    new DataPoint('Dave', (45.531605383770994, -122.66063690185547), "Rat", "January"),
    new DataPoint('Karen', (45.51999283770994, -122.67762483770994), "Vole", "February"),
    new DataPoint('Susan', (45.51189983770994, -122.62550383770994), "Mouse", "January"),
    new DataPoint('Jane', (45.51442183770994, -122.63226283770994), "Vole", "March"),
    new DataPoint('Maddie', (45.52249983770994, -122.63934383770994), "Rat", "February"),
    new DataPoint('Carrie', (45.52249983770994, -122.63934383770994), "Mouse", "January"),
    new DataPoint('Elisabeth', (45.52249983770994, -122.63934383770994), "Mouse", "March"),
    new DataPoint('Amy', (45.52123383770994, -122.69546583770994), "Beaver", "January"),
    new DataPoint('Caroline', (45.52200783770994, -122.69144283770994), "Beaver", "February"),
    new DataPoint('Bob', (45.51999283770994, -122.67762483770994), "Rat", "April"),
    new DataPoint('Dave', (45.531605383770994, -122.66063690185547), "Rat", "May"),
    new DataPoint('Karen', (45.51299283770994, -122.67762483770994), "Vole", "May"),
    new DataPoint('Susan', (45.51389983770994, -122.62550383770994), "Mouse", "June"),
    new DataPoint('Jane', (45.51142183770994, -122.63226283770994), "Vole", "March"),
    new DataPoint('Maddie', (45.56249983770994, -122.63934383770994), "Rat", "July"),
    new DataPoint('Carrie', (45.53249983770994, -122.63934383770994), "Mouse", "June"),
    new DataPoint('Dave', (45.511605383770994, -122.66363690185547), "Rat", "September"),
    new DataPoint('Karen', (45.51599283770994, -122.67862483770994), "Vole", "August"),
    new DataPoint('Susan', (45.51689983770994, -122.62550383770994), "Mouse", "November"),
    new DataPoint('Jane', (45.51442183770994, -122.63226283770994), "Vole", "March"),
    new DataPoint('Maddie', (45.52649983770994, -122.63734383770994), "Rat", "October"),
    new DataPoint('Carrie', (45.52249983770994, -122.63934383770994), "Mouse", "December"),
    new DataPoint('Karen', (45.51299283770994, -122.67762483770994), "Vole", "May"),
    new DataPoint('Susan', (45.51389983770994, -122.62550383770994), "Mouse", "June"),
    new DataPoint('Jane', (45.51142183770994, -122.63226283770994), "Vole", "March"),
    new DataPoint('Maddie', (45.56249983770994, -122.63934383770994), "Rat", "July"),
    new DataPoint('Carrie', (45.53249983770994, -122.63934383770994), "Mouse", "June"),
    new DataPoint('Dave', (45.511605383770994, -122.66363690185547), "Rat", "September"),
    new DataPoint('Karen', (45.51599283770994, -122.67862483770994), "Vole", "August"),
    new DataPoint('Susan', (45.51689983770994, -122.62550383770994), "Mouse", "November"),
    new DataPoint('Jane', (45.51442183770994, -122.63226283770994), "Vole", "March"),
    new DataPoint('Maddie', (45.52649983770994, -122.63734383770994), "Rat", "October"),
    new DataPoint('Carrie', (45.52249983770994, -122.63934383770994), "Mouse", "December"),
    new DataPoint('Karen', (45.51999283770994, -122.67762483770994), "Vole", "February"),
    new DataPoint('Susan', (45.51189983770994, -122.62550383770994), "Mouse", "January"),
    new DataPoint('Jane', (45.51442183770994, -122.63226283770994), "Vole", "March"),
    new DataPoint('Maddie', (45.52249983770994, -122.63934383770994), "Rat", "February"),
    new DataPoint('Carrie', (45.52249983770994, -122.63934383770994), "Mouse", "January"),
    new DataPoint('Elisabeth', (45.52249983770994, -122.63934383770994), "Mouse", "March"),
    new DataPoint('Amy', (45.52123383770994, -122.69546583770994), "Beaver", "January"),
    new DataPoint('Caroline', (45.52200783770994, -122.69144283770994), "Beaver", "February"),
    new DataPoint('Bob', (45.51999283770994, -122.67762483770994), "Rat", "April"),
    new DataPoint('Dave', (45.531605383770994, -122.66063690185547), "Rat", "May"),
    new DataPoint('Karen', (45.51299283770994, -122.67762483770994), "Vole", "May"),
    new DataPoint('Susan', (45.51389983770994, -122.62550383770994), "Mouse", "June"),
    new DataPoint('Jane', (45.51142183770994, -122.63226283770994), "Vole", "March"),
    new DataPoint('Maddie', (45.56249983770994, -122.63934383770994), "Rat", "July"),
    new DataPoint('Carrie', (45.53249983770994, -122.63934383770994), "Mouse", "June"),
    new DataPoint('Dave', (45.511605383770994, -122.66363690185547), "Rat", "September"),
    new DataPoint('Karen', (45.51599283770994, -122.67862483770994), "Vole", "August"),
    new DataPoint('Amy', (45.52123383770994, -122.69546583770994), "Beaver", "January"),
    new DataPoint('Caroline', (45.52200783770994, -122.69144283770994), "Beaver", "February"),
    new DataPoint('Bob', (45.51999283770994, -122.67762483770994), "Rat", "April"),
    new DataPoint('Dave', (45.531605383770994, -122.66063690185547), "Rat", "May"),
    new DataPoint('Karen', (45.51299283770994, -122.67762483770994), "Vole", "May"),
    new DataPoint('Susan', (45.51389983770994, -122.62550383770994), "Mouse", "June"),
    new DataPoint('Jane', (45.51142183770994, -122.63226283770994), "Vole", "March"),
    new DataPoint('Maddie', (45.56249983770994, -122.63934383770994), "Rat", "July"),
];
