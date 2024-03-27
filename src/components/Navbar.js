import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rent-car">Rent a Car</Link></li>
        <li><Link to="/rental-history">Rental History</Link></li>
        <li><Link to="/browse-cars">Browse Cars</Link></li>
        <li><Link to="/duration-cost-chart">Duration/Cost Chart</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
