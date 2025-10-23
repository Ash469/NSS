import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Team.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Team = () => {
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState('program-coordinator');

  // Scroll to specific section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'program-coordinator',
        'office-staff', 
        'joint-coordinator',
        'unit-officers',
        'unit-coordinators',
        'previous-coordinators'
      ];

      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const programCoordinator = [
    {
      name: 'Dr. Debanga Raj Neog',
      position: 'NSS Programme Coordinator',
      image: 'assets/overall.png'
    }
  ];

  const officeStaff = [
    {
      name: 'Mr. Deep Jyoti Baruah',
      position: 'Office Staff',
      image: 'assets/staff/21.jpg',
      contact: {
        number: '+91 3612582931',
        responsibilities: [
          'Record of attendance of events',
          'Purchase matters and bill processing',
          'Preparation of agenda and minutes of Core Meetings',
          'Preparation of agenda and minutes of IAC Meetings',
          'Maintaining data of CoS and NSS volunteers',
          'Booking of auditorium, vehicle, classroom, and conference room',
          'Stock entry',
          'Booking of the NSS Conference Room',
          'Preparation of utilization certificates',
          'Circulation of office mails, blood requirement mails, etc.',
          'Drafting of official letters',
          'Any other misc. works as decided by the Programme Coordinator'
        ]
      }
    },
    {
      name: 'Mr. Jintumoni Hazarika',
      position: 'Jr. Attendant (Additional Duty)',
      image: 'assets/staff/22.jpg',
      contact: {
        number: '+91 7002633079',
        responsibilities: [
          'Receipt & Dispatch of NSS Cell',
          'Any other misc. works as decided by the Programme Coordinator'
        ]
      }
    }
  ];

  const jointCoordinator = [
    {
      name: 'Mr. Neelam Doin',
      position: 'Joint Student Coordinator',
      image: 'assets/staff/jsc.png'
    },
    {
      name: 'Ms. Man Mayuri Deka',
      position: 'Joint Student Coordinator', 
      image: 'assets/staff/unit_cord/16.jpg'
    }
  ];

  const unitOfficers = [
    {
      unit: 'Unit 01 Nilachal',
      members: [
        { name: 'Dr. Kalyan Raidongia', position: 'PO', image: 'assets/staff/unit1/1.png' },
        { name: 'Mrs. Pallabita Barooah Choudhury', position: 'APO', image: 'assets/staff/unit1/2.png' }
      ]
    },
    {
      unit: 'Unit 02 Chitrachal',
      members: [
        { name: 'Dr. Rituparna Patgiri', position: 'PO', image: 'assets/staff/unit2/5.png' },
        { name: 'Mr. Kallal Baruah', position: 'APO', image: 'assets/staff/unit2/6.png' }
      ]
    },
    {
      unit: 'Unit 03 Sandhyachal',
      members: [
        { name: 'Dr. Nipjyoti Bharadwaj', position: 'PO', image: 'assets/staff/unit3/9.png' },
        { name: 'Mr. Manash Protim Dutta', position: 'APO', image: 'assets/staff/unit3/10.png' }
      ]
    },
    {
      unit: 'Unit 04 Bhasmachal',
      members: [
        { name: 'Dr. Manish Bhatt', position: 'PO', image: 'assets/staff/unit4/12.png' },
        { name: 'Mr. Kalyan Boro', position: 'APO', image: 'assets/staff/unit4/13.png' }
      ]
    },
    {
      unit: 'Unit 05 Bayukut',
      members: [
        { name: 'Dr. Neeraj K Sharma', position: 'PO', image: 'assets/staff/unit5/13.png' },
        { name: 'Mr. Pankaj kumar', position: 'APO', image: 'assets/staff/unit5/14.png' }
      ]
    },
    {
      unit: 'Unit 06 Chandrakut',
      members: [
        { name: 'Dr.Mohammed Mosaddique Nawaz Husain', position: 'PO', image: 'assets/staff/unit6/14.png' },
        { name: 'Mr. Manjil Das', position: 'APO', image: 'assets/staff/unit6/15.png' }
      ]
    },
    {
      unit: 'Unit 07 Manikarneswar',
      members: [
        { name: 'Dr. Sumit Kumar', position: 'PO', image: 'assets/staff/unit7/15.png' },
        { name: 'Mr. Nabakumar Bhoi', position: 'APO', image: 'assets/staff/unit7/16.png' }
      ]
    },
    {
      unit: 'Unit 08 Garuachal',
      members: [
        { name: 'Dr. Kuldeep Baishya', position: 'PO', image: 'assets/staff/unit8/16.png' },
        { name: 'Mr. Himanku Dutta', position: 'APO', image: 'assets/staff/unit8/17.png' }
      ]
    },
    {
      unit: 'Unit 09 Drigheswari',
      members: [
        { name: 'Dr. R. B. Sharmila', position: 'PO', image: 'assets/staff/unit9/17.png' },
        { name: 'Ms. Nitimoyee Mahanta', position: 'APO', image: 'assets/staff/unit9/18.png' }
      ]
    },
    {
      unit: 'Unit 10 Agiyathuri',
      members: [
        { name: 'Dr. Romanbabu Oinam', position: 'PO', image: 'assets/staff/unit10/18.png' },
        { name: 'Ms. Nandeeta Das Salhotra', position: 'APO', image: 'assets/staff/unit10/19.png' }
      ]
    },
    {
      unit: 'Unit 11 Devottar',
      members: [
        { name: 'Dr. Kaling Taki', position: 'PO', image: 'assets/staff/unit11/19.png' },
        { name: 'Mr. Mintu Dutta', position: 'APO', image: 'assets/staff/unit11/20.png' }
      ]
    }
  ];

