'use strict';

/**
 * @ngdoc directive
 * @name flusterFrontendApp.directive:flsrClusterViz
 * @description
 * # flsrClusterViz
 */
angular.module('flusterFrontendApp')
    .directive('flsrClusterViz', function() {
        return {
            templateUrl: 'views/directives/ClusterViz.html',
            restrict: 'EACM',
            replace: false,
            scope: {
                data: '=data',
            },
            link: function postLink(scope, element, attrs) {

                scope.options = {
                    chart: {
                        type: 'scatterChart',
                        height: 450,
                        color: d3.scale.category10()
                            .range(),
                        scatter: {
                            onlyCircles: false
                        },
                        showDistX: false,
                        showDistY: false,
                        tooltipContent: function(key) {
                            return '<h3>' + key + '</h3>';
                        },
                        transitionDuration: 350,
                        xAxis: {
                            axisLabel: '',
                            tickFormat: function(d) {
                                return d3.format('.02f')(d);
                            }
                        },
                        yAxis: {
                            axisLabel: '',
                            tickFormat: function(d) {
                                return d3.format('.02f')(d);
                            },
                            axisLabelDistance: 30
                        }
                    }
                };

                // var shapes = [
                //     'circle', 'cross', 'triangle-up',
                //     'triangle-down', 'diamond', 'square'
                // ];

                // changed to just circles as per Gabe's request
                var shapes = ['circle'];

                var parseData = function(data) {
                    var group, item, count = 0;
                    var res = [];
                    for (group in data) {
                        for (item in data[group].values) {
                            data[group].values[item].shape = shapes[
                                count % 6];
                        }
                        count++;
                        res.push(data[group]);
                    }
                    console.log(res);
                    return res;
                };
                scope.clusters = parseData(scope.data);

                // scope.clusters = generateData(6, 40);


                /* TODO get data from Matthew */
                /* Random Data Generator (took from nvd3.org) */
                function generateData(groups, points) {
                    var data = [],
                        shapes = ['circle', 'cross', 'triangle-up',
                            'triangle-down', 'diamond', 'square'
                        ],
                        random = d3.random.normal();

                    for (var i = 0; i < groups; i++) {
                        data.push({
                            key: 'Group ' + i,
                            values: []
                        });

                        for (var j = 0; j < points; j++) {
                            data[i].values.push({
                                x: random(),
                                y: random(),
                                size: Math.random(),
                                shape: shapes[j % 6]
                            });
                        }
                    }
                    console.log(data);
                    return data;
                }
            }
        };
    });