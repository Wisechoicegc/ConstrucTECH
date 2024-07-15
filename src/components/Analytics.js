import React, { useState } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import './Analytics.css';

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  daily: [
    { name: 'Mon', estimates: 30 },
    { name: 'Tue', estimates: 20 },
    { name: 'Wed', estimates: 27 },
    { name: 'Thu', estimates: 18 },
    { name: 'Fri', estimates: 23 },
    { name: 'Sat', estimates: 34 },
    { name: 'Sun', estimates: 45 },
  ],
  weekly: [
    { name: 'Week 1', estimates: 150 },
    { name: 'Week 2', estimates: 200 },
    { name: 'Week 3', estimates: 250 },
    { name: 'Week 4', estimates: 300 },
  ],
  monthly: [
    { name: 'Jan', estimates: 400 },
    { name: 'Feb', estimates: 300 },
    { name: 'Mar', estimates: 200 },
    { name: 'Apr', estimates: 278 },
    { name: 'May', estimates: 189 },
    { name: 'Jun', estimates: 239 },
    { name: 'Jul', estimates: 349 },
    { name: 'Aug', estimates: 400 },
    { name: 'Sep', estimates: 300 },
    { name: 'Oct', estimates: 200 },
    { name: 'Nov', estimates: 278 },
    { name: 'Dec', estimates: 189 },
  ],
};

const Analytics = () => {
  const [timeFrame, setTimeFrame] = useState('monthly');

  const currentData = data[timeFrame];

  const lineChartData = {
    labels: currentData.map((d) => d.name),
    datasets: [
      {
        label: 'Estimates',
        data: currentData.map((d) => d.estimates),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const barChartData = {
    labels: currentData.map((d) => d.name),
    datasets: [
      {
        label: 'Estimates',
        data: currentData.map((d) => d.estimates),
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: currentData.map((d) => d.name),
    datasets: [
      {
        data: currentData.map((d) => d.estimates),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
        ],
      },
    ],
  };

  return (
    <div className="analytics">
      <h1 className="text-2xl font-bold mb-4">Analytics Dashboard</h1>
      <div className="time-frame-selector mb-4">
        <button onClick={() => setTimeFrame('daily')} className="btn">Daily</button>
        <button onClick={() => setTimeFrame('weekly')} className="btn">Weekly</button>
        <button onClick={() => setTimeFrame('monthly')} className="btn">Monthly</button>
      </div>
      <div className="charts grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="chart">
          <h2 className="text-lg font-semibold mb-2">Estimates</h2>
          <Line data={lineChartData} />
        </div>
        <div className="chart">
          <h2 className="text-lg font-semibold mb-2">Amount of Estimates</h2>
          <Bar data={barChartData} />
        </div>
        <div className="chart">
          <h2 className="text-lg font-semibold mb-2">Estimates by Type</h2>
          <Pie data={pieChartData} />
        </div>
        <div className="chart">
          <h2 className="text-lg font-semibold mb-2">Monthly Growth</h2>
          <Line data={lineChartData} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
