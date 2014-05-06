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
    $('#year').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'When?'
        },
        xAxis: {
            categories: ['2009', '2010', '2011', '2012', '2013', '2014']
        },
        yAxis: {
            title: {
                text: 'Requests'
            }
        },
        series: [{
            name: 'Yes',
            data: [4, 29]
        }, {
            name: 'Denied',
            data: [0, 3]
        }, {
          name: 'Partially',
          data: [0, 1]
        }, {
          name: 'Outstanding',
          data: [0, 4]
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