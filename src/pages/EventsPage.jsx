import React, { useState, useEffect } from "react"; 
import { useNavigate } from 'react-router-dom';


const EventCard = ({ img, alt, title, date, onClick }) => (
  <div
    onClick={onClick}
    className="group bg-white rounded-xl shadow-lg overflow-hidden flex flex-col text-center cursor-pointer transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 relative"
  >
    {/* Image Container */}
    <div className="h-56 w-full overflow-hidden relative">
      <img
        src={img}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      {/* "Click to view" overlay */}
      <div className="absolute inset-0  group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100">
        <span className="text-white text-lg font-semibold bg-black bg-opacity-50 px-3 py-1 rounded">
          Click to view
        </span>
      </div>
    </div>
    {/* Text Content */}
    <div className="p-5 flex flex-col flex-grow">
      <h3 className="text-lg font-semibold text-blue-900 mb-2 flex-grow">{title}</h3>
      <span className="text-sm font-semibold text-green-600 border-t border-gray-100 pt-3 mt-2">
        {date}
      </span>
    </div>
  </div>
);

const GalleryOverlay = ({ eventName, images, onClose }) => (
  <div
    className="fixed inset-0  z-[1000] opacity:1 flex items-center justify-center p-4 animate-fadeIn"
    onClick={onClose}
  >
    <div
      className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
      onClick={(e) => e.stopPropagation()} 
    >
      {/* Header */}
      <div className="flex justify-between items-center p-5 border-b border-gray-200">
        <h3 className="text-2xl font-semibold text-blue-900">{eventName}</h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-red-500 transition-colors rounded-full p-1 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
          aria-label="Close gallery"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>

      {/* Image Grid */}
      <div className="p-6 overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md">
              <img
                src={image}
                alt={`${eventName} ${index + 1}`}
                className="w-full h-52 object-cover block"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);


const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventImages, setEventImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedEvent]);

  // Event data
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
    <section
      id="events"
      className={`bg-slate-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pb-24 transition-opacity duration-300 ${selectedEvent ? 'opacity-80' : 'opacity-100'}`} 
    >
      <h2 className="section-title mb-16">Our Latest Events</h2>

      {/* Events Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <EventCard
          img="assets/event1.jpg"
          alt="REPUBLIC DAY PARADE"
          title="REPUBLIC DAY PARADE"
          date="January 26, 2025"
          onClick={() => handleEventClick("REPUBLIC DAY PARADE")}
        />
        <EventCard
          img="assets/event2.jpg"
          alt="CANDLE MARCH"
          title="CANDLE MARCH"
          date="February 14, 2025"
          onClick={() => handleEventClick("CANDLE MARCH")}
        />
        <EventCard
          img="assets/event3.jpg"
          alt="PLASTIC FREE CAMPUS RALLY"
          title="PLASTIC FREE CAMPUS RALLY"
          date="March 31, 2025"
          onClick={() => handleEventClick("PLASTIC FREE CAMPUS RALLY")}
        />
        <EventCard
          img="assets/event4.jpg"
          alt="INDEPENDENCE DAY"
          title="INDEPENDENCE DAY"
          date="August 15, 2025"
          onClick={() => handleEventClick("INDEPENDENCE DAY")}
        />
        <EventCard
          img="assets/event5.jpg"
          alt="TIRANGA MARCH"
          title="TIRANGA MARCH"
          date="August 15, 2025"
          onClick={() => handleEventClick("TIRANGA MARCH")}
        />
        <EventCard
          img="assets/event6.jpg"
          alt="CLEANLINESS DRIVE"
          title="CLEANLINESS DRIVE"
          date="September 27, 2025"
          onClick={() => handleEventClick("CLEANLINESS DRIVE")}
        />
        <EventCard
          img="assets/event7.jpg"
          alt="CYCLOTHON"
          title="CYCLOTHON"
          date="September 27, 2025"
          onClick={() => handleEventClick("CYCLOTHON")}
        />
        <EventCard
          img="assets/events/welfare.jpeg"
          alt="MUSIC WORKSHOP BY MS.SUNITA BHUYAN"
          title="MUSIC WORKSHOP BY MS.SUNITA BHUYAN"
          date="October 7, 2025"
          onClick={() => handleEventClick("WORKSHOP ON C# (WELFARE)")}
        />
      </div>

      {selectedEvent && (
        <GalleryOverlay
          eventName={selectedEvent}
          images={eventImages}
          onClose={handleCloseGallery}
        />
      )}
    </section>
  );
};

export default EventsPage;

