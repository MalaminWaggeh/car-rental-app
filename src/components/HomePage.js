// src/components/HomePage.js

import React from 'react';

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
          <li><a href="#rent">Rent a Car</a></li>
          <li><a href="#browse">Browse Cars</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
