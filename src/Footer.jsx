import React from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate(); // Add this

  // Function to handle Team navigation
  const handleTeamClick = (e) => {
    e.preventDefault();
    navigate('/team');
  };

  // Function to handle scroll navigation for other sections
  const handleScrollClick = (e, sectionId) => {
    e.preventDefault();
    // If we're not on the home page, navigate to home first
    if (window.location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete then scroll
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          const yOffset = -40;
          const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If we're already on home page, just scroll
      const section = document.getElementById(sectionId);
      if (section) {
        const yOffset = -40;
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>NSS IIT Guwahati</h3>
          <p>Empowering students through social service and community development.</p>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://x.com/nss_iitg" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/nss_iitg/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            {/* <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a> */}
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home" onClick={(e) => handleScrollClick(e, 'home')}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleScrollClick(e, 'about')}>About</a></li>
            <li><a href="/events">Latest Events</a></li>
            <li><a href="/activities" >Activities</a></li>
            <li><a href="/team">Team</a></li> 
            <li><a href="#contact" onClick={(e) => handleScrollClick(e, 'contact')}>Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>
            <i className="fas fa-map-marker-alt"></i>
            IIT Guwahati, Assam, India - 781039
          </p>
          <p>
            <i className="fas fa-phone"></i>
            +91 3612582931
          </p>
          <p>
            <i className="fas fa-envelope"></i>
            nss@iitg.ac.in
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} NSS IIT Guwahati. All rights reserved.</p>
        <p>Designed & Developed by Ayush Shandilya</p>
      </div>
    </footer>
  );
};

export default Footer;