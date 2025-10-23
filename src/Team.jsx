// src/Team.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Team.css'; // Keep this for specific card styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import './Team.css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// --- Data Arrays (programCoordinator, officeStaff, etc.) ---
// ... (Keep all your data arrays as they are) ...
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

// --- Define sections array for Vertical Nav ---
const sections = [
  { id: 'program-coordinator', title: 'Coordinator' },
  { id: 'office-staff', title: 'Office Staff' },
  { id: 'joint-coordinator', title: 'Joint Coordinators' },
  { id: 'unit-officers', title: 'Unit Officers' },
  { id: 'unit-coordinators', title: 'Unit Coordinators' },
  { id: 'previous-coordinators', title: 'Previous Coordinators' }
];

// --- VerticalNav Component (using styles from Team.css) ---
const VerticalNav = ({ activeSection, scrollToSection }) => (
  <nav className="vertical-nav">
    <ul>
      {sections.map(section => (
        <li key={section.id}>
          <button
            onClick={() => scrollToSection(section.id)}
            className={`vertical-nav-link ${activeSection === section.id ? 'active' : ''}`}
          >
            <span className="nav-label">{section.title}</span>
            <span className="nav-dot"></span>
          </button>
        </li>
      ))}
    </ul>
  </nav>
);

// --- Mobile Slide-Out Nav Component ---
const MobileSlideNav = ({ isOpen, onClose, activeSection, scrollToSection }) => (
    <>
        {/* Overlay */}
        <div
            className={`fixed inset-0 bg-black bg-opacity-50 z-[990] transition-opacity duration-300 lg:hidden ${
                isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
            onClick={onClose}
        ></div>
        {/* Slide Panel */}
        <div
            className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-[1000] transform transition-transform duration-300 ease-in-out lg:hidden ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <div className="p-4 pt-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4 border-b pb-2">Team Sections</h3>
                <ul>
                    {sections.map(section => (
                        <li key={section.id} className="mb-1">
                        <button
                            onClick={() => {
                                scrollToSection(section.id);
                                onClose(); // Close panel after clicking
                            }}
                            className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                                activeSection === section.id
                                    ? 'bg-blue-100 text-blue-700'
                                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                            }`}
                        >
                            {section.title}
                        </button>
                        </li>
                    ))}
                </ul>
            </div>
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                aria-label="Close menu"
            >
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>
    </>
);

