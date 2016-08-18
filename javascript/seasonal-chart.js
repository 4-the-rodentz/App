
var beaverSeason = [];
var ratSeason = [];
var voleSeason = [];
var mouseSeason = [];

// var animalsArray = [beaverCount, ratCount, voleCount, mouseCount];

for (var i = 0; i < locations.length; i++) {
    var objBeaver = { x: locations[i].observeMonth, y: animalsArray[0] };
      beaverSeason.push(objBeaver); // dataPoints for Beaver
      console.log(objBeaver);
    var objRat = { x: locations[i].observeMonth, y: animalsArray[1] };
      ratSeason.push(objRat); // dataPoints for Rat
      console.log(objRat);
    var objVole = { x: locations[i].observeMonth, y: animalsArray[2] };
      voleSeason.push(objVole); // dataPoints for Vole
      console.log(objVole);
    var objMouse = { x: locations[i].observeMonth, y: animalsArray[3] };
      mouseSeason.push(objMouse); // dataPoints for Mouse
      console.log(objMouse);
}

function drawStackedBarChart() {
  var chart = new CanvasJS.Chart("chartContainer", {
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
      dataPoints: beaverSeason
    },
      {
      type: "stackedBar",
      legendText: "Rat",
      showInLegend: "true",
      dataPoints: ratSeason
    },
      {
      type: "stackedBar",
      legendText: "Vole",
      showInLegend: "true",
      dataPoints: voleSeason
    },
      {
      type: "stackedBar",
      legendText: "Mouse",
      showInLegend: "true",
      dataPoints: mouseSeason,
    },
    ]
  });
  chart.render();
}

document.getElementById('chartType').addEventListener("change", choseChartType);

function choseChartType() {
  if (document.getElementById("chartType").value == "seasonalchart") {
    drawStackedBarChart();
  }
}
