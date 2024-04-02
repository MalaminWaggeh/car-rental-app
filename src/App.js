// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage';
import RentCarForm from './components/RentCarForm';
import RentalHistory from './components/RentalHistory';
import BrowseCars from './components/BrowseCars';
import DurationCostChart from './components/DurationCostChart';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Render Navbar for all routes except the home page */}
        <Route
          path="/*"
          element={<AppLayout />}
        />
      </Routes>
    </Router>
  );
}

// Layout component containing Navbar
const AppLayout = () => {
  const location = useLocation();

  // Exclude Navbar from HomePage
  if (location.pathname === '/') {
    return (
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rent-car" element={<RentCarForm />} />
          <Route path="/rental-history" element={<RentalHistory />} />
          <Route path="/browse-cars" element={<BrowseCars />} />
          <Route path="/duration-cost-chart" element={<DurationCostChart />} />
        </Routes>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rent-car" element={<RentCarForm />} />
          <Route path="/rental-history" element={<RentalHistory />} />
          <Route path="/browse-cars" element={<BrowseCars />} />
          <Route path="/duration-cost-chart" element={<DurationCostChart />} />
        </Routes>
      </div>
    );
  }
}

export default App;