// --- Mobile Nav Toggle Button ---
const MobileNavToggle = ({ onClick }) => (
    <button
        onClick={onClick}
        className="fixed bottom-6 right-6 z-[995] lg:hidden bg-blue-600 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        aria-label="Toggle team sections menu"
    >
        {/* Simple hamburger icon */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
    </button>
);


const Team = () => {
  const [activeSection, setActiveSection] = useState('program-coordinator');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false); // State for mobile nav

  // --- Scroll to specific section (Updated Offset) ---
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100; // Offset for main sticky nav
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      // Don't setActiveSection here, let the scroll listener handle it
    }
  };

  // --- Update active section on scroll ---
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = sections.map(s => s.id);
      const scrollOffset = 110;

      const currentSection = sectionIds.find(id => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if top is within view OR if bottom is entering view from top
          return (rect.top <= scrollOffset && rect.bottom >= scrollOffset) || (rect.top > 0 && rect.top <= scrollOffset);
        }
        return false;
      }) || sectionIds[0]; // Default to first section if none are found

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Main container with Tailwind padding
    // Removed max-w-7xl and mx-auto to allow full width for potentially wider cards later
    <div className="bg-slate-50 px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pb-24 relative">
      
      {/* --- Vertical Nav (Desktop only) --- */}
      <VerticalNav 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
       {/* --- Mobile Nav Toggle Button --- */}
       <MobileNavToggle onClick={() => setIsMobileNavOpen(true)} />

       {/* --- Mobile Slide Out Nav Panel --- */}
       <MobileSlideNav
            isOpen={isMobileNavOpen}
            onClose={() => setIsMobileNavOpen(false)}
            activeSection={activeSection}
            scrollToSection={scrollToSection}
        />

      {/* --- Page Content Container (with max-width) --- */}
      <div className="max-w-7xl mx-auto"> 
        {/* 1. Page Title */}
        <h2 className="section-title text-center mb-12">Our Team</h2>
        {/* Removed subtitle as it's less common with side nav */}

        {/* 3. Page Content Sections */}
        {/* Added mb-16 or mb-20 for spacing between sections */}

        {/* Programme Coordinator - Single */}
        <div id="program-coordinator" className="mb-16 md:mb-20"> 
          <h3 className="text-2xl font-semibold text-blue-900 mb-8 text-center section-heading-style">Programme Coordinator</h3>
          <div className="single-member-grid max-w-sm mx-auto"> {/* Centered and restricted width */}
            {programCoordinator.map((member, index) => (
              <div key={index} className="single-member-card bg-white rounded-lg shadow-md overflow-hidden">
                <div className="member-image h-64"> {/* Adjusted height */}
                  <img src={member.image} alt={member.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="member-info p-5 text-center">
                  <h4 className="text-xl font-semibold text-gray-800">{member.name}</h4>
                  <p className="text-blue-600">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Improved Office Staff Section */}
        <div id="office-staff" className="mb-16 md:mb-20">
          <h3 className="text-2xl font-semibold text-blue-900 mb-8 text-center section-heading-style">Office Staff</h3>
          <div className="office-staff-container max-w-5xl mx-auto flex flex-col gap-8"> {/* Max width and gap */}
            {officeStaff.map((member, index) => (
              // Using existing card styles but wrapped for layout
              <div key={index} className="office-staff-card bg-white rounded-lg shadow-md flex flex-col md:flex-row overflow-hidden">
                 {/* Keep inner structure from Team.css */}
                 <div className="staff-left md:w-1/3 p-6 flex flex-col items-center">
                    <img src={member.image} alt={member.name} className="staff-photo w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-blue-200 mb-4" loading="lazy" />
                    <div className="staff-basic-info text-center">
                        <h4 className="staff-name text-lg font-semibold">{member.name}</h4>
                        <p className="staff-position text-sm text-green-600">{member.position}</p>
                        <div className="phone-with-label mt-2">
                            <span className="phone-label text-xs text-gray-500">Contact:</span>
                            <p className="staff-phone text-sm font-medium">{member.contact.number}</p>
                        </div>
                    </div>
                </div>
                <div className="staff-right md:w-2/3 p-6 border-t md:border-t-0 md:border-l border-gray-200">
                    <div className="contact-header mb-4">
                        <h5 className="contact-title text-center font-semibold text-gray-700">Contact for:</h5>
                    </div>
                    {/* Responsibilities Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {member.contact.responsibilities.map((item, idx) => (
                            <div key={idx} className="responsibility-item text-xs bg-gray-50 p-2 rounded border border-gray-200 text-center">
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
        <div id="joint-coordinator" className="mb-16 md:mb-20">
          <h3 className="text-2xl font-semibold text-blue-900 mb-8 text-center section-heading-style">Joint Student Coordinators</h3>
          {/* Using CSS grid from Team.css but within Tailwind container */}
          <div className="joint-coordinators-grid max-w-2xl mx-auto">
             {jointCoordinator.map((member, index) => (
              <div key={index} className="joint-coordinator-card bg-white rounded-lg shadow-md overflow-hidden text-center p-6">
                <div className="joint-coordinator-image w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-200">
                  <img src={member.image} alt={member.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="joint-coordinator-info">
                  <h4 className="text-lg font-semibold">{member.name}</h4>
                  <p className="text-sm text-blue-600">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Unit Officers */}
        <div id="unit-officers" className="mb-16 md:mb-20">
          <h3 className="text-2xl font-semibold text-blue-900 mb-8 text-center section-heading-style">Unit Officers</h3>
          {/* Using CSS grid from Team.css but within Tailwind container */}
          <div className="units-container max-w-4xl mx-auto flex flex-col gap-6">
            {unitOfficers.map((unit, index) => (
              <div key={index} className="unit-section bg-white p-5 rounded-lg shadow-md">
                <h4 className="unit-heading text-lg font-semibold text-blue-800 mb-4 border-b pb-2">{unit.unit}</h4>
                <div className="unit-members-pair grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {unit.members.map((member, memberIndex) => (
                    <div key={memberIndex} className="unit-member-card flex items-center gap-3 p-3 bg-gray-50 rounded border">
                      <div className="member-image-small w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-blue-200">
                        <img src={member.image} alt={member.name} loading="lazy" className="w-full h-full object-cover"/>
                      </div>
                      <div className="member-details">
                        <h5 className="font-semibold text-sm">{member.name}</h5>
                        <p className="text-xs text-blue-600">{member.position}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Unit Coordinators */}
        <div id="unit-coordinators" className="mb-16 md:mb-20">
          <h3 className="text-2xl font-semibold text-blue-900 mb-8 text-center section-heading-style">Unit Coordinators</h3>
           {/* Using CSS grid from Team.css but within Tailwind container */}
           <div className="coordinators-container max-w-5xl mx-auto flex flex-col gap-6">
            {/* Split coordinators into chunks of 4 for rows */}
            {[0, 4, 8, 12].map(startIndex => (
                <div key={startIndex} className="coordinators-row grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {unitCoordinators.slice(startIndex, startIndex + 4).map((coordinator, index) => (
                        <div key={index} className="coordinator-card bg-white p-4 rounded-lg shadow text-center">
                            <div className="coordinator-image w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-2 border-blue-200">
                                <img src={coordinator.image} alt={coordinator.name} loading="lazy" className="w-full h-full object-cover" />
                            </div>
                            <div className="coordinator-info">
                                <h5 className="text-sm font-semibold">{coordinator.name}</h5>
                                <p className="text-xs text-blue-600">{coordinator.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
            </div>
        </div>

        {/* Previous Joint Student Coordinators Section */}
        <div id="previous-coordinators" className="mb-16 md:mb-20"> {/* Add margin-bottom */}
          <h3 className="text-2xl font-semibold text-blue-900 mb-8 text-center section-heading-style">Previous Joint Student Coordinators</h3>
           {/* Using CSS structure but with Tailwind container */}
          <div className="previous-teams-container max-w-4xl mx-auto flex flex-col gap-8">
            {previousJointCoordinators.map((team, index) => (
              <div key={index} className="year-group bg-white p-5 rounded-lg shadow-md">
                <h4 className="year-heading text-lg font-semibold text-center text-blue-800 mb-4 border-b pb-2">{team.year}</h4>
                <div className="previous-members-row flex flex-wrap justify-center gap-6">
                  {team.members.map((member, memberIndex) => (
                    <div key={memberIndex} className="previous-member-card bg-gray-50 p-4 rounded border w-48 text-center">
                      <div className="previous-member-image w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-blue-200">
                        <img src={member.image} alt={member.name} loading="lazy" className="w-full h-full object-cover" />
                      </div>
                      <div className="previous-member-info">
                        <h5 className="text-sm font-semibold">{member.name}</h5>
                        <p className="text-xs text-blue-600">{member.position}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div> 
    </div>
  );
};

export default Team;

