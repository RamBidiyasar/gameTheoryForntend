import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './App.css'

function App() {
  const [data, setData] = useState(null);
  const [chartData, setChartData] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8088/channel/worth/calculate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            champagneId: '123',
            channels: ['whatsapp', 'sms', 'email']
          })
        });

        // Parse the response JSON
        const responseData = await response.json();

        // Set the response data to the state
        setData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the function
  }, []); // Empty dependency array ensures useEffect runs only once

  useEffect(() => {
    // Function to create pie chart data
    const createChartData = () => {
      if (data) {
        const labels = Object.keys(data.shapleyValues);
        const values = Object.values(data.shapleyValues);

        const chartData = {
          labels: labels,
          datasets: [{
            label: 'Shapley Values',
            data: values,
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
          }]
        };
        setChartData(chartData);
      }
    };

    createChartData(); // Call the function
  }, [data]); // Run this effect when data changes

  useEffect(() => {
    // Function to create or update pie chart
    const createOrUpdatePieChart = () => {
      if (chartData) {
        if (chartRef.current) {
          // If chart already exists, destroy it before creating a new one
          chartRef.current.destroy();
        }

        const ctx = document.getElementById('shapleyPieChart').getContext('2d');
        chartRef.current = new Chart(ctx, {
          type: 'pie',
          data: chartData,
          options: {
            aspectRatio: 1, // Set the aspect ratio of the chart
          }
        });
      }
    };

    createOrUpdatePieChart(); // Call the function
  }, [chartData]); // Run this effect when chartData changes

  return (
      <div className={"content-container"}>
        {data ? (
            <div>
              <div className={'pie-container'}>
                <canvas id="shapleyPieChart" width="40" height="40"></canvas>
              </div>
              <h2>Shapley Values:</h2>
              <ul>
                {Object.entries(data.shapleyValues).map(([channel, value]) => (
                    <li key={channel}>{channel}: {value}</li>
                ))}
              </ul>
              <h2>Channel Contribution:</h2>
              <ul>
                {Object.entries(data.channelContribution).map(([channel, contribution]) => (
                    <li key={channel}>{channel}: {contribution}</li>
                ))}
              </ul>
            </div>
        ) : (
            <p>Loading...</p>
        )}
      </div>
  );
}

export default App;
