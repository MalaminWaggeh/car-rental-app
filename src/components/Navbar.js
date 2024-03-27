import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#rent">Rent a Car</a></li>
        <li><a href="#browse">Browse Cars</a></li>
        <li><a href="#history">Rental History</a></li>
        {/* Add additional navigation items as needed */}
      </ul>
    </nav>
  );
}

export default Navbar;