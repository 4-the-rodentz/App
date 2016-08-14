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

drawBarChart();
drawPieChart();
