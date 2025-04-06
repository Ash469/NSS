import 'react';
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
    position: 'NSS Program Coordinator',
    image: 'assets/overall.png',
    social: {
      linkedin: 'https://linkedin.com',
      email: 'advisor@iitg.ac.in'
    }
  },
  {
    name: 'Shubham Gitam',
    position: 'Joint Student Coordinator',
    image: 'assets/jsc1.png',
    social: {
      linkedin: 'https://linkedin.com',
      email: 'coordinator@iitg.ac.in'
    }
  },
  {
    name: 'Rupjyoti Boro',
    position: 'Joint Student Coordinator',
    image: 'assets/jsc2.png',
    social: {
      linkedin: 'https://linkedin.com',
      email: 'tech@iitg.ac.in'
    }
  },
];

const Units = [
  { image: 'assets/teams/10.png', title: 'UNIT 1', },
  { image: 'assets/teams/11.png', title: 'UNIT 2', },
  { image: 'assets/teams/12.png', title: 'UNIT 3',},
  { image: 'assets/teams/13.png', title: 'UNIT 4' },
  { image: 'assets/teams/14.png', title: 'UNIT 5' },
  { image: 'assets/teams/15.png', title: 'UNIT 6' },
  { image: 'assets/teams/16.png', title: 'UNIT 7' },
  { image: 'assets/teams/17.png', title: 'UNIT 8' },
  { image: 'assets/teams/18.png', title: 'UNIT 9' },
  { image: 'assets/teams/19.png', title: 'UNIT 10' },
  { image: 'assets/teams/20.png', title: 'UNIT 11' },
  { image: 'assets/teams/21.png', title: 'Social Media Head' },
  { image: 'assets/teams/22.png', title: 'Joint Assistant' },
  { image: 'assets/teams/prev_jsc2.png', title: 'Previous Joint Student Codinattor' },
];

const Team = () => {
  return (
    <section id="team" className="team-section">
      <div className="container">
      <h2 className="section-title">Our Team</h2>
      <p className="section-subtitle">Meet the dedicated individuals behind NSS IIT Guwahati</p>
      
      <div className="team-grid" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* First Row - Single Member */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="team-member" style={{ width: '300px' }}>
          <div className="member-image">
          <img src={teamMembers[0].image} alt={teamMembers[0].name} loading="lazy" style={{ objectFit: 'contain' }}/>
          </div>
          <div className="member-info">
          <h3>{teamMembers[0].name}</h3>
          <p>{teamMembers[0].position}</p>
          </div>
        </div>
        </div>
        
        {/* Second Row - Two Members */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '80px' }}>
        {teamMembers.slice(1).map((member, index) => (
          <div key={index} className="team-member" style={{ width: '300px' }}>
          <div className="member-image">
            <img src={member.image} alt={member.name} loading="lazy" style={{ objectFit: 'contain' }}/>
          </div>
          <div className="member-info">
            <h3>{member.name}</h3>
            <p>{member.position}</p>
          </div>
          </div>
        ))}
        </div>
      </div>

      <h2 className="section-title">Our Units</h2>
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination, Keyboard]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
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
          slidesPerView: 1,
          spaceBetween: 10
        }
        }}
      >
        {Units.map((unit, index) => (
        <SwiperSlide key={index}>
          <div 
          className="unit-card" 
          style={{
            backgroundImage: `url(${unit.image})`
          }}
          >
          </div>
        </SwiperSlide>
        ))}
      </Swiper>

      <div className="previous-team">
        <h2 className="section-title">Previous Team</h2>
        <div className="team-member">
        <div className="prev_member-image">
          <img src="assets/teams/prev_jsc2.png" alt="Previous Joint Student Coordinator" loading="lazy" />
        </div>
        </div>
      </div>
      </div>
    </section>
    );
};

export default Team;
