import React from 'react';
import './Location.css';

const Location = () => {
  const stores = [
    {
      name: "Nike Store - Downtown",
      address: "123 Main Street, City Center",
      hours: "Mon-Sat: 10AM-9PM, Sun: 11AM-7PM",
      phone: "(555) 123-4567"
    },
    {
      name: "Nike Factory Store",
      address: "456 Commerce Ave, Shopping District",
      hours: "Mon-Sun: 10AM-8PM",
      phone: "(555) 987-6543"
    },
    {
      name: "Nike Running",
      address: "789 Sports Boulevard, Athletics Quarter",
      hours: "Mon-Fri: 9AM-8PM, Sat-Sun: 10AM-6PM",
      phone: "(555) 246-8135"
    }
  ];

  return (
    <div className="location-container">
      <h1>Find a Nike Store Near You</h1>
      
      <div className="stores-grid">
        {stores.map((store, index) => (
          <div key={index} className="store-card">
            <h2>{store.name}</h2>
            <div className="store-details">
              <p><strong>Address:</strong> {store.address}</p>
              <p><strong>Hours:</strong> {store.hours}</p>
              <p><strong>Phone:</strong> {store.phone}</p>
            </div>
            <button className="directions-btn">Get Directions</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Location;
