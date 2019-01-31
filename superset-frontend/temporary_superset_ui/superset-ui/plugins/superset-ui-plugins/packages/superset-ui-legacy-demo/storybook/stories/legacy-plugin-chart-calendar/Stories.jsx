/* eslint-disable sort-keys, no-magic-numbers */
import React from 'react';
import { SuperChart } from '@superset-ui/chart';

export default [
  {
    renderStory: () => (
      <SuperChart
        chartType="calendar"
        chartProps={{
          datasource: { verboseMap: {} },
          formData: {
            linearColorScheme: 'schemeRdYlBu',
            cellSize: 10,
            cellPadding: 2,
            cellRadius: 0,
            steps: 10,
            yAxisFormat: '.3s',
            xAxisTimeFormat: 'smart_date',
            showLegend: true,
            showValues: false,
            showMetricName: true,
          },
          height: 400,
          payload: {
            data: {
              data: {
                count: {
                  '1518652800.0': 3,
                  '1518048000.0': 2,
                  '1518220800.0': 2,
                  '1523145600.0': 2,
                  '1529798400.0': 2,
                  '1534204800.0': 2,
                  '1541289600.0': 2,
                  '1542672000.0': 2,
                  '1543881600.0': 2,
                  '1517616000.0': 1,
                  '1517875200.0': 1,
                  '1517961600.0': 1,
                  '1518307200.0': 1,
                  '1518393600.0': 1,
                  '1519257600.0': 1,
                  '1519516800.0': 1,
                  '1519776000.0': 1,
                  '1520208000.0': 1,
                  '1520294400.0': 1,
                  '1520985600.0': 1,
                  '1521072000.0': 1,
                  '1521244800.0': 1,
                  '1521331200.0': 1,
                  '1521676800.0': 1,
                  '1522108800.0': 1,
                  '1522627200.0': 1,
                  '1522800000.0': 1,
                  '1522972800.0': 1,
                  '1523491200.0': 1,
                  '1524096000.0': 1,
                  '1524268800.0': 1,
                  '1524614400.0': 1,
                  '1524960000.0': 1,
                  '1525305600.0': 1,
                  '1525564800.0': 1,
                  '1525737600.0': 1,
                  '1525824000.0': 1,
                  '1525910400.0': 1,
                  '1526083200.0': 1,
                  '1526256000.0': 1,
                  '1526688000.0': 1,
                  '1527033600.0': 1,
                  '1527292800.0': 1,
                  '1527465600.0': 1,
                  '1527638400.0': 1,
                  '1528070400.0': 1,
                  '1528329600.0': 1,
                  '1529539200.0': 1,
                  '1529625600.0': 1,
                  '1529712000.0': 1,
                  '1529971200.0': 1,
                  '1530144000.0': 1,
                  '1530576000.0': 1,
                  '1531267200.0': 1,
                  '1531353600.0': 1,
                  '1531440000.0': 1,
                  '1532736000.0': 1,
                  '1533081600.0': 1,
                  '1533168000.0': 1,
                  '1533945600.0': 1,
                  '1534377600.0': 1,
                  '1534809600.0': 1,
                  '1535155200.0': 1,
                  '1535328000.0': 1,
                  '1535932800.0': 1,
                  '1536710400.0': 1,
                  '1537056000.0': 1,
                  '1537142400.0': 1,
                  '1537488000.0': 1,
                  '1537660800.0': 1,
                  '1538611200.0': 1,
                  '1538697600.0': 1,
                  '1539475200.0': 1,
                  '1540771200.0': 1,
                  '1541116800.0': 1,
                  '1541376000.0': 1,
                  '1541635200.0': 1,
                  '1542153600.0': 1,
                  '1542931200.0': 1,
                  '1543190400.0': 1,
                  '1545177600.0': 1,
                  '1545436800.0': 1,
                  '1545782400.0': 1,
                  '1545868800.0': 1,
                  '1546300800.0': 1,
                  '1546732800.0': 1,
                  '1547769600.0': 1,
                  '1547942400.0': 1,
                  '1548633600.0': 1,
                },
              },
              start: 1517270400000.0,
              domain: 'month',
              subdomain: 'day',
              range: 13,
            },
          },
          width: 400,
        }}
      />
    ),
    storyName: 'CalendarChartPlugin',
    storyPath: 'plugin-chart-calendar',
  },
];
