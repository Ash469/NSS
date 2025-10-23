// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Hero';
import Objectives from './objective';
import Events from './events';
import Activity from './Activity';
import About from './About';
import Team from './Team';
import Footer from './Footer';
import Navbar from './Navbar'; // --- ADD THIS IMPORT ---

// Import our pages
import ActivitiesPage from './pages/ActivitiesPage'; 
import EventsPage from './pages/EventsPage'; 

const App = () => {
  
  // This component holds your home page layout
  const Home = () => (
    <>
      <Hero />
      <Objectives />
      <Events />
      <Activity />
      <About />
    </>
  );

  return (
    <Router>
      <div className="app">
      
        {/* --- ADD <Navbar /> HERE --- */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/events" element={<EventsPage />} />
        </Routes>

        <Footer /> 
      </div>
    </Router>
  );
};

export default App;