const unitCoordinators = [
  { name: 'Mr. Lav Kumar', position: 'Unit Coordinator', image: 'assets/staff/unit_cord/1.png' },
  { name: 'Mr. Harish Kumar', position: 'Unit Coordinator', image: 'assets/staff/unit_cord/2.png' },
  { name: 'Mr. Jasvinder Singh', position: 'Unit Coordinator', image: 'assets/staff/unit_cord/3.png' },
  { name: 'Ms. Shreha Kumari', position: 'Unit Coordinator', image: 'assets/staff/unit_cord/4.png' },
  { name: 'Ms. Pratibha Chaudhary', position: 'Unit Coordinator', image: 'assets/staff/unit_cord/5.png' },
  { name: 'Ms. Riya Ranjit Patil', position: 'Unit Coordinator', image: 'assets/staff/unit_cord/6.png' },
  { name: 'Mr. Mohit Nagraj', position: 'Unit Coordinator', image: 'assets/staff/unit_cord/7.png' },
  { name: 'Mr. Pallab Dutta', position: 'Unit Coordinator', image: 'assets/staff/unit_cord/8.PNG' },
  { name: 'Mr. Utkarsh Jaiswal', position: 'Unit Coordinator', image: 'assets/staff/unit_cord/9.jpeg' },
  { name: 'Ms. Pratibha Bairwa', position: 'Unit Coordinator', image: 'assets/staff/unit_cord/10.jpg' },
  { name: 'Mr. Harshit Mishra', position: 'Unit Coordinator', image: 'assets/staff/unit_cord/11.PNG' },
  { name: 'Mr. Surya', position: 'Unit Coordinator', image: 'assets/staff/unit_cord/12.PNG' },
  { name: 'Mr. Subhodeep Paul', position: 'Unit Coordinator', image: 'assets/staff/unit_cord/13.PNG' },
  { name: 'Mr. Neer Nayan Gogoi', position: 'Unit Coordinator', image: 'assets/staff/unit_cord/14.jpg' },
  { name: 'Ms. Aditi Prabha', position: 'Unit Coordinator', image: 'assets/staff/unit_cord/15.jpg' },
  { name: 'Ms. Matti D. Majaw', position: 'Unit Coordinator', image: 'assets/staff/unit_cord/17.PNG' }
];

