import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css'; 
import { Outlet, Link } from 'react-router-dom';
// import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageRTL, setIsLanguageRTL] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) { 
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const lang = i18n.language;
    setIsLanguageRTL(lang === 'ar');
  }, [i18n.language]);

  const switchLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <header className={isScrolled ? "Header HeaderScrolled" : "Header"}>
      <div className={`Logo ${isLanguageRTL ? 'LogoRTL' : ''} ${isLanguageRTL && isScrolled ? 'LogoRTLScrolled' : isScrolled ? 'LogoScrolled' : ''}`}>
      </div>
      <nav  className={`NavBar ${isLanguageRTL ? 'NavBarRTL' : ''} ${isLanguageRTL && isScrolled ? 'NavBarRTLScrolled' : isScrolled ? 'NavBarScrolled' : ''}`}>

      <ul className="MenuNavigation">
      <li
        className={`MenuNavigation-Item ${hoveredIndex >= 1  ? 'move-right' : ''}`}
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
      >
        <Link to="/">{t('navbar.ourProduct')}</Link>
      </li>
      <li
        className={`MenuNavigation-Item ${hoveredIndex >= 2 ? 'move-right' : ''}`}
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
      >
        <Link to="/">{t('navbar.howItWorks')}</Link>
      </li>
        <li   className={`MenuNavigation-Item ${hoveredIndex >= 3 ? 'move-right' : ''}`}
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={handleMouseLeave}
      ><Link to="/">{t('navbar.features')}</Link></li>
        <li  className={`MenuNavigation-Item ${hoveredIndex >= 4 ? 'move-right' : ''}`}
        onMouseEnter={() => handleMouseEnter(4)}
        onMouseLeave={handleMouseLeave}><Link to="/">{t('navbar.partners')}</Link></li>
        <li  className={`MenuNavigation-Item ${hoveredIndex >= 5 ? 'move-right' : ''}`}
        onMouseEnter={() => handleMouseEnter(5)}
        onMouseLeave={handleMouseLeave}><Link to="/">{t('navbar.stories')}</Link></li>
        <li  className={`MenuNavigation-Item ${hoveredIndex >= 6 ? 'move-right' : ''}`}
        onMouseEnter={() => handleMouseEnter(6)}
        onMouseLeave={handleMouseLeave}><Link to="/Partner">{t('navbar.becomePartner')}</Link></li>
        <li  className={`MenuNavigation-Item ${hoveredIndex >= 7 ? 'move-right' : ''}`}
        onMouseEnter={() => handleMouseEnter(7)}
        onMouseLeave={handleMouseLeave}><Link to="/Contact">{t('navbar.contactUs')}</Link></li>
        <li className="MenuNavigation-Item"><a href="#" onClick={() => switchLanguage(i18n.language === 'en' ? 'ar' : 'en')}>{t('navbar.language')}</a></li>
        </ul>
      </nav>
      <Outlet />
    </header>
  );
}

export default Navbar;
