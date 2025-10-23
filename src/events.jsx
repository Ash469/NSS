// src/events.jsx
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./events.css";

// --- NOTE: We only define the 4 events for the summary ---
const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventImages, setEventImages] = useState([]);
  const navigate = useNavigate();

  // Event data with multiple images
  const eventsData = {
    "REPUBLIC DAY PARADE": [
      "assets/events/republic_day/1.jpg",
      "assets/events/republic_day/2.jpg",
      "assets/events/republic_day/3.jpg"
    ],
    "CANDLE MARCH": [
      "assets/events/candle_march/1.jpeg",
      "assets/events/candle_march/2.jpeg",
      "assets/events/candle_march/3.jpeg"
    ],
    "PLASTIC FREE CAMPUS RALLY": [
      "assets/events/plastic_free/1.jpeg",
      "assets/events/plastic_free/2.jpeg",
      "assets/events/plastic_free/3.jpeg"
    ],
    "INDEPENDENCE DAY": [
      "assets/events/independence_day/1.jpg",
      "assets/events/independence_day/2.jpg",
      "assets/events/independence_day/3.jpg"
    ],
  };

  const handleEventClick = (eventName) => {
    setSelectedEvent(eventName);
    setEventImages(eventsData[eventName] || []);
  };

  const handleCloseGallery = () => {
    setSelectedEvent(null);
    setEventImages([]);
  };

  return (
    <section id="events" className="events-container">
      <h2 className="section-title">Our Latest Events</h2>
      
      {/* Event Gallery Overlay (keep this functionality) */}
      {selectedEvent && (
        <div className="event-gallery-overlay">
          <div className="event-gallery-content">
            <button className="close-gallery-btn" onClick={handleCloseGallery}>
              ×
            </button>
            <h3 className="gallery-title">{selectedEvent}</h3>
            <div className="gallery-images">
              {eventImages.map((image, index) => (
                <div key={index} className="gallery-image-container">
                  <img 
                    src={image} 
                    alt={`${selectedEvent} ${index + 1}`}
                    className="gallery-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* --- Show only 4 events for the summary --- */}
      <div className="events-content">
        <div className="event" onClick={() => handleEventClick("REPUBLIC DAY PARADE")}>
          <div className="event-image">
            <img src="assets/event1.jpg" alt="REPUBLIC DAY PARADE" />
          </div>
          <h3>REPUBLIC DAY PARADE</h3>
          <div className="event-date">January 26, 2025</div>
        </div>
        
        <div className="event" onClick={() => handleEventClick("CANDLE MARCH")}>
          <div className="event-image">
            <img src="assets/event2.jpg" alt="CANDLE MARCH" />
          </div>
          <h3>CANDLE MARCH</h3>
          <div className="event-date">February 14, 2025</div>
        </div>
        
        <div className="event" onClick={() => handleEventClick("PLASTIC FREE CAMPUS RALLY")}>
          <div className="event-image">
            <img src="assets/event3.jpg" alt="PLASTIC FREE CAMPUS RALLY" />
          </div>
          <h3>PLASTIC FREE CAMPUS RALLY</h3>
          <div className="event-date">March 31, 2025</div>
        </div>
        
        <div className="event" onClick={() => handleEventClick("INDEPENDENCE DAY")}>
          <div className="event-image">
            <img src="assets/event4.jpg" alt="INDEPENDENCE DAY" />
          </div>
          <h3>INDEPENDENCE DAY</h3>
          <div className="event-date">August 15, 2025</div>
        </div>
      </div>

      {/* --- ADD "View All" Button --- */}
      <button 
        onClick={() => navigate('/events')}
        className="cta-button" // Re-using cta-button style from Hero.css
        style={{ marginTop: '2.5rem', background: '#4CAF50', color: 'white', border: 'none', padding: '0.8rem 2rem', borderRadius: '4px', fontSize: '1rem', fontWeight: '500', cursor: 'pointer', alignSelf: 'center' }}
      >
        View All Events
      </button>

    </section>
  );
};

export default Events;