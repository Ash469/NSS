import  { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import logo from '/assets/logo.png';
import './Hero.css';

const heroSlides = [
  {
    image: 'assets/banner1.jpg',
    title: 'BRINGING THE CHANGE',
    subtitle: 'TOGETHER.',
    description: 'The Indian Institutes of Technology (IITs) were created to engineer technological innovations that would improve the living standards of the society at large.'
  },
  {
    image: 'assets/banner4.jpg',
    title: 'EMPOWERING COMMUNITIES',
    subtitle: 'ONE STEP AT A TIME',
    description: 'Join us in our mission to create positive social impact through education, environmental conservation, and community development initiatives.'
  },
  {
    image: 'assets/banner6.jpg',
    title: 'VOLUNTEER WITH US',
    subtitle: 'MAKE A DIFFERENCE',
    description: 'We invite all interested Faculty Members, Officers, Staff Members and Students to join NSS Cell as a Volunteer. Join here!'
  }
];

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -40;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    // eslint-disable-next-line react/no-unknown-property
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
                <img src={slide.image} alt={slide.title} />
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
      
      <div className="nav-wrapper">
        <div className="nss-logo">
          <img src="assets/logo.png" alt="NSS Logo" />
          <span>NSS, IIT GUWAHATI</span>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>

        <nav className={`hero-nav ${isMenuOpen ? 'active' : ''} ${isScrolled ? 'scrolled' : ''}`}>
          <button onClick={() => scrollToSection('home')}>
            <i className="fas fa-home"></i>
            <span>HOME</span>
          </button>
          <button onClick={() => scrollToSection('objectives')}>
            <i className="fas fa-bullseye"></i>
            <span>OBJECTIVES</span>
          </button>
          <button onClick={() => scrollToSection('activities')}>
            <i className="fas fa-tasks"></i>
            <span>ACTIVITIES</span>
          </button>
          <button onClick={() => scrollToSection('team')}>
            <i className="fas fa-users"></i>
            <span>TEAM</span>
          </button>
          <button onClick={() => scrollToSection('about')}>
            <i className="fas fa-info-circle"></i>
            <span>ABOUT</span>
          </button>
        </nav>

        {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
      </div>
    </div>
  );
};

export default Hero;