// NEW: Previous Joint Student Coordinators data structure
const previousJointCoordinators = [
  {
    year: '2024-2025',
    members: [
      { 
        name: 'Shubham Gitam', 
        position: 'Joint Student Coordinator', 
        image: 'assets/prev/jsc1.png' 
      },
      { 
        name: 'Rupjyoti Boro', 
        position: 'Joint Student Coordinator', 
        image: 'assets/prev/jsc2.png' 
      }
    ]
  },
  {
    year: '2023-2024',
    members: [
      { 
        name: 'Rohit Kumar', 
        position: 'Joint Student Coordinator', 
        image: 'assets/prev/pjsc12.PNG' 
      },
      { 
        name: 'Reeya Tamang', 
        position: 'Joint Student Coordinator', 
        image: 'assets/prev/pjsc11.PNG' 
      }
    ]
  },
  {
    year: '2022-2023',
    members: [
      { 
        name: 'Ayush Raj', 
        position: 'Joint Student Coordinator', 
        image: 'assets/prev/PJSC22.PNG' 
      },
      { 
        name: 'Priyanka Tripathi', 
        position: 'Joint Student Coordinator', 
        image: 'assets/prev/pjsc21.PNG' 
      }
    ]
  }
];


  return (
    <div className='p-4'>
      <h2 className="section-title">Our Team</h2>
      <nav className="section-navbar">
        <div className="nav-container">
          <button 
            className={`nav-link ${activeSection === 'program-coordinator' ? 'active' : ''}`}
            onClick={() => scrollToSection('program-coordinator')}
          >
            Programme Coordinator
          </button>
          <button 
            className={`nav-link ${activeSection === 'office-staff' ? 'active' : ''}`}
            onClick={() => scrollToSection('office-staff')}
          >
            Office Staff
          </button>
          <button 
            className={`nav-link ${activeSection === 'joint-coordinator' ? 'active' : ''}`}
            onClick={() => scrollToSection('joint-coordinator')}
          >
            Joint Coordinators
          </button>
          <button 
            className={`nav-link ${activeSection === 'unit-officers' ? 'active' : ''}`}
            onClick={() => scrollToSection('unit-officers')}
          >
            Unit Officers
          </button>
          <button 
            className={`nav-link ${activeSection === 'unit-coordinators' ? 'active' : ''}`}
            onClick={() => scrollToSection('unit-coordinators')}
          >
            Unit Coordinators
          </button>
          <button 
            className={`nav-link ${activeSection === 'previous-coordinators' ? 'active' : ''}`}
            onClick={() => scrollToSection('previous-coordinators')}
          >
            Previous Coordinators
          </button>
        </div>
      </nav>

      <section className="team-section">
        <div className="container">
          <p className="main-subtitle">Meet the dedicated individuals behind NSS IIT Guwahati</p>
          
          {/* Programme Coordinator - Single */}
          <div id="program-coordinator" className="single-member-section">
            <h2 className="section-title">Programme Coordinator</h2>
            <div className="single-member-grid">
              {programCoordinator.map((member, index) => (
                <div key={index} className="single-member-card">
                  <div className="member-image">
                    <img src={member.image} alt={member.name} loading="lazy" />
                  </div>
                  <div className="member-info">
                    <h3>{member.name}</h3>
                    <p>{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Improved Office Staff Section */}
          <div id="office-staff" className="office-staff-section">
            <h2 className="section-title">Office Staff</h2>
            <div className="office-staff-container">
              {officeStaff.map((member, index) => (
                <div key={index} className="office-staff-card">
                  <div className="staff-left">
                    <img src={member.image} alt={member.name} className="staff-photo" loading="lazy" />
                    <div className="staff-basic-info">
                      <h3 className="staff-name">{member.name}</h3>
                      <p className="staff-position">{member.position}</p>
                      {/* Contact number moved below name and position */}
                      <div className="phone-with-label">
                        <span className="phone-label">Contact Number:</span>
                        <p className="staff-phone">{member.contact.number}</p>
                      </div>
                    </div>
                  </div>
                  <div className="staff-right">
                    <div className="contact-header">
                      <h4 className="contact-title">Contact for:</h4>
                    </div>
                    <div className="responsibilities-grid">
                      {member.contact.responsibilities.map((item, idx) => (
                        <div key={idx} className="responsibility-item">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Joint Student Coordinators */}
          <div id="joint-coordinator" className="joint-coordinators-section">
            <h2 className="section-title">Joint Student Coordinators</h2>
            <div className="joint-coordinators-grid">
              {jointCoordinator.map((member, index) => (
                <div key={index} className="joint-coordinator-card">
                  <div className="joint-coordinator-image">
                    <img src={member.image} alt={member.name} loading="lazy" />
                  </div>
                  <div className="joint-coordinator-info">
                    <h3>{member.name}</h3>
                    <p>{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Unit Officers */}
          <div id="unit-officers" className="unit-officers-section">
            <h2 className="section-title">Unit Officers</h2>
            <div className="units-container">
              {unitOfficers.map((unit, index) => (
                <div key={index} className="unit-section">
                  <h3 className="unit-heading">{unit.unit}</h3>
                  <div className="unit-members-pair">
                    {unit.members.map((member, memberIndex) => (
                      <div key={memberIndex} className="unit-member-card">
                        <div className="member-image-small">
                          <img src={member.image} alt={member.name} loading="lazy" />
                        </div>
                        <div className="member-details">
                          <h4>{member.name}</h4>
                          <p>{member.position}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Unit Coordinators */}
          <div id="unit-coordinators" className="coordinators-section">
            <h2 className="section-title">Unit Coordinators</h2>
            <div className="coordinators-container">
              <div className="coordinators-row">
                {unitCoordinators.slice(0, 4).map((coordinator, index) => (
                  <div key={index} className="coordinator-card">
                    <div className="coordinator-image">
                      <img src={coordinator.image} alt={coordinator.name} loading="lazy" />
                    </div>
                    <div className="coordinator-info">
                      <h3>{coordinator.name}</h3>
                      <p>{coordinator.position}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="coordinators-row">
                {unitCoordinators.slice(4, 8).map((coordinator, index) => (
                  <div key={index} className="coordinator-card">
                    <div className="coordinator-image">
                      <img src={coordinator.image} alt={coordinator.name} loading="lazy" />
                    </div>
                    <div className="coordinator-info">
                      <h3>{coordinator.name}</h3>
                      <p>{coordinator.position}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="coordinators-row">
                {unitCoordinators.slice(8, 12).map((coordinator, index) => (
                  <div key={index} className="coordinator-card">
                    <div className="coordinator-image">
                      <img src={coordinator.image} alt={coordinator.name} loading="lazy" />
                    </div>
                    <div className="coordinator-info">
                      <h3>{coordinator.name}</h3>
                      <p>{coordinator.position}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="coordinators-row">
                {unitCoordinators.slice(12, 16).map((coordinator, index) => (
                  <div key={index} className="coordinator-card">
                    <div className="coordinator-image">
                      <img src={coordinator.image} alt={coordinator.name} loading="lazy" />
                    </div>
                    <div className="coordinator-info">
                      <h3>{coordinator.name}</h3>
                      <p>{coordinator.position}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Previous Joint Student Coordinators Section */}
          <div id="previous-coordinators" className="previous-team-section">
            <h2 className="section-title">Previous Joint Student Coordinators</h2>
            <div className="previous-teams-container">
              {previousJointCoordinators.map((team, index) => (
                <div key={index} className="year-group">
                  <h3 className="year-heading">{team.year}</h3>
                  <div className="previous-members-row">
                    {team.members.map((member, memberIndex) => (
                      <div key={memberIndex} className="previous-member-card">
                        <div className="previous-member-image">
                          <img src={member.image} alt={member.name} loading="lazy" />
                        </div>
                        <div className="previous-member-info">
                          <h4>{member.name}</h4>
                          <p>{member.position}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;