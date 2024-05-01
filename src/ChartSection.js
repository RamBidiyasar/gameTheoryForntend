import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './App.css'


function ChartSection({ data }) {
    const chartRef = useRef(null);

    useEffect(() => {
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

            if (chartRef.current) {
                chartRef.current.destroy();
            }

            const ctx = document.getElementById('shapleyPieChart').getContext('2d');
            chartRef.current = new Chart(ctx, {
                type: 'pie',
                data: chartData,
                options: {
                    aspectRatio: 1,
                }
            });
        }
    }, [data]);

    return (
        <div>
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

export default ChartSection;
