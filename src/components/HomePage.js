import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; // Import CSS file for styling

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="home-page">
      <header>
        <h1>Welcome to CarRentalX</h1>
        <button onClick={toggleMenu}>☰</button>
      </header>
      <div className={`side-panel ${menuOpen ? "open" : ""}`}>
        <nav>
          <ul>
            <li>
              <Link to="/rent-car" onClick={toggleMenu}>
                Rent a Car
              </Link>
            </li>
            <li>
              <Link to="/browse-cars" onClick={toggleMenu}>
                Browse Cars
              </Link>
            </li>
            <li>
              <Link to="/rental-history" onClick={toggleMenu}>
                Rental History
              </Link>
            </li>
            <li>
              <Link to="/duration-cost-chart" onClick={toggleMenu}>
                Duration/Cost Chart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <section className="page-section">
        <h2>Discover Your Next Adventure</h2>
        <p>Rent the Perfect Car for Your Journey</p>
        <div>
          <p>Find your car:</p>
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </section>
      <hr /> {/* Horizontal line */}
      <section className="page-section">
        <h2>Featured Cars</h2>
        <div className="car-cards">
          <div className="car-card">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/2023-maserati-mc20-cielo-spyder-28-1666275747.jpg?crop=0.542xw:0.406xh;0.152xw,0.485xh&resize=1200:*"
              alt="Car 1"
              className="car-image"
            />
            <div className="car-details">
              <h3><strong>Car 1</strong> - Maserati MC20 Cielo Spyder</h3>
              <p>Compact sedan with great fuel efficiency</p>
              <button>Rent Me</button>
            </div>
          </div>
          <div className="car-card">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/2024-maserati-granturismo-trofeo-104-1664572237.jpg"
              alt="Car 2"
              className="car-image"
            />
            <div className="car-details">
              <h3><strong>Car 2</strong> - Maserati Granturismo Trofeo</h3>
              <p>Reliable and comfortable sedan for city driving</p>
              <button>Rent Me</button>
            </div>
          </div>
          <div className="car-card">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/2024-lotus-emira-118-654bb25960b1b.jpg?crop=0.614xw:0.690xh;0.272xw,0.310xh&resize=768:*"
              alt="Car 3"
              className="car-image"
            />
            <div className="car-details">
              <h3><strong>Car 3</strong> - Lotus Emira</h3>
              <p>Description of Car 3</p>
              <button>Rent Me</button>
            </div>
          </div>
          <div className="car-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9rphR35rkAb-aWIzmVK1eq4TR8J38RTTNbQ&usqp=CAU"
              alt="Car 4"
              className="car-image"
            />
            <div className="car-details">
              <h3><strong>Car 4</strong> - Unknown Car Model</h3>
              <p>Description of Car 4</p>
              <button>Rent Me</button>
            </div>
          </div>
          {/* Add more car cards as needed */}
        </div>
      </section>
      <hr /> {/* Horizontal line */}
      <section className="page-section">
        <h2>Rent Now</h2>
        <p>Check out our latest car deals!</p>
        <Link to="/rent-car">Rent Now</Link>
      </section>
      {/* Add more sections or content to make the page longer */}
    </div>
  );
};

export default HomePage;
