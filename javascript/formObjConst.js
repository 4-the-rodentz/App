// test this in the getCoords.html file

var DataPoint = function(userName, rodentType, observeMonth, lat, lng){
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
    new DataPoint('Jon', "Beaver", "January", 45.531605383770994, -122.66063690185547) ,
    new DataPoint('Dave', "Rat", "January", 45.531605383770994, -122.66063690185547),
    new DataPoint('Karen', "Vole", "November", 45.51999283770994, -122.67762483770994),
    new DataPoint('Susan', "Mouse", "January", 45.51189983770994, -122.62550383770994),
    new DataPoint('Jane', "Vole", "March", 45.51442183770994, -122.63226283770994),
    new DataPoint('Maddie', "Rat", "November", 45.52249983770994, -122.63934383770994),
    new DataPoint('Carrie', "Mouse", "January", 45.52249983770994,  -122.63934383770994),
    new DataPoint('Elisabeth', "Mouse", "April", 45.52249983770994, -122.63934383770994),
    new DataPoint('Amy', "Beaver", "January", 45.52123383770994, -122.69546583770994),
    new DataPoint('Caroline', "Beaver", "November", 45.52200783770994, -122.69144283770994),
    new DataPoint('Bob', "Rat", "April", 45.51999283770994, -122.67762483770994),
    new DataPoint('Dave', "Rat", "May", 45.531605383770994, -122.66063690185547),
    new DataPoint('Karen', "Vole", "May", 45.51299283770994, -122.67762483770994),
    new DataPoint('Susan', "Mouse", "June", 45.51389983770994, -122.62550383770994),
    new DataPoint('Jane', "Vole", "March", 45.51142183770994,-122.63226283770994),
    new DataPoint('Maddie', "Rat", "July", 45.56249983770994, -122.63934383770994),
    new DataPoint('Carrie', "Mouse", "June", 45.53249983770994,-122.63934383770994),
    new DataPoint('Dave', "Rat", "September", 45.511605383770994,-122.66363690185547),
    new DataPoint('Karen', "Vole", "August", 45.51599283770994, -122.67862483770994),
    new DataPoint('Susan', "Mouse", "November", 45.51689983770994, -122.62550383770994),
    new DataPoint('Jane', "Vole", "April", 45.51442183770994, -122.63226283770994),
    new DataPoint('Maddie', "Rat", "October", 45.52649983770994, -122.63734383770994),
    new DataPoint('Carrie', "Mouse", "December", 45.52249983770994, -122.63934383770994),
    new DataPoint('Karen', "Vole", "May", 45.51299283770994, -122.67762483770994),
    new DataPoint('Susan', "Mouse", "June", 45.51389983770994, -122.62550383770994),
    new DataPoint('Jane', "Vole", "April", 45.51142183770994, -122.63226283770994),
    new DataPoint('Maddie', "Rat", "July", 45.56249983770994, -122.63934383770994),
    new DataPoint('Carrie', "Mouse", "June", 45.53249983770994,-122.63934383770994),
    new DataPoint('Dave', "Rat", "September", 45.511605383770994,-122.66363690185547),
    new DataPoint('Karen', "Vole", "August", 45.51599283770994, -122.67862483770994),
    new DataPoint('Susan', "Mouse", "November", 45.51689983770994, -122.62550383770994),
    new DataPoint('Jane', "Vole", "March", 45.51442183770994, -122.63226283770994),
    new DataPoint('Maddie', "Rat", "October", 45.52649983770994, -122.63734383770994),
    new DataPoint('Carrie', "Mouse", "December", 45.52249983770994, -122.63934383770994),
    new DataPoint('Karen', "Vole", "February", 45.51999283770994,-122.67762483770994),
    new DataPoint('Susan', "Mouse", "January", 45.51189983770994, -122.62550383770994),
    new DataPoint('Jane', "Vole", "March", 45.51442183770994, -122.63226283770994),
    new DataPoint('Maddie', "Rat", "February", 45.52249983770994, -122.63934383770994),
    new DataPoint('Carrie', "Mouse", "January", 45.52249983770994, -122.63934383770994),
    new DataPoint('Elisabeth', "Mouse", "March", 45.52249983770994, -122.63934383770994),
    new DataPoint('Amy', "Beaver", "January", 45.52123383770994, -122.69546583770994),
    new DataPoint('Caroline', "Beaver", "February", 45.52200783770994, -122.69144283770994),
    new DataPoint('Bob', "Rat", "March", 45.51999283770994, -122.67762483770994),
    new DataPoint('Dave', "Rat", "April", 45.531605383770994, -122.66063690185547),
    new DataPoint('Karen', "Vole", "May", 45.51299283770994, -122.67762483770994),
    new DataPoint('Susan', "Mouse", "June", 45.51389983770994,  -122.62550383770994),
    new DataPoint('Jane', "Vole", "March", 45.51142183770994, -122.63226283770994),
    new DataPoint('Maddie', "Rat", "May", 45.56249983770994, -122.63934383770994),
    new DataPoint('Carrie', "Mouse", "June", 45.53249983770994, -122.63934383770994),
    new DataPoint('Dave', "Rat", "September", 45.511605383770994, -122.66363690185547),
    new DataPoint('Karen', "Vole", "August", 45.51599283770994, -122.67862483770994),
    new DataPoint('Amy', "Rat", "January", 45.52123383770994, -122.69546583770994),
    new DataPoint('Caroline', "Beaver", "February", 45.52200783770994, -122.69144283770994),
    new DataPoint('Bob', "Rat", "April", 45.51999283770994, -122.67762483770994),
    new DataPoint('Dave', "Rat", "May", 45.531605383770994, -122.66063690185547),
    new DataPoint('Karen', "Vole", "May", 45.51299283770994, -122.67762483770994),
    new DataPoint('Susan', "Mouse", "June", 45.51389983770994, -122.62550383770994),
    new DataPoint('Jane', "Vole", "March", 45.51142183770994,-122.63226283770994),
    new DataPoint('Maddie', "Rat", "July", 45.56249983770994, -122.63934383770994),
    new DataPoint('Maddie', "Beaver", "February", 45.52249983770994, -122.63934383770994),
    new DataPoint('Carrie', "Rat", "January", 45.52249983770994, -122.63934383770994),
    new DataPoint('Elisabeth', "Mouse", "March", 45.52249983770994,  -122.63934383770994),
    new DataPoint('Amy', "Beaver", "January", 45.52123383770994, -122.69546583770994),
    new DataPoint('Caroline', "Rat", "February", 45.52200783770994, -122.69144283770994),
    new DataPoint('Bob', "Rat", "April", 45.51999283770994, -122.67762483770994),
    new DataPoint('Dave', "Rat", "May", 45.531605383770994, -122.66063690185547),
    new DataPoint('Karen', "Rat", "May", 45.51299283770994, -122.67762483770994),
    new DataPoint('Susan', "Rat", "June", 45.51389983770994, -122.62550383770994),
    new DataPoint('Jane', "Vole", "March", 45.51142183770994,  -122.63226283770994),
    new DataPoint('Maddie', "Rat", "July", 45.56249983770994, -122.63934383770994),
    new DataPoint('Carrie', "Mouse", "June", 45.53249983770994, -122.63934383770994),
    new DataPoint('Dave', "Rat", "September", 45.511605383770994,  -122.66363690185547),
    new DataPoint('Karen', "Vole", "August", 45.51599283770994,  -122.67862483770994),
    new DataPoint('Amy', "Rat", "January", 45.52123383770994,-122.69546583770994),
    new DataPoint('Caroline', "Beaver", "February", 45.52200783770994, -122.69144283770994),
    new DataPoint('Bob', "Rat", "April", 45.51999283770994, -122.67762483770994),
    new DataPoint('Dave', "Rat", "May", 45.531605383770994, -122.66063690185547),
    new DataPoint('Karen', "Rat", "May", 45.51299283770994, -122.67762483770994),
    new DataPoint('Susan', "Rat", "June", 45.51389983770994, -122.62550383770994),
    new DataPoint('Jane', "Rat", "March", 45.51142183770994, -122.63226283770994),
    new DataPoint('Maddie', "Rat", "June", 45.56249983770994,  -122.63934383770994),
    new DataPoint('Carrie' , "Mouse", "December", 45.52249983770994, -122.63934383770994),
    new DataPoint('Carrie', "Rat", "December", 45.52249983770994, -122.63934383770994),
    new DataPoint('Carrie', "Beaver", "December", 45.52249983770994, -122.63934383770994),
    new DataPoint('Carrie', "Vole", "December", 45.52249983770994,  -122.63934383770994),
    new DataPoint('Karen', "Vole", "August", 45.51599283770994, -122.67862483770994),
    new DataPoint('Karen', "Mouse", "August", 45.51599283770994,  -122.67862483770994),
    new DataPoint('Karen', "Rat", "August", 45.51599283770994, -122.67862483770994),
    new DataPoint('Karen', "Beaver", "August", 45.51599283770994,  -122.67862483770994),
    new DataPoint('Karen', "Vole", "August", 45.51599283770994, -122.67862483770994),
    new DataPoint('Dave', "Rat", "September", 45.511605383770994, -122.66363690185547),
    new DataPoint('Dave', "Mouse", "September", 45.511605383770994, -122.66363690185547),
    new DataPoint('Dave', "Rat", "September", 45.511605383770994, -122.66363690185547),
    new DataPoint('Dave', "Mouse", "September", 45.511605383770994, -122.66363690185547),
    new DataPoint('Susan', "Mouse", "November", 45.51689983770994, -122.62550383770994),
    new DataPoint('Susan', "Rat", "November", 45.51689983770994, -122.62550383770994),
    new DataPoint('Susan', "Beaver", "November", 45.51689983770994, -122.62550383770994),
    new DataPoint('Susan', "Vole", "November", 45.51689983770994, -122.62550383770994)
];
