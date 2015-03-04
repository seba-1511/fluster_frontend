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
                        width: 900,
                        color: d3.scale.category10()
                            .range(),
                        scatter: {
                            onlyCircles: false
                        },
                        showDistX: false,
                        showDistY: false,
                        tooltipContent: function(key) {
                            return '<h5 style="color:black;weight:bolder;">' +
                                key + '</h5>';
                        },
                        transitionDuration: 350,
                        xAxis: {
                            axisLabel: '',
                            // tickFormat: function(d) {
                            //     return d3.format('.02f')(d);
                            // }
                            tickFormat: function(d) {
                                return '';
                            }
                        },
                        yAxis: {
                            axisLabel: '',
                            // tickFormat: function(d) {
                            //     return d3.format('.02f')(d);
                            // },
                            // axisLabelDistance: 30
                            tickFormat: function(d) {
                                return '';
                            }
                        }
                    }
                };
                // just circles as per Gabe's request <- Seb loves it
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

                scope.$watch('data', function(o, n) {
                    scope.clusters = parseData(scope.data);
                });
            }
        };
    });
