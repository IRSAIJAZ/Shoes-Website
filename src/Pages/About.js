import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Nike</h1>
      <div className="about-content">
        <section className="mission">
          <h2>Our Mission</h2>
          <p>To bring inspiration and innovation to every athlete* in the world.</p>
          <p className="asterisk">*If you have a body, you are an athlete.</p>
        </section>

        <section className="history">
          <h2>Our History</h2>
          <p>Nike, originally known as Blue Ribbon Sports (BRS), was founded by Bill Bowerman and Phil Knight in 1964. The company officially became Nike, Inc. in 1971.</p>
        </section>

        <section className="values">
          <h2>Our Values</h2>
          <ul>
            <li>Innovation</li>
            <li>Sustainability</li>
            <li>Community</li>
            <li>Performance</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
