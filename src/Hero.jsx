import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from './assets/image.png';
import logo from './assets/logo.png';
import './Hero.css';

const heroSlides = [
  {
    image: Image,
    title: 'BRINGING THE CHANGE',
    subtitle: 'TOGETHER.',
    description: 'The Indian Institutes of Technology (IITs) were created to engineer technological innovations that would improve the living standards of the society at large.'
  },
  {
    image: Image,
    title: 'EMPOWERING COMMUNITIES',
    subtitle: 'ONE STEP AT A TIME',
    description: 'Join us in our mission to create positive social impact through education, environmental conservation, and community development initiatives.'
  },
  {
    image: Image,
    title: 'VOLUNTEER WITH US',
    subtitle: 'MAKE A DIFFERENCE',
    description: 'We invite all interested Faculty Members, Officers, Staff Members and Students to join NSS Cell as a Volunteer. Join here!'
  }
];

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -40; // Offset for fixed header if needed
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="hero-section">
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
          dynamicBullets: true,
        }}
        navigation={true}
        loop={true}
        className="hero-swiper"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="hero-slide">
              <div className="hero-image">
                <img src={slide.image} alt={slide.title} />
                <div className="overlay"></div>
              </div>
              <div className="hero-content">
                <h1 className="hero-title">
                  {slide.title}
                  <span className="hero-subtitle">{slide.subtitle}</span>
                </h1>
                <p className="hero-description">{slide.description}</p>
                {index === 2 && (
                  <button className="cta-button">Join Now</button>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="nss-logo">
        <img src={logo} alt="NSS Logo" />
        <span>NSS, IIT GUWAHATI</span>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
      </button>

      <nav className={`hero-nav ${isMenuOpen ? 'active' : ''}`}>
        <button onClick={() => scrollToSection('objectives')}>OBJECTIVES</button>
        <button onClick={() => scrollToSection('activities')}>ACTIVITIES</button>
        <button onClick={() => scrollToSection('team')}>OUR TEAM</button>
        <button onClick={() => scrollToSection('about')}>ABOUT</button>
        <button onClick={() => scrollToSection('contact')}>CONTACT</button>
      </nav>

      {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
    </div>
  );
};

export default Hero;
