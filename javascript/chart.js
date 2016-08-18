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
    var localAnimals = JSON.parse(localStorage.getItem('animalCount'));
    beaverCount += localAnimals.localBeaverCount;
    ratCount += localAnimals.localRatCount;
    voleCount += localAnimals.localVoleCount;
    mouseCount += localAnimals.localMouseCount;
}
animalCounts();

var animalsArray = [beaverCount, ratCount, voleCount, mouseCount];
var newArr = [];

function convert() {
  newArr = [];
  for (var i = 0; i < 4; i++) {
    var newObj = {
      label: locations[i].rodentType,
      y: animalsArray[i]
    };

    newArr.push(newObj);
  }
}

<<<<<<< HEAD
var beaverSeason = []; // added by TLS
var ratSeason = [];
var voleSeason = [];
var mouseSeason = [];
var observeMonth = [];
=======
var beaverWinter = 0;
var beaverSpring = 0;
var beaverSummer = 0;
var beaverFall = 0; // added by TLS
>>>>>>> master

var voleWinter = 0;
var voleSpring = 0;
var voleSummer = 0;
var voleFall = 0;

<<<<<<< HEAD
function convertMonth() {
for (var i = 0; i < locations.length; i++) {
  if ((locations[i].observeMonth == "January") && (locations[i].observeMonth ==)

  if(locations[i].observeMonth == "January") {
    observeMonth = new Date(2016, 00, 1);
  }
  if(locations[i].observeMonth == "February") {
    observeMonth = new Date(2016, 01, 1);
  }
  if(locations[i].observeMonth == "March") {
    observeMonth = new Date(2016, 02, 1);
  }
=======
var ratWinter = 0;
var ratSpring = 0;
var ratSummer = 0;
var ratFall = 0;

var mouseWinter = 0;
var mouseSpring = 0;
var mouseSummer = 0;
var mouseFall = 0;

function beaverSeason() {
    for (var i = 0; i < locations.length; i++) {
        if ((locations[i].rodentType == "Beaver" && locations[i].observeMonth == "January") ||
            (locations[i].rodentType == "Beaver" && locations[i].observeMonth == "Feburary") ||
            (locations[i].rodentType == "Beaver" && locations[i].observeMonth == "December")) {
            beaverWinter++
        }
        if ((locations[i].rodentType == "Beaver" && locations[i].observeMonth == "March") ||
            (locations[i].rodentType == "Beaver" && locations[i].observeMonth == "April") ||
            (locations[i].rodentType == "Beaver" && locations[i].observeMonth == "May")) {
            beaverSpring++
        }
        if ((locations[i].rodentType == "Beaver" && locations[i].observeMonth == "July") ||
            (locations[i].rodentType == "Beaver" && locations[i].observeMonth == "August") ||
            (locations[i].rodentType == "Beaver" && locations[i].observeMonth == "June")) {
            beaverSummer++
        }
        if ((locations[i].rodentType == "Beaver" && locations[i].observeMonth == "September") ||
            (locations[i].rodentType == "Beaver" && locations[i].observeMonth == "October") ||
            (locations[i].rodentType == "Beaver" && locations[i].observeMonth == "November")) {
            beaverFall++
        }
    }
>>>>>>> master
}

function ratSeason() {
    for (var i = 0; i < locations.length; i++) {
        if ((locations[i].rodentType == "Rat" && locations[i].observeMonth == "January") ||
            (locations[i].rodentType == "Rat" && locations[i].observeMonth == "Feburary") ||
            (locations[i].rodentType == "Rat" && locations[i].observeMonth == "December")) {
            ratWinter++
        }
        if ((locations[i].rodentType == "Rat" && locations[i].observeMonth == "March") ||
            (locations[i].rodentType == "Rat" && locations[i].observeMonth == "April") ||
            (locations[i].rodentType == "Rat" && locations[i].observeMonth == "May")) {
            ratSpring++
        }
        if ((locations[i].rodentType == "Rat" && locations[i].observeMonth == "July") ||
            (locations[i].rodentType == "Rat" && locations[i].observeMonth == "August") ||
            (locations[i].rodentType == "Rat" && locations[i].observeMonth == "June")) {
            ratSummer++
        }
        if ((locations[i].rodentType == "Rat" && locations[i].observeMonth == "September") ||
            (locations[i].rodentType == "Rat" && locations[i].observeMonth == "October") ||
            (locations[i].rodentType == "Rat" && locations[i].observeMonth == "November")) {
            ratFall++
        }
    }
}

function voleSeason() {
    for (var i = 0; i < locations.length; i++) {
        if ((locations[i].rodentType == "Vole" && locations[i].observeMonth == "January") ||
            (locations[i].rodentType == "Vole" && locations[i].observeMonth == "Feburary") ||
            (locations[i].rodentType == "Vole" && locations[i].observeMonth == "December")) {
            voleWinter++
        }
        if ((locations[i].rodentType == "Vole" && locations[i].observeMonth == "March") ||
            (locations[i].rodentType == "Vole" && locations[i].observeMonth == "April") ||
            (locations[i].rodentType == "Vole" && locations[i].observeMonth == "May")) {
            voleSpring++
        }
        if ((locations[i].rodentType == "Vole" && locations[i].observeMonth == "July") ||
            (locations[i].rodentType == "Vole" && locations[i].observeMonth == "August") ||
            (locations[i].rodentType == "Vole" && locations[i].observeMonth == "June")) {
            voleSummer++
        }
        if ((locations[i].rodentType == "Vole" && locations[i].observeMonth == "September") ||
            (locations[i].rodentType == "Vole" && locations[i].observeMonth == "October") ||
            (locations[i].rodentType == "Vole" && locations[i].observeMonth == "November")) {
            voleFall++
        }
    }
}

function mouseSeason() {
    for (var i = 0; i < locations.length; i++) {
        if ((locations[i].rodentType == "Mouse" && locations[i].observeMonth == "January") ||
            (locations[i].rodentType == "Mouse" && locations[i].observeMonth == "Feburary") ||
            (locations[i].rodentType == "Mouse" && locations[i].observeMonth == "December")) {
            mouseWinter++
        }
        if ((locations[i].rodentType == "Mouse" && locations[i].observeMonth == "March") ||
            (locations[i].rodentType == "Mouse" && locations[i].observeMonth == "April") ||
            (locations[i].rodentType == "Mouse" && locations[i].observeMonth == "May")) {
            mouseSpring++
        }
        if ((locations[i].rodentType == "Mouse" && locations[i].observeMonth == "July") ||
            (locations[i].rodentType == "Mouse" && locations[i].observeMonth == "August") ||
            (locations[i].rodentType == "Mouse" && locations[i].observeMonth == "June")) {
            mouseSummer++
        }
        if ((locations[i].rodentType == "Mouse" && locations[i].observeMonth == "September") ||
            (locations[i].rodentType == "Mouse" && locations[i].observeMonth == "October") ||
            (locations[i].rodentType == "Mouse" && locations[i].observeMonth == "November")) {
            mouseFall++
        }
    }
}

for (var i = 0; i < locations.length; i++) {
    var objBeaver = { x: observeMonth, y: beaverCount };
    if (locations[i].rodentType == "Beaver") {
      beaverSeason.push(objBeaver); // dataPoints for Beaver input to chart
      console.log(objBeaver);
    }
};

for (var i = 0; i < locations.length; i++) {
    if (locations[i].rodentType == "Rat") {
      ratCount++;
      console.log(ratCount);
    }
    var objRat = { x: observeMonth, y: ratCount };
    if (locations[i].rodentType == 'Rat') {
      ratSeason.push(objRat); // dataPoints for Rat input to chart
      console.log(objRat);
    }
};

for (var i = 0; i < locations.length; i++) {
    if (locations[i].rodentType == "Vole") {
      voleCount++;
      console.log(voleCount);
    }
    var objVole = { x: observeMonth, y: voleCount };
    if (locations[i].rodentType == 'Vole') {
      voleSeason.push(objVole); // dataPoints for Vole input to chart
      console.log(objVole);
    }
};

for (var i = 0; i < locations.length; i++) {
    if (locations[i].rodentType == "Mouse") {
      mouseCount++;
      console.log(mouseMonthCount);
    }
    var objMouse = { x: observeMonth, y: mouseCount };
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
};
