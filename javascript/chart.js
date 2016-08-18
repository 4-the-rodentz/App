var beaverCount = 0;
var ratCount = 0;
var voleCount = 0;
var mouseCount = 0;

function animalCounts() {
for (var i = 0; i < locations.length; i++) {
  if (locations[i].rodentType == "Beaver") {
    beaverCount++
  }
  if (locations[i].rodentType == "Rat") {
    ratCount++
  }
  if (locations[i].rodentType == "Vole") {
    voleCount++
  }
  if (locations[i].rodentType == "Mouse") {
    mouseCount++
  }
}
}
animalCounts();

var animalsArray = [beaverCount, ratCount, voleCount, mouseCount];
var newArr = [];

function convert() {
  newArr = [];
  for (var i = 0; i < 4; i++) {
    var newObj = {
      label: locations[i].rodentType,
      y: animalsArray[i],
    }

    newArr.push(newObj);
  }
}

var beaverSeason = []; // added by TLS
var beaverMonthCount = 0;
var ratSeason = [];
var ratMonthCount = 0;
var voleSeason = [];
var voleMonthCount = 0;
var mouseSeason = [];
var mouseMonthCount = 0;

for (var i = 0; i < locations.length; i++) {
    if (locations[i].rodentType == "Beaver") {
      beaverMonthCount++;
      console.log(beaverMonthCount);
    }
    var objBeaver = { x: locations[i].observeMonth, y: beaverMonthCount };
    if (locations[i].rodentType == "Beaver") {
      beaverSeason.push(objBeaver); // dataPoints for Beaver input to chart
      console.log(objBeaver);
    }
};

for (var i = 0; i < locations.length; i++) {
    if (locations[i].rodentType == "Rat") {
      ratMonthCount++;
      console.log(ratMonthCount);
    }
    var objRat = { x: locations[i].observeMonth, y: ratMonthCount };
    if (locations[i].rodentType == 'Rat') {
      ratSeason.push(objRat); // dataPoints for Rat input to chart
      console.log(objRat);
    }
};

for (var i = 0; i < locations.length; i++) {
    if (locations[i].rodentType == "Vole") {
      voleMonthCount++;
      console.log(voleMonthCount);
    }
    var objVole = { x: locations[i].observeMonth, y: voleMonthCount };
    if (locations[i].rodentType == 'Vole') {
      voleSeason.push(objVole); // dataPoints for Vole input to chart
      console.log(objVole);
    }
};

for (var i = 0; i < locations.length; i++) {
    if (locations[i].rodentType == "Mouse") {
      mouseMonthCount++;
      console.log(mouseMonthCount);
    }
    var objMouse = { x: locations[i].observeMonth, y: mouseMonthCount };
    if (locations[i].rodentType == 'Mouse') {
      mouseSeason.push(objMouse); // dataPoints for Mouse input to chart
      console.log(objMouse);
    }
}; // end of added by TLS


function drawBarChart() {
  convert();
	var chart = new CanvasJS.Chart("chartContainer", {
		title:{
			text: "Number of Rodents in the Greater Portland Area"
		},
		data: [
		{
			type: "column",
			dataPoints: newArr
		}
		]
	});
	chart.render();
}

function drawPieChart() {
  convert();
	var chart = new CanvasJS.Chart("chartContainer", {
		title:{
			text: "Number of Rodents in the Greater Portland Area"
		},
		data: [
		{
			type: "pie",
			dataPoints: newArr
		}
		]
	});
	chart.render();
}

function drawStackedBarChart() { // added by TLS
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
      dataPoints: mouseSeason
    },
    ]
  });
  chart.render();
} // end of added by TLS

//
// drawBarChart();
// drawPieChart();
document.getElementById('chartType').addEventListener("change", choseChartType);

function choseChartType() {
  if (document.getElementById('chartType').value == "piechart") {
    drawPieChart();
  }
  if (document.getElementById("chartType").value == "barchart"){
    drawBarChart();
  }
  if (document.getElementById("chartType").value == "seasonalchart") { // added by TLS
    drawStackedBarChart();
  } // end of added by TLS
}
