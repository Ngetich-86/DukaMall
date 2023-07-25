import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = () => {
  // Sample data for the doughnut chart
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#9C27B0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#9C27B0'],
      },
    ],
  };

  return <Doughnut data={data} />;
};

export default DoughnutChart;
