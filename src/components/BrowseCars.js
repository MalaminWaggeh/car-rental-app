import React from 'react';

const BrowseCars = () => {
  // Dummy car listings data (replace with actual data later)
  const carListings = [
    { id: 1, model: 'Toyota Corolla', rentalPrice: 50, description: 'Compact sedan with great fuel efficiency' },
    { id: 2, model: 'Honda Civic', rentalPrice: 60, description: 'Reliable and comfortable sedan for city driving' },
    // Add more car listings as needed
  ];

  return (
    <div>
      <h2>Browse Cars</h2>
      <ul>
        {carListings.map((car) => (
          <li key={car.id}>
            <h3>{car.model}</h3>
            <p>Rental Price: ${car.rentalPrice} per day</p>
            <p>{car.description}</p>
            <button>Rent Now</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BrowseCars;