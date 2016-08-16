
var rodentSeason = [];
var seasonChart = [];
var animalArray = [beaverCount, ratCount, voleCount, mouseCount];
var sightMonthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var rodentSeasonTrack = function(animalArray, sightMonthArray) {
  this.animalArray = animalArray;
  this.sightMonthArray = sightMonthArray;
}
    for (var i = 0; i < rodentSeasonTrack.length; i++) {
      var currentImage = locations[i];
      var seasonChart; // initiate global chart variable
      rodentSeason.push({
        label: animalArray[i],
        y: sightMonthArray[i],
      }); // cycle through 'locations' array to push 'rodentType' and associated 'month' into 'rodentSeason' array
    }
rodentSeasonTrack(); // call function 'seasonalChart'

// function seasonalChart() { // object constructor to build chart
//   var chartProperties = {
//     title: {
//       text: "Seasonality of Rodent Sightings within the Greater Portland Area"
//     },
//     data: [{
//       type: 'stackedBar', // select type of chart to render
//       dataPoints: rodentSeason
//     }]
//   };
//   chart = new CanvasJS.Chart("seasonalChart", chartProperties);
//   chart.render(); // draws chart
// }



// <script type="text/javascript">
window.onload = function () {
  var chart = new CanvasJS.Chart("seasonalChart",
  {
    title:{
    text: "Seasonality of Rodent Sightings within the Greater Portland Area"
    },

    axisX: {
      valueFormatString: "MMM",
      interval: 1,
      intervalType: "month"
    },

    data: [
    {
      type: "stackedBar",
      legendText: "Beaver",
      showInLegend: "true",
      dataPoints: rodentSeason
      // [
      // { x: new Date(2012, 01, 1), y: 71 },
      // { x: new Date(2012, 02, 1), y: 55},
      // { x: new Date(2012, 03, 1), y: 50 },
      // { x: new Date(2012, 04, 1), y: 65 },
      // { x: new Date(2012, 05, 1), y: 95 }
      // ]
    },
      {
      type: "stackedBar",
      legendText: "Rat",
      showInLegend: "true",
      dataPoints: [
      { x: new Date(2012, 01, 1), y: 71 },
      { x: new Date(2012, 02, 1), y: 55},
      { x: new Date(2012, 03, 1), y: 50 },
      { x: new Date(2012, 04, 1), y: 65 },
      { x: new Date(2012, 05, 1), y: 95 }
      ]
    },
      {
      type: "stackedBar",
      legendText: "Vole",
      showInLegend: "true",
      dataPoints: [
      { x: new Date(2012, 01, 1), y: 71 },
      { x: new Date(2012, 02, 1), y: 55},
      { x: new Date(2012, 03, 1), y: 50 },
      { x: new Date(2012, 04, 1), y: 65 },
      { x: new Date(2012, 05, 1), y: 95 }
      ]
    },
      {
      type: "stackedBar",
      legendText: "Mouse",
      showInLegend: "true",
      dataPoints: [
      { x: new Date(2012, 01, 1), y: 61 },
      { x: new Date(2012, 02, 1), y: 75},
      { x: new Date(2012, 03, 1), y: 80 },
      { x: new Date(2012, 04, 1), y: 85 },
      { x: new Date(2012, 05, 1), y: 105 }
      ]
    },
    ]
  });

  chart.render();
}
// </script>
