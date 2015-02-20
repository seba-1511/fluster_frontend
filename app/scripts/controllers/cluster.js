'use strict';

/**
 * @ngdoc function
 * @name flusterFrontendApp.controller:ClusterCtrl
 * @description
 * # ClusterCtrl
 * Controller of the flusterFrontendApp
 */
angular.module('flusterFrontendApp')
    .controller('ClusterCtrl', function($scope, $location, User, Cluster) {
        var token, parseToken;
        $scope.mainImage = 'images/dropbox.png';
        $scope.description = 'Clean your Dropbox mess';
        $scope.resultTitle = '';
        $scope.files = [];
        $scope.accepted = $location.hash()
            .indexOf('error=') == -1;

        parseToken = function(text) {
            return text.substring(
                text.indexOf('access_token=') + 13,
                text.indexOf('&')
            );
        };

        if ($scope.accepted) {
            token = parseToken($location.hash());
            User.sendToken(token);
        }
        $scope.clusterDropbox = function() {
            if (!$scope.accepted) {
                return $location.path('/');
            }
            $scope.mainImage = 'images/spinner.gif';
            $scope.description =
                'Please wait while Fluster is flustering...';
            Cluster.startClustering(token, function(res) {
                $scope.mainImage = 'images/dropbox_done.png';
                $scope.description = 'Flustering completed !';
                $scope.resultTitle = 'Here\'s your new home:';
                $scope.files = res['contents'].map(function(curr, idx) {
                    return curr['path'];
                });
            });
        };
        debugger

        // $scope.ht3 = new $jit.Hypertree(
        // {
            //id of the visualization container  
            // injectInto: 'infovis',
            // //canvas width and height  
            // width: 500,
            // height: 500,
            //Change node and edge styles such as  
            //color, width and dimensions.  
            // Node: {
            //     dim: 9,
            //     color: "#f00"
            // },
            // Edge: {
            //     lineWidth: 2,
            //     color: "#088"
            // },
            // onBeforeCompute: function(node) {
            //     Log.write("centering");
            // },
            // //Attach event handlers and add text to the  
            // //labels. This method is only triggered on label  
            // //creation  
            // onCreateLabel: function(domElement, node) {
            //     domElement.innerHTML = node.name;
            //     $jit.util.addEvent(domElement, 'click', function() {
            //         ht.onClick(node.id, {
            //             onComplete: function() {
            //                 ht.controller.onComplete();
            //             }
            //         });
            //     });
            // },
            // //Change node styles when labels are placed  
            // //or moved.  
            // onPlaceLabel: function(domElement, node) {
            //     var style = domElement.style;
            //     style.display = '';
            //     style.cursor = 'pointer';
            //     if (node._depth <= 1) {
            //         style.fontSize = "0.8em";
            //         style.color = "#ddd";

            //     } else if (node._depth == 2) {
            //         style.fontSize = "0.7em";
            //         style.color = "#555";

            //     } else {
            //         style.display = 'none';
            //     }

            //     var left = parseInt(style.left);
            //     var w = domElement.offsetWidth;
            //     style.left = (left - w / 2) + 'px';
            // },

            // onComplete: function() {
            //     Log.write("done");

            //     // //Build the right column relations list.  
            //     // //This is done by collecting the information (stored in the data property)   
            //     // //for all the nodes adjacent to the centered node.  
            //     // var node = ht.graph.getClosestNodeToOrigin("current");
            //     // var html = "<h4>" + node.name + "</h4><b>Connections:</b>";
            //     // html += "<ul>";
            //     // node.eachAdjacency(function(adj) {
            //     //     var child = adj.nodeTo;
            //     //     if (child.data) {
            //     //         var rel = (child.data.band == node.name) ? child.data.relation : node.data.relation;
            //     //         html += "<li>" + child.name + " " + "<div class=\"relation\">(relation: " + rel + ")</div></li>";
            //     //     }
            //     // });
            //     // html += "</ul>";
            //     // $jit.id('inner-details').innerHTML = html;
            // }
        // }
        // );

        var json = {
            "id": "347_0",
            "name": "Nine Inch Nails",
            "children": [{
                "id": "126510_1",
                "name": "Jerome Dillon",
                "data": {
                    "band": "Nine Inch Nails",
                    "relation": "member of band"
                },
                "children": [{
                    "id": "52163_2",
                    "name": "Howlin' Maggie",
                    "data": {
                        "band": "Jerome Dillon",
                        "relation": "member of band"
                    },
                    "children": []
                }, {
                    "id": "324134_3",
                    "name": "nearLY",
                    "data": {
                        "band": "Jerome Dillon",
                        "relation": "member of band"
                    },
                    "children": []
                }]
            }, {
                "id": "173871_4",
                "name": "Charlie Clouser",
                "data": {
                    "band": "Nine Inch Nails",
                    "relation": "member of band"
                },
                "children": []
            }, {
                "id": "235952_5",
                "name": "James Woolley",
                "data": {
                    "band": "Nine Inch Nails",
                    "relation": "member of band"
                },
                "children": []
            }, {
                "id": "235951_6",
                "name": "Jeff Ward",
                "data": {
                    "band": "Nine Inch Nails",
                    "relation": "member of band"
                },
                "children": [{
                    "id": "2382_7",
                    "name": "Ministry",
                    "data": {
                        "band": "Jeff Ward",
                        "relation": "member of band"
                    },
                    "children": []
                }, {
                    "id": "2415_8",
                    "name": "Revolting Cocks",
                    "data": {
                        "band": "Jeff Ward",
                        "relation": "member of band"
                    },
                    "children": []
                }, {
                    "id": "3963_9",
                    "name": "Pigface",
                    "data": {
                        "band": "Jeff Ward",
                        "relation": "member of band"
                    },
                    "children": []
                }, {
                    "id": "7848_10",
                    "name": "Lard",
                    "data": {
                        "band": "Jeff Ward",
                        "relation": "member of band"
                    },
                    "children": []
                }]
            }, {
                "id": "235950_11",
                "name": "Richard Patrick",
                "data": {
                    "band": "Nine Inch Nails",
                    "relation": "member of band"
                },
                "children": [{
                    "id": "1007_12",
                    "name": "Filter",
                    "data": {
                        "band": "Richard Patrick",
                        "relation": "member of band"
                    },
                    "children": []
                }, {
                    "id": "327924_13",
                    "name": "Army of Anyone",
                    "data": {
                        "band": "Richard Patrick",
                        "relation": "member of band"
                    },
                    "children": []
                }]
            }, {
                "id": "2396_14",
                "name": "Trent Reznor",
                "data": {
                    "band": "Nine Inch Nails",
                    "relation": "member of band"
                },
                "children": [{
                    "id": "3963_15",
                    "name": "Pigface",
                    "data": {
                        "band": "Trent Reznor",
                        "relation": "member of band"
                    },
                    "children": []
                }, {
                    "id": "32247_16",
                    "name": "1000 Homo DJs",
                    "data": {
                        "band": "Trent Reznor",
                        "relation": "member of band"
                    },
                    "children": []
                }, {
                    "id": "83761_17",
                    "name": "Option 30",
                    "data": {
                        "band": "Trent Reznor",
                        "relation": "member of band"
                    },
                    "children": []
                }, {
                    "id": "133257_18",
                    "name": "Exotic Birds",
                    "data": {
                        "band": "Trent Reznor",
                        "relation": "member of band"
                    },
                    "children": []
                }]
            }, {
                "id": "36352_19",
                "name": "Chris Vrenna",
                "data": {
                    "band": "Nine Inch Nails",
                    "relation": "member of band"
                },
                "children": [{
                    "id": "1013_20",
                    "name": "Stabbing Westward",
                    "data": {
                        "band": "Chris Vrenna",
                        "relation": "member of band"
                    },
                    "children": []
                }, {
                    "id": "3963_21",
                    "name": "Pigface",
                    "data": {
                        "band": "Chris Vrenna",
                        "relation": "member of band"
                    },
                    "children": []
                }, {
                    "id": "5752_22",
                    "name": "Jack Off Jill",
                    "data": {
                        "band": "Chris Vrenna",
                        "relation": "member of band"
                    },
                    "children": []
                }, {
                    "id": "33602_23",
                    "name": "Die Warzau",
                    "data": {
                        "band": "Chris Vrenna",
                        "relation": "member of band"
                    },
                    "children": []
                }, {
                    "id": "40485_24",
                    "name": "tweaker",
                    "data": {
                        "band": "Chris Vrenna",
                        "relation": "is person"
                    },
                    "children": []
                }, {
                    "id": "133257_25",
                    "name": "Exotic Birds",
                    "data": {
                        "band": "Chris Vrenna",
                        "relation": "member of band"
                    },
                    "children": []
                }]
            }, {
                "id": "236021_26",
                "name": "Aaron North",
                "data": {
                    "band": "Nine Inch Nails",
                    "relation": "member of band"
                },
                "children": []
            }, {
                "id": "236024_27",
                "name": "Jeordie White",
                "data": {
                    "band": "Nine Inch Nails",
                    "relation": "member of band"
                },
                "children": [{
                    "id": "909_28",
                    "name": "A Perfect Circle",
                    "data": {
                        "band": "Jeordie White",
                        "relation": "member of band"
                    },
                    "children": []
                }, {
                    "id": "237377_29",
                    "name": "Twiggy Ramirez",
                    "data": {
                        "band": "Jeordie White",
                        "relation": "is person"
                    },
                    "children": []
                }]
            }, {
                "id": "235953_30",
                "name": "Robin Finck",
                "data": {
                    "band": "Nine Inch Nails",
                    "relation": "member of band"
                },
                "children": [{
                    "id": "1440_31",
                    "name": "Guns N' Roses",
                    "data": {
                        "band": "Robin Finck",
                        "relation": "member of band"
                    },
                    "children": []
                }]
            }, {
                "id": "235955_32",
                "name": "Danny Lohner",
                "data": {
                    "band": "Nine Inch Nails",
                    "relation": "member of band"
                },
                "children": [{
                    "id": "909_33",
                    "name": "A Perfect Circle",
                    "data": {
                        "band": "Danny Lohner",
                        "relation": "member of band"
                    },
                    "children": []
                }, {
                    "id": "1695_34",
                    "name": "Killing Joke",
                    "data": {
                        "band": "Danny Lohner",
                        "relation": "member of band"
                    },
                    "children": []
                }, {
                    "id": "1938_35",
                    "name": "Methods of Mayhem",
                    "data": {
                        "band": "Danny Lohner",
                        "relation": "member of band"
                    },
                    "children": []
                }, {
                    "id": "5138_36",
                    "name": "Skrew",
                    "data": {
                        "band": "Danny Lohner",
                        "relation": "member of band"
                    },
                    "children": []
                }, {
                    "id": "53549_37",
                    "name": "Angkor Wat",
                    "data": {
                        "band": "Danny Lohner",
                        "relation": "member of band"
                    },
                    "children": []
                }, {
                    "id": "113510_38",
                    "name": "Puscifer",
                    "data": {
                        "band": "Danny Lohner",
                        "relation": "member of band"
                    },
                    "children": []
                }, {
                    "id": "113512_39",
                    "name": "Renhold\u00ebr",
                    "data": {
                        "band": "Danny Lohner",
                        "relation": "is person"
                    },
                    "children": []
                }]
            }],
            "data": []
        };
        //load JSON data.  
        // $scope.ht3.loadJSON(json);
        // //compute positions and plot.  
        // $scope.ht3.refresh();
    });