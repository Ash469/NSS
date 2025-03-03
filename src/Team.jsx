import React from 'react';
import './Team.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const teamMembers = [
  {
    name: 'Dr. Debanga Raj Neog',
    position: 'NSS Overall Program Coordinator',
    image: '/assets/overall.png',
    social: {
      linkedin: 'https://linkedin.com',
      email: 'advisor@iitg.ac.in'
    }
  },
  {
    name: 'Shubham Gitam',
    position: 'Joint Student Coordinator',
    image: '/assets/jsc1.png',
    social: {
      linkedin: 'https://linkedin.com',
      email: 'coordinator@iitg.ac.in'
    }
  },
  {
    name: 'Rupjyoti Boro',
    position: 'Joint Student Coordinator',
    image: '/assets/jsc2.png',
    social: {
      linkedin: 'https://linkedin.com',
      email: 'tech@iitg.ac.in'
    }
  },
];

const Units = [
  { image: '/assets/unit1.png', title: 'UNIT 1', description: 'Environmental Conservation' },
  { image: '/assets/unit2.png', title: 'UNIT 2', description: 'Community Health and Hygiene' },
  { image: '/assets/unit3.png', title: 'UNIT 3', description: 'Education and Literacy' },
  { image: '/assets/unit4.png', title: 'UNIT 4' },
  { image: '/assets/unit5.png', title: 'UNIT 5' },
  { image: '/assets/unit6.png', title: 'UNIT 6' },
  { image: '/assets/unit7.png', title: 'UNIT 7' },
  { image: '/assets/unit8.png', title: 'UNIT 8' },
  { image: '/assets/unit9.png', title: 'UNIT 9' },
  { image: '/assets/unit10.png', title: 'UNIT 10' },
  { image: '/assets/unit11.png', title: 'UNIT 11' },
  { image: '/assets/UC1.png', title: 'Unit Coordinator' },
  { image: '/assets/UC2.png', title: 'Unit Coordinator' },
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
                <img src={member.image} alt={member.name} loading="lazy" />
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p>{member.position}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="section-title">Our Units</h2>
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination, Keyboard]}
          spaceBetween={0}
          slidesPerView={1} // Show only one preview at a time
          loop={true} /* Ensure loop is set to true */
          pagination={{ 
            clickable: true,
            bulletClass: 'swiper-pagination-bullet blue-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active blue-bullet-active'
          }}
          keyboard={{ enabled: true }}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 1, // Show only one preview at a time for larger screens as well
              spaceBetween: 10
            }
          }}
        >
          {Units.map((unit, index) => (
            <SwiperSlide key={index}>
              <div className="unit-card">
                <img src={unit.image} alt={unit.title} loading="lazy" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
