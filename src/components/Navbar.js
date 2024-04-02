import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <h1>CarRentalX</h1>
      <button onClick={toggleMenu}>☰</button>
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/rent-car">Rent a Car</Link></li>
          <li><Link to="/browse-cars">Browse Cars</Link></li>
          <li><Link to="/rental-history">Rental History</Link></li>
          <li><Link to="/duration-cost-chart">Duration/Cost Chart</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
