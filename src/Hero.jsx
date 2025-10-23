// src/Hero.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Hero.css';

const heroSlides = [
  {
    image: 'assets/banner1.jpg',
    title: 'BRINGING THE CHANGE',
    subtitle: 'TOGETHER.',
    description: 'The Indian Institutes of Technology (IITs) were created to engineer technological innovations that would improve the living standards of the society at large.'
  },
  {
    image: 'assets/banner1.jpg', 
    title: 'EMPOWERING COMMUNITIES',
    subtitle: 'ONE STEP AT A TIME',
    description: 'Join us in our mission to create positive social impact through education, environmental conservation, and community development initiatives.'
  },
  {
    image: 'assets/banner1.jpg',
    title: 'VOLUNTEER WITH US',
    subtitle: 'MAKE A DIFFERENCE',
    description: 'We invite all interested Faculty Members, Officers, Staff Members and Students to join NSS Cell as a Volunteer. Join here!'
  }
];

const Hero = () => {
  return (
    <div section id="home" className="hero-section">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: false,
          renderBullet: function (index, className) {
            return `<span class="${className}"></span>`;
          }
        }}
        navigation={true}
        loop={true}
        className="hero-swiper"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="hero-slide">
              <div className="hero-image">
                <img src="assets/banner1.jpg" alt={slide.title} />
                <div className="overlay"></div>
              </div>
              <div className="hero-content">
                <h1 className="hero-title">
                  {slide.title}
                  <span className="hero-subtitle">{slide.subtitle}</span>
                </h1>
                <p className="hero-description">{slide.description}</p>
                <button 
                  className="cta-button"
                  onClick={() => window.open('https://forms.office.com/Pages/DesignPageV2.aspx?prevorigin=shell&origin=NeoPortalPage&subpage=design&id=jacKheGUxkuc84wRtTBwHC4GMrMZVLFLrBQexzEsxFZUM1E4SDFQVTg4TkVGUDRWTjhMU09ZTTFVVy4u', '_blank')}
                >
                  Join Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* The entire .nav-wrapper div has been removed from here */}
      
    </div>
  );
};

export default Hero;