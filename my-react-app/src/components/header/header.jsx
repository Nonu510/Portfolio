import './header.scss';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import logoHeaderWebp from '../../assets/optimized/logo-header.webp';
import logoHeaderPng from '../../assets/optimized/logo-header.png';

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Optimize scroll without reflow - use scroll behavior in CSS
  useEffect(() => {
    if (location.hash) {
      const timer = setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          // Use requestAnimationFrame to batch reflow
          requestAnimationFrame(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const scrollToSection = useCallback((e, id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      e.preventDefault();
      // Use requestAnimationFrame to batch reflow
      requestAnimationFrame(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, []);

  return (
    <>
      <header className='header' id='header'>
        <div className='header_logo'>
          <picture>
            <source srcSet={logoHeaderWebp} type="image/webp" />
            <img 
              src={logoHeaderPng}
              alt="Logo Header"
              loading="lazy"
              width={126}
              height={126}
            />
          </picture>
        </div>
        <button 
          type="button" 
          className={`navbar-toggle ${isMenuOpen ? '' : 'collapsed'}`} 
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">MENU</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <div className={`header_menu ${isMenuOpen ? 'open' : ''}`}>
          <nav>
            <ul>
              <li><Link to="/#home" onClick={(e) => scrollToSection(e, 'home')}>Accueil</Link></li>
              <li><Link to="/#about" onClick={(e) => scrollToSection(e, 'about')}>À propos</Link></li>
              <li><Link to="/#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projets</Link></li>
              <li><Link to="/#skills" onClick={(e) => scrollToSection(e, 'skills')}>Compétences</Link></li>
              <li><Link to="/#education" onClick={(e) => scrollToSection(e, 'education')}>Formation</Link></li>
              <li><Link to="/#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      
    </>
  )
}

export default Header
