/*****************************************************************************/
/* GymnastVis: Event Handlers */
/*****************************************************************************/
Template.GymnastVis.events({
});

/*****************************************************************************/
/* GymnastVis: Helpers */
/*****************************************************************************/
Template.GymnastVis.helpers({
});

/*****************************************************************************/
/* GymnastVis: Lifecycle Hooks */
/*****************************************************************************/
Template.GymnastVis.onCreated(function () {
});

Template.GymnastVis.onRendered(function () {


	var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

  var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

  var y = d3.scale.linear()
    .range([height, 0]);

  var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

	var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

  var line = d3.svg.line()
    .x(function(d) { return x(d.comp); })
    .y(function(d) { return y(d.scores.fx.d); });

  var svg = d3.select("#lineChartTest")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  	.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // var key = function(d) {
  // 	return d._id;
  // }

  svg.append("g")
  	.attr("class", "x axis")
  	.attr("transform", "translate(0," + height + ")");

  svg.append("g")
		.attr("class", "y axis")
		.append("text")
		.attr("transform", "rotate(-90)")
		.attr("y", 6)
		.attr("dy", ".71em")
		.style("text-anchor", "end")
		.text("D Score");


  Tracker.autorun(function() {
  	// var dataset = Gymnasts.find({"scores.fx.d": {$gt:0}},{sort:{"scores.fx.d":1}}).fetch();

  	var fxScores = Gymnasts.find({"scores.fx.d": {$gt:0}},{fields:{"scores.fx.d":1,"comp":1},sort:{"scores.fx.d":1}}).fetch();

  	var paths = svg.selectAll("path.line")
  		.data(fxScores);

  	// x.domain([0,fxScores.length]);
  	x.domain(fxScores.map(function(d) { return d.comp; }));
  	//x.domain(d3.extent(fxScores, function(d) { return d.comp; }));
  	// y.domain(fxScores.map(function(d) { return d.scores.fx.d; }));
  	y.domain(d3.extent(fxScores, function(d) { return d.scores.fx.d; }));

  	svg.select(".x.axis")
  		// .transition()
  		// .duration(100)
  		.call(xAxis);

  	svg.select(".y.axis")
  		// .transition()
  		// .duration(100)
  		.call(yAxis);

  	paths
  		.enter()
  		.append("path")
  		.attr("class", "line")
  		.attr('d', line);

  	paths
  		.exit()
  		.remove();

  	console.log(fxScores);
  });
////////////// VIS NEW

// ////////// VIS 2
// //Width and height
// 	var w = 500;
// 	var h = 300;
// 	var padding = 30;
	
// 	//Create scale functions
// 	var xScale = d3.scale.ordinal()
// 						 .range([padding, w - padding * 2]);

// 	var yScale = d3.scale.linear()
// 						 .range([h - padding, padding]);

// 	//Define X axis
// 	var xAxis = d3.svg.axis()
// 					.scale(xScale)
// 					.orient("bottom")
// 					.ticks(5);

// 	//Define Y axis
// 	var yAxis = d3.svg.axis()
// 					.scale(yScale)
// 					.orient("left")
// 					.ticks(5);

// 	//Create SVG element
// 	var svg = d3.select("#scatterPlotTest")
// 				.attr("width", w)
// 				.attr("height", h);

// 	//Define key function, to be used when binding data
// 	var key = function(d) {
// 		return d._id;
// 	};

// 	//Create X axis
// 	svg.append("g")
// 		.attr("class", "x axis")
// 		.attr("transform", "translate(0," + (h - padding) + ")");
	
// 	//Create Y axis
// 	svg.append("g")
// 		.attr("class", "y axis")
// 		.attr("transform", "translate(" + padding + ",0)");

// 	Deps.autorun(function(){
// 		var dataset = Gymnasts.find({"scores.fx.d": {$gt:0}},{fields:{"scores.fx.d":1,"comp":1},sort:{"scores.fx.d":1}}).fetch();
		
// 		//Update scale domains
// 		xScale.domain([0, dataset.length]);
// 		yScale.domain(d3.extent(fxScores, function(d) { return d.scores.fx.d; }));

// 		//Update X axis
// 		svg.select(".x.axis")
// 			// .transition()
// 			// .duration(1000)
// 			.call(xAxis);
		
// 		//Update Y axis
// 		svg.select(".y.axis")
// 			// .transition()
// 			// .duration(1000)
// 			.call(yAxis);
		

// 		var circles = svg
// 			.selectAll("circle")
// 			.data(dataset, key);

// 		//Create
// 		circles
// 			.enter()
// 			.append("circle")
// 			.attr("cx", function(d) {
// 				return xScale(d.comp);
// 			})
// 			.attr("cy", function(d) {
// 				return yScale(d.scores.fx.d);
// 			})
// 			.attr("r", 2);

// 		//Update
// 		circles
// 			// .transition()
// 			// .duration(1000)
// 			.attr("cx", function(d) {
// 				return xScale(d.comp);
// 			})
// 			.attr("cy", function(d) {
// 				return yScale(d.scores.fx.d);
// 			});

// 		//Remove
// 		circles
// 			.exit()
// 			.remove();
// 	});
});

Template.GymnastVis.onDestroyed(function () {
});
