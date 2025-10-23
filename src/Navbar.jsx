import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Hero.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const section = document.getElementById(sectionId);
                if (section) {
                    const yOffset = -40;
                    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 100);
        } else {
            const section = document.getElementById(sectionId);
            if (section) {
                const yOffset = -40;
                const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }
        setIsMenuOpen(false);
    };
    const handleTeamClick = () => {
        navigate('/team');
        setIsMenuOpen(false);
    };
    const handleEventsClick = () => {
        navigate('/events');
        setIsMenuOpen(false);
    };
    const handleActivitiesClick = () => {
        navigate('/activities');
        setIsMenuOpen(false);
    };
    const handleHoursClick = () => {
        navigate('/hours');
        setIsMenuOpen(false);
    }

    const ClockIcon = () => (
        <svg className="w-4 h-4 mr-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
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
                <button onClick={handleEventsClick}>
                    <i className="fas fa-tasks"></i>
                    <span>EVENTS</span>
                </button>
                <button onClick={handleActivitiesClick}>
                    <i className="fas fa-tasks"></i>
                    <span>ACTIVITIES</span>
                </button>
                <button onClick={handleTeamClick}>
                    <i className="fas fa-users"></i>
                    <span>TEAM</span>
                </button>
                <button onClick={handleHoursClick} className="mobile-nav-button flex items-center">
                     <ClockIcon /> MY HOURS
                 </button>
            </nav>

            {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
        </div>
    );
};

export default Navbar;