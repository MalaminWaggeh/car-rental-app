// RentalHistory.js

import React from 'react';
import './RentalHistory.css'; // Import CSS file for styling

const RentalHistory = () => {
  // Dummy rental history data (replace with actual data later)
  const rentalHistory = [
    { id: 1, carModel: 'Toyota Corolla', rentalDuration: 3, totalCost: 150, pickupDate: '2024-03-28', dropoffDate: '2024-03-31' },
    { id: 2, carModel: 'Honda Civic', rentalDuration: 2, totalCost: 120, pickupDate: '2024-03-25', dropoffDate: '2024-03-27' },
    { id: 3, carModel: 'Ford Mustang', rentalDuration: 5, totalCost: 250, pickupDate: '2024-03-20', dropoffDate: '2024-03-25' },
    { id: 4, carModel: 'BMW 3 Series', rentalDuration: 4, totalCost: 320, pickupDate: '2024-03-15', dropoffDate: '2024-03-19' },
    { id: 5, carModel: 'Mercedes-Benz C-Class', rentalDuration: 3, totalCost: 270, pickupDate: '2024-03-10', dropoffDate: '2024-03-13' },
    // Add more rental history items as needed
  ];

  return (
    <div className="rental-history-container">
      <h2>Rental History</h2>
      <ul className="rental-list">
        {rentalHistory.map((rental) => (
          <li key={rental.id} className="rental-item">
            <p><strong>Car Model:</strong> {rental.carModel}</p>
            <p><strong>Rental Duration:</strong> {rental.rentalDuration} days</p>
            <p><strong>Total Cost:</strong> ${rental.totalCost}</p>
            <p><strong>Pickup Date:</strong> {rental.pickupDate}</p>
            <p><strong>Drop-off Date:</strong> {rental.dropoffDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RentalHistory;
