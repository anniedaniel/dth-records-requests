$(function () {
    $('#success').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Responses'
        },
        xAxis: {
            categories: ['2009', '2010', '2011', '2012', '2013', '2014']
        },
        yAxis: {
            title: {
                text: 'Success'
            }
        },
        series: [{
            name: 'Yes', 
            data: [4, 29, 6, 27, 16, 8]
        }, {
            name: 'Denied',
            data: [0, 3, 1, 0, 1, 2]
        }, {
          name: 'Partially',
          data: [0, 1, 0, 2, 3, 0]
        }, {
          name: 'Outstanding',
          data: [0, 4, 5, 1, 9, 8]
        }],

    });
});

$(function () {
    $('#tags').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Requests'
        },
        yAxis: {
            title: {
                text: 'Tags'
            }
        },
        series: [{
            name: 'Email', 
            data: [25]
        }, {
            name: 'Students',
            data: [10]
        }, {
          name: 'Sports',
          data: [66]
        }, {
          name: 'Football',
          data: [31]
        }, {
          name: 'Basketball',
          data: [9]
        }, {
          name: 'Money',
          data: [56]
        }, {
          name: 'Contracts',
          data: [27]
        }, {
          name: 'Budgets',
          data: [9]
        }, {
          name: 'Phone Calls',
          data: [11]
        }, {
          name: 'Courses',
          data: [13]
        }, {
          name: 'Sexual Assault',
          data: [12]
        }, {
          name: 'Crime',
          data: [17]
        }, {
          name: 'Arts',
          data: [4]
        }],
    });
});

$(function () {
  // Build the chart
    $('#reporters').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Request Topics'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: 'Tags',
            data: [
                ['Firefox',   45.0],
                ['IE',       26.8],
                {
                    name: 'Chrome',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['Safari',    8.5],
                ['Opera',     6.2],
                ['Others',   0.7]
            ]
        }]
    });
  });
// $.get('js/records.xml', function(xml) {
//   var $xml = $(xml);
//   $xml.find('success').each(function(i, success){
//     options.xAxis.success.push($(success).text());
//   });
//   $xml.find('series').each(function(i, series){
//     var seriesOptions = {
//       name: $(series).find('name').text(),
//       data: []
//     };
//     $(series).find('Yes').each(function(i, point) {
//       seriesOptions.data.push(
//         parseInt($(point).text())
//       );
//     });
//     options.series.push(seriesOptions);
//   });
//   var chart = new Highcharts.Chart(options);
// });