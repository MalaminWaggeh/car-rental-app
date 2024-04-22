import React from 'react';
import './DurationCostChart.css'; 

const DurationCostChart = () => {
  // Dummy duration/cost data 
  const durationCostData = [
    { duration: 1, cost: 50 },
    { duration: 2, cost: 90 },
    { duration: 3, cost: 120 },
    { duration: 4, cost: 150 },
    { duration: 5, cost: 180 },
    { duration: 6, cost: 210 },
    { duration: 7, cost: 240 },
    { duration: 8, cost: 270 },
    { duration: 9, cost: 300 },
    { duration: 10, cost: 330 },
    
  ];

  return (
    <div className="duration-cost-chart-container">
      <h2>Duration/Cost Chart</h2>
      <table className="duration-cost-table">
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
