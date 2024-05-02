import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const MyChart = ({ coalitions, interactionRatio }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);


    useEffect(() => {
        if (coalitions.length && interactionRatio.length) {
            const ctx = chartRef.current.getContext('2d');

            // Destroy existing chart instance if it exists
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            chartInstance.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: coalitions.map((coalition, index) => coalition),
                    datasets: [{
                        label: 'Interaction Ratio',
                        data: interactionRatio.map(item=>Math.floor(item*10000)/100),
                        backgroundColor: 'rgba(54, 162, 235, 0.5)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 2
                    }]
                },
                options: {
                    scales: {
                        x: {
                            title: {
                                display: false,
                                text: 'Interaction Ratio'
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Coalition'
                            }
                        }
                    }
                }
            });
        }
    }, [coalitions, interactionRatio]);

    return (
        <div className="chart-container-bar">
            <p>The chart below visualizes the conversion ratios of each coalition for converted users:</p>
            <canvas ref={chartRef} />
        </div>
    );
};

export default MyChart;
