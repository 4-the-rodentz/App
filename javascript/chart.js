var beaverCount = 0;
var ratCount = 0;
var voleCount = 0;
var mouseCount = 0;

var animalNames = ["Beaver", "Rat", "Vole", "Mouse"];

(function animalCounts() {
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
    if(localAnimals) {
        beaverCount += localAnimals.localBeaverCount;
        ratCount += localAnimals.localRatCount;
        voleCount += localAnimals.localVoleCount;
        mouseCount += localAnimals.localMouseCount;
    }
    animalsArray = [beaverCount, ratCount, voleCount, mouseCount];
    return animalsArray;
})();


function convert() {
    var newArr = [];

    for (var i = 0; i < animalsArray.length; i++) {
        var newObj = {
            label: animalNames[i],
            y: animalsArray[i]
        };
        newArr.push(newObj);
    }
    return newArr;
}

var beaverWinter = 0;
var beaverSpring = 0;
var beaverSummer = 0;
var beaverFall = 0; // added by TLS

var voleWinter = 0;
var voleSpring = 0;
var voleSummer = 0;
var voleFall = 0;

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
            (locations[i].rodentType == "Beaver" && locations[i].observeMonth == "February") ||
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
}

function ratSeason() {
    for (var i = 0; i < locations.length; i++) {
        if ((locations[i].rodentType == "Rat" && locations[i].observeMonth == "January") ||
            (locations[i].rodentType == "Rat" && locations[i].observeMonth == "February") ||
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
            (locations[i].rodentType == "Vole" && locations[i].observeMonth == "February") ||
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
            (locations[i].rodentType == "Mouse" && locations[i].observeMonth == "February") ||
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
// var beaverMonthCount = 0;
// var ratMonthCount = 0;
// var voleMonthCount = 0;
// var mouseMonthCount = 0;
//
// for (var j = 0; j < locations.length; j++) {
//     if (locations[j].rodentType == "Beaver") {
//       beaverMonthCount++;
//       console.log(beaverMonthCount);
//     }
//     var objBeaver = { x: observeMonth, y: beaverMonthCount };
//     if (locations[j].rodentType == "Beaver") {
//       beaverSeason.push(objBeaver); // dataPoints for Beaver input to chart
//       console.log(objBeaver);
//     }
// }
//
// for (var k = 0; k < locations.length; k++) {
//     if (locations[k].rodentType == "Rat") {
//       ratMonthCount++;
//       console.log(ratMonthCount);
//     }
//     var objRat = { x: observeMonth, y: ratMonthCount };
//     if (locations[k].rodentType == 'Rat') {
//       ratSeason.push(objRat); // dataPoints for Rat input to chart
//       console.log(objRat);
//     }
// }
//
// for (var l = 0; l < locations.length; l++) {
//     if (locations[l].rodentType == "Vole") {
//       voleMonthCount++;
//       console.log(voleMonthCount);
//     }
//     var objVole = { x: observeMonth, y: voleMonthCount };
//     if (locations[l].rodentType == 'Vole') {
//       voleSeason.push(objVole); // dataPoints for Vole input to chart
//       console.log(objVole);
//     }
// }
//
// for (var m = 0; m < locations.length; m++) {
//     if (locations[m].rodentType == "Mouse") {
//       mouseMonthCount++;
//       console.log(mouseMonthCount);
//     }
//     var objMouse = { x: observeMonth, y: mouseMonthCount };
//     if (locations[m].rodentType == 'Mouse') {
//       mouseSeason.push(objMouse); // dataPoints for Mouse input to chart
//       console.log(objMouse);
//     }
// } // end of added by TLS


function drawBarChart() {

    var chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: "Number of Rodents in the Greater Portland Area"
        },
        data: [
            {
                type: "column",
                dataPoints: convert()
            }
        ]
    });
    chart.render();
}

function drawPieChart() {

	var chart = new CanvasJS.Chart("chartContainer", {
		title:{
			text: "Number of Rodents in the Greater Portland Area"
		},
		data: [
		{
			type: "pie",
			dataPoints: convert()
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
    data: [
         {
           type: "stackedBar100",
           legendText: "Spring",
           showInLegend: "true",
            dataPoints: [
           { label: "Beaver", y: beaverSpring },
           { label: "Rat", y: ratSpring},
           { label: "Vole", y: voleSpring },
           { label: "Mouse", y: mouseSpring }
           ]
         },
          {
           type: "stackedBar100",
           legendText: "Summer",
           showInLegend: "true",
            dataPoints: [
           { label: "Beaver", y: beaverSummer },
           { label: "Rat", y: ratSummer},
           { label: "Vole", y: voleSummer },
           { label: "Mouse", y: mouseSummer }
           ]
         },
           {
           type: "stackedBar100",
           legendText: "Fall",
           showInLegend: "true",
            dataPoints: [
           { label: "Beaver", y: beaverFall },
           { label: "Rat", y: ratFall},
           { label: "Vole", y: voleFall },
           { label: "Mouse", y: mouseFall }
           ]
         },
              {
           type: "stackedBar100",
           legendText: "Winter",
           showInLegend: "true",
            dataPoints: [
           { label: "Beaver", y: beaverWinter },
           { label: "Rat", y: ratWinter},
           { label: "Vole", y: voleWinter },
           { label: "Mouse", y: mouseWinter }
           ]
         }
         ]
       });
       chart.render();
     }// end of added by TLS

document.getElementById('chartType').addEventListener("change", choseChartType);

function choseChartType() {
    if (document.getElementById("chartType").value == "piechart") {
        drawPieChart();
    }
    if (document.getElementById("chartType").value == "barchart") {
        drawBarChart();
    }
    if (document.getElementById("chartType").value == "seasonalchart") { // added by TLS
        beaverSeason();
        ratSeason();
        voleSeason();
        mouseSeason();
        drawStackedBarChart();
    } // end of added by TLS


    document.getElementById('chartContainer').style.height = '500px'; // animate the chart into view
}