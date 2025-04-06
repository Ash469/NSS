import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About NSS IIT Guwahati</h2>
        
        <div className="about-content">
          <div className="about-image">
            <img src="assets/logo.png" alt="NSS Team" />
          </div>
          
          <div className="about-text">
            <h3>Our Mission</h3>
            <p>
              The National Service Scheme (NSS) at IIT Guwahati is dedicated to developing
              student&apos;s personality through community service. Our mission is to instill
              social welfare in students and provide service to society without bias.
            </p>
            
            <h3>Our Vision</h3>
            <p>
              We envision a society where young minds are actively engaged in nation-building
              through social service, environmental conservation, and community development.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Volunteers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
