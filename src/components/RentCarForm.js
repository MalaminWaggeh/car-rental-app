import React, { useState } from 'react';
import './RentCarForm.css'; // Make sure to create this CSS file

const RentCarForm = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [carModel, setCarModel] = useState('');
  const [rentalDuration, setRentalDuration] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { carModel, rentalDuration, pickupLocation, dropoffLocation });
  };

  return (
    <div className={`rent-car-container ${menuOpen ? 'open' : ''}`}>
      <header>
        <h1>Enter Car Details</h1>
        
      </header>
      <form onSubmit={handleSubmit} className="rent-car-form">
        <div className="form-group">
          <label>Car Model:</label>
          <input type="text" value={carModel} onChange={(e) => setCarModel(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Rental Duration (Days):</label>
          <input type="number" value={rentalDuration} onChange={(e) => setRentalDuration(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Pickup Location:</label>
          <input type="text" value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Drop-off Location:</label>
          <input type="text" value={dropoffLocation} onChange={(e) => setDropoffLocation(e.target.value)} />
        </div>
        <button type="submit" className="rent-now-btn">Rent Now</button>
      </form>
    </div>
  );
}

export default RentCarForm;
