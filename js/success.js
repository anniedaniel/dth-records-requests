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
          name: 'Responses',
          data: [{
            name: '2009',
            y: 4,
            drilldown: '2009resp'
          }, {
            name: '2010',
            y: 37,
            drilldown: '2010resp'
          }, {
            name: '2011',
            y: 12,
            drilldown: '2011resp'
          }, {
            name: '2012',
            y: 30,
            drilldown: '2012resp'
          }, {
            name: '2013',
            y: 29,
            drilldown: '2013resp'
          }, {
            name: '2014',
            y: 18,
            drilldown: '2014resp'
          }]
        }],
        drilldown: {
          series: [{
            id: '2009resp',
            data: [
              ['Yes', 4],
              ['Denied', 0],
              ['Partially', 0],
              ['Outstanding', 0]
            ]
          }, {
            id: '2010resp',
            data: [
              ['Yes', 29],
              ['Denied', 3],
              ['Partially', 1],
              ['Outstanding', 4]
            ]
          }, {
            id: '2011resp',
            data: [
              ['Yes', 6],
              ['Denied', 1],
              ['Partially', 0],
              ['Outstanding', 5]
            ]
          }, {
            id: '2012resp',
            data: [
              ['Yes', 27],
              ['Denied', 0],
              ['Partially', 2],
              ['Outstanding', 1]
            ]
          }, {
            id: '2013resp',
            data: [
              ['Yes', 16],
              ['Denied', 1],
              ['Partially', 3],
              ['Outstanding', 9]
            ]
          }, {
            id: '2014resp',
            data: [
              ['Yes', 8],
              ['Denied', 2],
              ['Partially', 0],
              ['Outstanding', 8]
            ]
          }]
        }
    //     series: [{
    //         name: 'Yes', 
    //         data: [4, 29, 6, 27, 16, 8]
    //     }, {
    //         name: 'Denied',
    //         data: [0, 3, 1, 0, 1, 2]
    //     }, {
    //       name: 'Partially',
    //       data: [0, 1, 0, 2, 3, 0]
    //     }, {
    //       name: 'Outstanding',
    //       data: [0, 4, 5, 1, 9, 8]
    //     }],

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