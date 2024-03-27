import React from 'react';

const DurationCostChart = () => {
  // Dummy duration/cost data (replace with actual data later)
  const durationCostData = [
    { duration: 1, cost: 50 },
    { duration: 2, cost: 90 },
    { duration: 3, cost: 120 },
    // Add more duration/cost data as needed
  ];

  return (
    <div>
      <h2>Duration/Cost Chart</h2>
      <table>
        <thead>
          <tr>
            <th>Duration (Days)</th>
            <th>Cost (USD)</th>
          </tr>
        </thead>
        <tbody>
          {durationCostData.map((data) => (
            <tr key={data.duration}>
              <td>{data.duration}</td>
              <td>${data.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DurationCostChart;