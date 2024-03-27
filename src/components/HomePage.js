import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Welcome to CarRentalX</h1>
      </header>
      <section>
        <h2>Discover Your Next Adventure</h2>
        <p>Rent the Perfect Car for Your Journey</p>
      </section>
      <nav>
        <ul>
          <li><Link to="/rent-car">Rent a Car</Link></li>
          <li><Link to="/browse-cars">Browse Cars</Link></li>
          <li><Link to="/rental-history">Rental History</Link></li>
          <li><Link to="/duration-cost-chart">Duration/Cost Chart</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
