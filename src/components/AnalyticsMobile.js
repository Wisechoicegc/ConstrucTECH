import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import './Analytics.css';

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

const AnalyticsMobile = () => {
  const [timeFrame, setTimeFrame] = useState('monthly');

  const currentData = data[timeFrame];

  const chartOptions = {
    chart: {
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
      toolbar: {
        show: true,
      },
      width: '100%',
      height: 300,
    },
    xaxis: {
      categories: currentData.map((d) => d.name),
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
  };

  const lineChartData = [
    {
      name: 'Estimates',
      data: currentData.map((d) => d.estimates),
    },
  ];

  const barChartData = [
    {
      name: 'Estimates',
      data: currentData.map((d) => d.estimates),
    },
  ];

  const pieChartData = currentData.map((d) => d.estimates);

  return (
    <div className="analytics">
      <h1>Analytics Dashboard</h1>
      <div className="time-frame-selector">
        <button onClick={() => setTimeFrame('daily')}>Daily</button>
        <button onClick={() => setTimeFrame('weekly')}>Weekly</button>
        <button onClick={() => setTimeFrame('monthly')}>Monthly</button>
      </div>
      <div className="charts">
        <div className="chart">
          <h2>Estimates</h2>
          <Chart options={chartOptions} series={lineChartData} type="line" height={300} />
        </div>
        <div className="chart">
          <h2>Amount of Estimates</h2>
          <Chart options={chartOptions} series={barChartData} type="bar" height={300} />
        </div>
        <div className="chart">
          <h2>Estimates by Type</h2>
          <Chart options={chartOptions} series={pieChartData} type="pie" height={300} />
        </div>
        <div className="chart">
          <h2>Monthly Growth</h2>
          <Chart options={chartOptions} series={lineChartData} type="line" height={300} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsMobile;
