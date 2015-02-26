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
            replace: true,
            scope: {
                // data: '=data',
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
                            axisLabel: 'X Axis',
                            tickFormat: function(d) {
                                return d3.format('.02f')(d);
                            }
                        },
                        yAxis: {
                            axisLabel: 'Y Axis',
                            tickFormat: function(d) {
                                return d3.format('.02f')(d);
                            },
                            axisLabelDistance: 30
                        }
                    }
                };

                scope.data = generateData(4, 40);

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
                    return data;
                }
            }
        };
    });
