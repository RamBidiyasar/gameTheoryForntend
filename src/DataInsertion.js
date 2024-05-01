import React from 'react';

function DataInsertion() {
    return (
        <div>
            <h1>Problem Statement:</h1>
            <p>Inaccurate attribution of digital marketing channels leads to:</p>
            <ul>
                <li>Misinformed decision-making</li>
                <li>Hindering campaign optimization and ROI</li>
                <li>Subpar customer experience by carpet bombing all the channels</li>
            </ul>
            <h1>Solve:</h1>
            <p> Leveraging Shapley Value algorithm to determine the appropriate attribution in a multi-channel
                world</p>
            <ul>
                <li>
                    It treats each touch-point as a player in a cooperative game
                </li>
                <li>
                    We are calculating marginal contribution to conversions across all possible combinations by
                    assigning credit to each channel
                </li>
                <li>
                    This provides actionable insights for optimal allocation of resources & optimizes campaign
                    performance

                </li>
            </ul>
            <h1>Business Objective</h1>
            <p>Our objective is to empower businesses with data-driven decision-making, enabling them to achieve higher ROI by allocating resources efficiently across digital marketing channels, ultimately enhancing customer acquisition and retention strategies without diluting customer experience
            </p>
        </div>
    );
}

export default DataInsertion;
