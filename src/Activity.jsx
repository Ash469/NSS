// src/Activity.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { activities } from './ActivityData';
import './Activity.css';

const PentagonIcon = () => (
  <svg width="12" height="10" viewBox="0 0 12 10" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5.00004L9.1 9.10004C8.97778 9.27782 8.81944 9.41671 8.625 9.51671C8.43056 9.61671 8.22222 9.66671 8 9.66671H1.33333C0.966667 9.66671 0.652778 9.53615 0.391667 9.27504C0.130556 9.01393 0 8.70004 0 8.33337V1.66671C0 1.30004 0.130556 0.986152 0.391667 0.725041C0.652778 0.46393 0.966667 0.333374 1.33333 0.333374H8C8.22222 0.333374 8.43056 0.383374 8.625 0.483374C8.81944 0.583374 8.97778 0.722263 9.1 0.900041L12 5.00004ZM10.3667 5.00004L8 1.66671H1.33333V8.33337H8L10.3667 5.00004Z" fill="white"/>
</svg>
);

const ActivitySummaryCard = ({ activity }) => (
  <div className="activity-card grid">
    <div className="image-container">
      <img src={activity.image} alt={activity.title} loading="lazy" />
      <div className="activity-meta">
        <span className="category">
          <PentagonIcon />
          {activity.category}
        </span>
      </div>
    </div>
    <div className="activity-content">
      <h3>{activity.title}</h3>
      <p>{activity.description}</p>
    </div>
  </div>
);

function Activity() {
  const navigate = useNavigate();

  const recentActivities = [...activities].reverse().slice(0, 6);

  return (
    <div id="activities" className="activities-container" style={{ paddingBottom: '3rem' }}>
      <div className="header-section">
        <div className="header-content">
          <h2>Recent Activities</h2>
        </div>
      </div>

      <div className="activities-layout grid">
        {recentActivities.map((activity) => (
          <ActivitySummaryCard key={activity.id} activity={activity} />
        ))}
      </div>

      <button 
        onClick={() => navigate('/activities')}
        className="cta-button" 
        style={{ marginTop: '2.5rem', background: '#4CAF50', color: 'white', border: 'none', padding: '0.8rem 2rem', borderRadius: '4px', fontSize: '1rem', fontWeight: '500', cursor: 'pointer' }}
      >
        View All Activities
      </button>
    </div>
  );
}

export default Activity;