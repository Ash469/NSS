import React from "react";
import "./objective.css";

const Objectives = () => {
  return (
    <section id="objectives" className="objectives-container">
      <h2 className="section-title">Our Objectives</h2>
      <div className="objectives-content">
        <div className="objective">
          <div className="objective-image">
            <img src="/images/volunteerism.jpg" alt="Promote Volunteerism" />
          </div>
          <h3>Promote Volunteerism</h3>
          <p>Encourage students to engage in selfless community service.</p>
        </div>
        <div className="objective">
          <div className="objective-image">
            <img src="/images/leadership.jpg" alt="Develop Leadership Skills" />
          </div>
          <h3>Develop Leadership Skills</h3>
          <p>Foster leadership, teamwork, and organizational abilities through social projects.</p>
        </div>
        <div className="objective">
          <div className="objective-image">
            <img src="/images/social_awareness.jpg" alt="Social Awareness" />
          </div>
          <h3>Social Awareness</h3>
          <p>Enhance awareness about societal challenges and empower students to address them.</p>
        </div>
        <div className="objective">
          <div className="objective-image">
            <img src="/images/national_integration.jpg" alt="National Integration" />
          </div>
          <h3>National Integration</h3>
          <p>Promote unity and understanding among diverse groups.</p>
        </div>
      </div>
    </section>
  );
};

export default Objectives;