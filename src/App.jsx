// src/App.jsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './Navbar';
import Footer from './Footer';

// Home page sections
import Hero from './Hero';
import Objectives from './objective';
import Events from './events';
import Activity from './Activity';
import About from './About';

// Lazy-loaded pages
const Team = React.lazy(() => import('./Team'));
const ActivitiesPage = React.lazy(() => import('./pages/ActivitiesPage'));
const EventsPage = React.lazy(() => import('./pages/EventsPage'));
const VolunteerHours = React.lazy(() => import('./pages/voluterPage'));

// Loading component
const PageLoader = () => (
  <div style={{ display: 'grid', placeItems: 'center', minHeight: '80vh', background: '#f8fafc' }}>
    <p style={{ fontSize: '1.2rem', color: '#333' }}>Loading Page...</p>
  </div>
);

// Home page layout
const Home = () => (
  <>
    <Hero />
    <Objectives />
    <Events />
    <Activity />
    <About />
  </>
);

const App = () => {
  return (
    <Router>
      <Navbar />

      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/hours" element={<VolunteerHours />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
