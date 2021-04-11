import React from 'react';
import highchartsInterface from '@veneer/highcharts-interface';
import {Chart, ChartProvider} from '@veneer/core';

const VeChart: React.FC = () => {

  return (
      <ChartProvider
          chartInterface={highchartsInterface}
      >
        <Chart options={{
          chart: {
            type: 'bar',
          },
          xAxis: {
            categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          },
          yAxis: {
            title: {
              text: 'Meeting Minutes (Current year)',
            },
          },
          series: [
            {
              name: 'Year 2016',
              data: [45, 20, 26, 60, 38, 84],
            },
          ],
        }}
        />
      </ChartProvider>
  );
};

export default VeChart;
