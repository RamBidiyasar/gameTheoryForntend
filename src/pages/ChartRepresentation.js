import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import '../App.css';

function ChartRepresentation() {
    const [data, setData] = useState([]);
    const chartRefs = useRef({}); // Use an object to store chart references

    useEffect(() => {
        if (sessionStorage.getItem("upload") === "TRUE") {
            let list_items = sessionStorage.getItem("chart_info");
            list_items = JSON.parse(list_items);
            setData(list_items);
        } else {
            const champagneId = sessionStorage.getItem("champagneId");
            let channels = sessionStorage.getItem("channels");
            channels = channels.split(",");
            fetchData(champagneId, channels);
        }
    }, []);

    const fetchData = async (champagneId, channels) => {
        try {
            const response = await fetch('http://localhost:8088/channel/worth/calculate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    champagneId,
                    channels
                })
            });

            const responseData = await response.json();
            setData([responseData]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        data.forEach(dataset => {
            const labels = Object.keys(dataset.shapleyValues);
            const values = Object.values(dataset.shapleyValues);

            const chartData = {
                labels: labels,
                datasets: [{
                    label: 'Shapley Values',
                    data: values,
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                }]
            };

            let chartInstance = chartRefs.current[dataset.campaignId];

            if (chartInstance) {
                // If chart instance exists, update its data
                chartInstance.data.labels = labels;
                chartInstance.data.datasets[0].data = values;
                chartInstance.update();
            } else {
                // If chart instance doesn't exist, create a new one
                const ctx = document.getElementById(dataset.campaignId).getContext('2d');
                chartInstance = new Chart(ctx, {
                    type: 'pie',
                    data: chartData,
                    options: {
                        aspectRatio: 1,
                    }
                });
                chartRefs.current[dataset.campaignId] = chartInstance; // Save chart reference
            }
        });
    }, [data]);

    return (
        <div className="container">
            {data.length > 0 ? (
                data.map((data_set, ind) => (
                    <div key={ind} className="data-set">
                        <div className="chart-info">
                            <div className="text-info">
                                <h2>{data_set.campaignId}</h2>
                                <h2>Shapley Values:</h2>
                                <ul>
                                    {Object.entries(data_set.shapleyValues).map(([channel, value]) => (
                                        <li key={channel}>{channel}: {value}</li>
                                    ))}
                                </ul>
                                <h2>Channel Contribution:</h2>
                                <ul>
                                    {Object.entries(data_set.channelContribution).map(([channel, contribution]) => (
                                        <li key={channel}>{channel}: {contribution}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="chart-container">
                            <canvas id={data_set.campaignId} width="400" height="400"></canvas>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default ChartRepresentation;
