var app = angular.module('plunker', ['nvd3']);

app.controller('MainCtrl', function($scope, $timeout) {
  $scope.options = {
    chart: {
      type: 'lineWithFocusChart',
      height: 500,
      margin: {
        top: 30,
        right: 75,
        bottom: 50,
        left: 75
      },
      lines: { // for line chart
        yDomain:  [0,100],
        //forceY: [100],
        //yScale:[0,100]
        //yDomain:  [0,100]
        //yRange: [0,100]
      },
      lines2: { // for line chart
        yDomain:  [49,70],
        //yScale:[0,1]
        
      },
      color: ['#2ca02c', 'darkred'],
      xAxis: {
            tickFormat: function(d) {
          return d3.format(',f')(d);
        },
      },
      x2Axis: {
        tickFormat: function(d) {
          return d3.format(',f')(d);
        },
      },
      yAxis: {
        axisLabel: 'Y1 Axis',
        tickFormat: function(d) {
          return "$" + d3.format(',f')(d);
        }
      },
      y2Axis: {
        tickFormat: function(d) {
          return "$" + d3.format(',.2f')(d)
        }
      }
    }
  };


  $timeout(function() {
    console.log("timeout");
    $scope.tc.api.getScope().chart.brushExtent([8, 10]);
  }, 1000);

  $scope.data = [{
    "key": "Price",
    "values": [
      [0, 71.89],
      [1, 75.51],
      [2, 68.49],
      [3, 62.72],
      [4, 70.39],
      [5, 59.77],
      [6, 57.27],
      [7, 67.96],
      [8, 67.85],
      [9, 76.98],
      [10, 81.08]
    ]
  }].map(function(series) {
    series.values = series.values.map(function(d) {
      return {
        x: d[0],
        y: d[1]
      }
    });
    return series;
  });
});