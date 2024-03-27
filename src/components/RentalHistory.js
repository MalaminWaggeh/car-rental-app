import React from 'react';

const RentalHistory = () => {
  // Dummy rental history data (replace with actual data later)
  const rentalHistory = [
    { id: 1, carModel: 'Toyota Corolla', rentalDuration: 3, totalCost: 150, pickupDate: '2024-03-28', dropoffDate: '2024-03-31' },
    { id: 2, carModel: 'Honda Civic', rentalDuration: 2, totalCost: 120, pickupDate: '2024-03-25', dropoffDate: '2024-03-27' },
    // Add more rental history items as needed
  ];

  return (
    <div>
      <h2>Rental History</h2>
      <ul>
        {rentalHistory.map((rental) => (
          <li key={rental.id}>
            <p>Car Model: {rental.carModel}</p>
            <p>Rental Duration: {rental.rentalDuration} days</p>
            <p>Total Cost: ${rental.totalCost}</p>
            <p>Pickup Date: {rental.pickupDate}</p>
            <p>Drop-off Date: {rental.dropoffDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RentalHistory;