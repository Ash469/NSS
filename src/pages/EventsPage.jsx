import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import "../events.css";

const EventsPage = () => { 
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
    "TIRANGA MARCH": [
      "assets/events/tiranga_march/1.jpg",
      "assets/events/tiranga_march/2.jpg",
      "assets/events/tiranga_march/3.jpg"
    ],
    "CLEANLINESS DRIVE": [
      "assets/events/cleanliness/1.jpg",
      "assets/events/cleanliness/2.jpg",
      "assets/events/cleanliness/3.jpg"
    ],
    "CYCLOTHON": [
      "assets/events/cyclothon/1.jpg",
      "assets/events/cyclothon/2.jpg",
      "assets/events/cyclothon/3.jpg"
    ],
    "WORKSHOP ON C# (WELFARE)": [
      "assets/events/csharp_workshop/1.jpeg",
      "assets/events/csharp_workshop/2.jpeg",
      "assets/events/csharp_workshop/3.jpeg"
    ]
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
    <section id="events" className="events-container" style={{padding: '2rem 1rem'}}>

      <h2 className="section-title">Our Latest Events</h2>

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
        
        <div className="event" onClick={() => handleEventClick("TIRANGA MARCH")}>
          <div className="event-image">
            <img src="assets/event5.jpg" alt="TIRANGA MARCH" />
          </div>
          <h3>TIRANGA MARCH</h3>
          <div className="event-date">August 15, 2025</div>
        </div>
        
        <div className="event" onClick={() => handleEventClick("CLEANLINESS DRIVE")}>
          <div className="event-image">
            <img src="assets/event6.jpg" alt="CLEANLINESS DRIVE" />
          </div>
          <h3>CLEANLINESS DRIVE</h3>
          <div className="event-date">September 27, 2025</div>
        </div>
        
        <div className="event" onClick={() => handleEventClick("CYCLOTHON")}>
          <div className="event-image">
            <img src="assets/event7.jpg" alt="CYCLOTHON" />
          </div>
          <h3>CYCLOTHON</h3>
          <div className="event-date">September 27, 2025</div>
        </div>

        <div className="event" onClick={() => handleEventClick("WORKSHOP ON C# (WELFARE)")}>
          <div className="event-image">
            <img src="assets/events/welfare.jpeg" alt="WORKSHOP ON C# (WELFARE)" />
          </div>
          <h3>MUSIC WORKSHOP BY MS.SUNITA BHUYAN</h3>
          <div className="event-date">October 7, 2025</div>
        </div>
      </div>
    </section>
  );
};

export default EventsPage; 