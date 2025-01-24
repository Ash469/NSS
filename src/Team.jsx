import React from 'react';
import './Team.css';

const teamMembers = [
  {
    name: 'Dr. Debanga Raj Neog',
    position: 'NSS Overall Program Coordinator',
    image: '/images/team/advisor.jpg',
    social: {
      linkedin: 'https://linkedin.com',
      email: 'advisor@iitg.ac.in'
    }
  },
  {
    name: 'Shubham Gitam',
    position: 'Joint Student Coordinator',
    image: '/images/team/coordinator1.jpg',
    social: {
      linkedin: 'https://linkedin.com',
      email: 'coordinator@iitg.ac.in'
    }
  },
  {
    name: 'Rupjyoti Boro',
    position: 'Joint Student Coordinator',
    image: '/images/team/tech-lead.jpg',
    social: {
      linkedin: 'https://linkedin.com',
      email: 'tech@iitg.ac.in'
    }
  },
  // Add more team members as needed
];

const Team = () => {
  return (
    <section id="team" className="team-section">
      <div className="container">
        <h2 className="section-title">Our Team</h2>
        <p className="section-subtitle">Meet the dedicated individuals behind NSS IIT Guwahati</p>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
                <div className="member-social">
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href={`mailto:${member.social.email}`}>
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p>{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
