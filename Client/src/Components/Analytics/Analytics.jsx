import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Analytics.css';
import { Doughnut } from "react-chartjs-2";
// import DoughnutChart from '../DoughnutChart';
import ChartComponent from '../DoughnutChart';

const Analytics = () => {
  const data = [
    { name: 'Jan -April', uv: 400, pv: 2400, amt: 2400 },
    { name: 'may-Aug', uv: 800, pv: 1200, amt: 1200 },
    { name: 'Sep -dec', uv: 1200, pv: 800, amt: 800 },
    // Add more data points here
  ];

  

  return (
    <div className="analytics-container1">
    <div className="linechart">
      <h3>User Analytics</h3>
      <LineChart width={400} height={240} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
    </div>
    <div>
      {/* <h3>Doughnut Chart </h3> */}
      {/* <ChartComponent /> */}
    </div>
   
    </div>
  );
};



export default Analytics;

