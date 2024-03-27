import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Import BrowserRouter
import HomePage from './components/HomePage';
import RentCarForm from './components/RentCarForm';
import RentalHistory from './components/RentalHistory';
import BrowseCars from './components/BrowseCars';
import DurationCostChart from './components/DurationCostChart';

const Routes = () => {
  return (
    <Router> {/* Use BrowserRouter */}
      <Route exact path="/" component={HomePage} />
      <Route path="/rent-car" component={RentCarForm} />
      <Route path="/rental-history" component={RentalHistory} />
      <Route path="/browse-cars" component={BrowseCars} />
      <Route path="/duration-cost-chart" component={DurationCostChart} />
    </Router>
  );
}

export default Routes;
