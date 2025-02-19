import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hading">
            YOUR FEET DESERVE THE BEST
          </h1>
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel labore impedit ab quam 
            dolorum dolore minus expedita nisi suscipit sit, delectus temporibus. 
            Veritatis dolore quidem, ex obcaecati cupiditate rerum quia?
          </p>
          <div className="button-group">
            <button className="btnn">Shop Now</button>
            <button className="btnnn">Category</button>
          </div>
          <div className="available-section">
            <h4>Also Available on:</h4>
            {/* Add store icons here if needed */}
          </div>
        </div>
        <div className="image-section">
          <img src="./images/blue.webp" alt="Nike Shoe" />
        </div>
      </div>
    </div>
  );
}

export default Home;