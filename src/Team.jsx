import 'react';
import './Team.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination,Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const teamMembers = [
  {
    name: 'Dr. Debanga Raj Neog',
    position: 'NSS Overall Program Coordinator',
    image: 'src/assets/overall.png',
    social: {
      linkedin: 'https://linkedin.com',
      email: 'advisor@iitg.ac.in'
    }
  },
  {
    name: 'Shubham Gitam',
    position: 'Joint Student Coordinator',
    image: 'src/assets/jsc1.png',
    social: {
      linkedin: 'https://linkedin.com',
      email: 'coordinator@iitg.ac.in'
    }
  },
  {
    name: 'Rupjyoti Boro',
    position: 'Joint Student Coordinator',
    image: 'src/assets/jsc2.png',
    social: {
      linkedin: 'https://linkedin.com',
      email: 'tech@iitg.ac.in'
    }
  },
];
// eslint-disable-next-line no-unused-vars
const Units = [
  {
    image: 'src/assets/10.png',
    title: 'UNIT 1'
  },
  {
    image: 'src/assets/11.png',
    title: 'UNIT 2'
  },
  {
    image: 'src/assets/12.png',
    title: 'UNIT 3'
  },
  // {
  //   image: 'src/assets/13.png',
  //   title: 'UNIT 4'
  // },
  {
    image: 'src/assets/14.png',
    title: 'UNIT 5'
  },
  {
    image: 'src/assets/15.png',
    title: 'UNIT 6'
  },
  {
    image: 'src/assets/16.png',
    title: 'UNIT 7'
  },
  {
    image: 'src/assets/17.png',
    title: 'UNIT 8'
  },
  {
    image: 'src/assets/18.png',
    title: 'UNIT 9'
  },
  {
    image: 'src/assets/19.png',
    title: 'UNIT 10'
  },
  {
    image: 'src/assets/20.png',
    title: 'UNIT 11'
  },
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

        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination, Keyboard]}
          effect="fade"
          speed={1000}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          loop={true}
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
          className="units-swiper"
        >
          {Units.map((unit, index) => (
            <SwiperSlide key={index}>
              <div className="unit-slide">
                <div className="unit-image">
                  <img src={unit.image} alt={unit.title} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
