import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import RentCarForm from './components/RentCarForm';
import RentalHistory from './components/RentalHistory';
import BrowseCars from './components/BrowseCars';
import DurationCostChart from './components/DurationCostChart';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rent-car" element={<RentCarForm />} />
          <Route path="/rental-history" element={<RentalHistory />} />
          <Route path="/browse-cars" element={<BrowseCars />} />
          <Route path="/duration-cost-chart" element={<DurationCostChart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
