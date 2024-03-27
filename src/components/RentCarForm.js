import React, { useState } from 'react';

const RentCarForm = () => {
  const [carModel, setCarModel] = useState('');
  const [rentalDuration, setRentalDuration] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to backend API)
    console.log('Form submitted:', { carModel, rentalDuration, pickupLocation, dropoffLocation });
  };

  return (
    <div>
      <h2>Rent a Car</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Car Model:
          <input type="text" value={carModel} onChange={(e) => setCarModel(e.target.value)} />
        </label>
        <label>
          Rental Duration (Days):
          <input type="number" value={rentalDuration} onChange={(e) => setRentalDuration(e.target.value)} />
        </label>
        <label>
          Pickup Location:
          <input type="text" value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)} />
        </label>
        <label>
          Drop-off Location:
          <input type="text" value={dropoffLocation} onChange={(e) => setDropoffLocation(e.target.value)} />
        </label>
        <button type="submit">Rent Now</button>
      </form>
    </div>
  );
}

export default RentCarForm;