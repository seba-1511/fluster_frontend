'use strict';

//Width and height
var w = 500;
var h = 300;
var padding = 30;

//Static dataset
var dataset = [
    [5, 20],
    [480, 90],
    [250, 50],
    [100, 33],
    [330, 95],
    [410, 12],
    [475, 44],
    [25, 67],
    [85, 21],
    [220, 88],
    [600, 150]
];

//Dynamic, random dataset
var dataset = []; //Initialize empty array
var numDataPoints = 50; //Number of dummy data points to create
var xRange = Math.random() * 1000; //Max range of new x values
var yRange = Math.random() * 1000; //Max range of new y values
for (var i = 0; i < numDataPoints; i++) { //Loop numDataPoints times
    var newNumber1 = Math.round(Math.random() * xRange); //New random integer
    var newNumber2 = Math.round(Math.random() * yRange); //New random integer
    dataset.push([newNumber1, newNumber2]); //Add new number to array
}

//Create scale functions
var xScale = d3.scale.linear()
    .domain([0, d3.max(dataset, function(d) {
        return d[0];
    })])
    .range([padding, w - padding * 2]);

var yScale = d3.scale.linear()
    .domain([0, d3.max(dataset, function(d) {
        return d[1];
    })])
    .range([h - padding, padding]);

var rScale = d3.scale.linear()
    .domain([0, d3.max(dataset, function(d) {
        return d[1];
    })])
    .range([2, 5]);

//Define X axis
var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient('bottom')
    .ticks(5);

//Define Y axis
var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient('left')
    .ticks(5);

//Create SVG element
var svg = d3.select('body')
    .append('svg')
    .attr('width', w)
    .attr('height', h);

//Create circles
svg.selectAll('circle')
    .data(dataset)
    .enter()
    .append('circle')
    .attr('cx', function(d) {
        return xScale(d[0]);
    })
    .attr('cy', function(d) {
        return yScale(d[1]);
    })
    .attr('r', function(d) {
        return rScale(d[1]);
    });

/*
      //Create labels
      svg.selectAll('text')
         .data(dataset)
         .enter()
         .append('text')
         .text(function(d) {
            return d[0] + ',' + d[1];
         })
         .attr('x', function(d) {
            return xScale(d[0]);
         })
         .attr('y', function(d) {
            return yScale(d[1]);
         })
         .attr('font-family', 'sans-serif')
         .attr('font-size', '11px')
         .attr('fill', 'red');
        */

//Create X axis
svg.append('g')
    .attr('class', 'axis')
    .attr('transform', 'translate(0,' + (h - padding) + ')')
    .call(xAxis);

//Create Y axis
svg.append('g')
    .attr('class', 'axis')
    .attr('transform', 'translate(' + padding + ',0)')
    .call(yAxis);

/**************************************
 * For trying to use nvd3 -- not working
 */
// nv.addGraph(function() {
//     var chart = nv.models.scatterChart()
//         .showDistX(true) //showDist, when true, will display those little distribution lines on the axis.
//         .showDistY(true)
//         .transitionDuration(350)
//         .color(d3.scale.category10().range());

//     //Configure how the tooltip looks.
//     chart.tooltipContent(function(key) {
//         return '<h3>' + key + '</h3>';
//     });

//     //Axis settings
//     chart.xAxis.tickFormat(d3.format('.02f'));
//     chart.yAxis.tickFormat(d3.format('.02f'));

//     //We want to show shapes other than circles.
//     chart.scatter.onlyCircles(false);

//     var myData = randomData(4, 40);
//     d3.select('#chart svg')
//         .datum(myData)
//         .call(chart);

//     nv.utils.windowResize(chart.update);

//     return chart;
// });

/**************************************
 * Simple test data generator
 */
// function randomData(groups, points) { //# groups,# points per group
//     var data = [],
//         shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'],
//         random = d3.random.normal();

//     for (i = 0; i < groups; i++) {
//         data.push({
//             key: 'Group ' + i,
//             values: []
//         });

//         for (j = 0; j < points; j++) {
//             data[i].values.push({
//                 x: random(),
//                 y: random(),
//                 size: Math.random(), //Configure the size of each scatter point
//                 shape: (Math.random() > 0.95) ? shapes[j % 6] : 'circle' //Configure the shape of each scatter point.
//             });
//         }
//     }

//     return data;
// }