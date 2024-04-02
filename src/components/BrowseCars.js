// BrowseCars.js

import React, { useState } from 'react';
import './BrowseCars.css'; // Import CSS file for styling

const BrowseCars = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Dummy car listings data (replace with actual data later)
  const carListings = [
    { id: 1, model: 'Toyota Corolla', rentalPrice: 50, description: 'Compact sedan with great fuel efficiency' },
    { id: 2, model: 'Honda Civic', rentalPrice: 60, description: 'Reliable and comfortable sedan for city driving' },
    { id: 3, model: 'Ford Mustang', rentalPrice: 80, description: 'Classic American muscle car with powerful performance' },
    { id: 4, model: 'BMW 3 Series', rentalPrice: 90, description: 'Luxury sedan with advanced features and elegant design' },
    { id: 5, model: 'Mercedes-Benz C-Class', rentalPrice: 100, description: 'Premium compact sedan with refined interior' },
    { id: 6, model: 'Tesla Model 3', rentalPrice: 120, description: 'Electric sedan with cutting-edge technology and long range' },
    { id: 7, model: 'Audi A4', rentalPrice: 110, description: 'Sophisticated sedan with sporty performance and stylish design' },
    { id: 8, model: 'Chevrolet Camaro', rentalPrice: 85, description: 'Iconic American sports car known for its speed and agility' },
    { id: 9, model: 'Volkswagen Golf', rentalPrice: 70, description: 'Versatile hatchback with spacious interior and fun driving dynamics' },
    { id: 10, model: 'Subaru Outback', rentalPrice: 80, description: 'Rugged yet comfortable crossover with all-wheel drive capability' },
    // Add 10 more car listings
    { id: 11, model: 'Toyota Camry', rentalPrice: 65, description: 'Midsize sedan known for its reliability and comfort' },
    { id: 12, model: 'Nissan Altima', rentalPrice: 70, description: 'Family-friendly sedan with spacious cabin and smooth ride' },
    { id: 13, model: 'Jeep Wrangler', rentalPrice: 95, description: 'Off-road capable SUV with removable top for open-air driving' },
    { id: 14, model: 'Ford F-150', rentalPrice: 110, description: 'Best-selling pickup truck known for its versatility and towing capacity' },
    { id: 15, model: 'Chevrolet Tahoe', rentalPrice: 130, description: 'Full-size SUV with spacious interior and powerful V8 engine' },
    { id: 16, model: 'Dodge Charger', rentalPrice: 100, description: 'Muscle car with aggressive styling and high-performance options' },
    { id: 17, model: 'Lexus RX', rentalPrice: 120, description: 'Luxury crossover with refined ride and upscale interior' },
    { id: 18, model: 'Hyundai Sonata', rentalPrice: 75, description: 'Affordable midsize sedan with generous standard features' },
    { id: 19, model: 'Kia Sportage', rentalPrice: 85, description: 'Compact SUV with sporty design and user-friendly technology' },
    { id: 20, model: 'Mazda CX-5', rentalPrice: 90, description: 'Stylish crossover with engaging handling and upscale interior' },
  ];

  // Filter car listings based on search term
  const filteredCarListings = carListings.filter(car => 
    car.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="browse-cars-container">
      <h2>Browse Available Cars</h2>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search cars..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ul className="car-list">
        {filteredCarListings.map((car) => (
          <li key={car.id} className="car-item">
            <h3>{car.model}</h3>
            <p>Rental Price: ${car.rentalPrice} per day</p>
            <p>{car.description}</p>
            <button className="rent-now-btn">Rent Now</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BrowseCars;
