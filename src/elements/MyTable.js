import React from 'react';

const MyTable = ({ coalitions, interactionRatio }) => {

    if (!coalitions?.length || !interactionRatio.length) return <></>;
    return (
        <div className="container">
            The table below lists all possible channel coalitions and their conversion ratios:
            <div className="table-container">
            <table>
                <caption>Conversion Ratio</caption>
                <thead>
                <tr>
                    <th>Coalition</th>
                    <th>Channels</th>
                    <th>Ratio</th>
                </tr>
                </thead>
                <tbody>
                {coalitions?.map((coalition, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{coalition}</td>
                        <td>{(interactionRatio[index] * 100).toFixed(2)}%</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default MyTable;
