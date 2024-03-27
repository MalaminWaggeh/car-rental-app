import React from 'react';
import './App.css'; // You can create this file for styling
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      {/* Add other components here as needed */}
    </div>
  );
}

export default App;