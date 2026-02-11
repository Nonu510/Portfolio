import './header.scss'
import logoHeader from '../../assets/logo_header.png'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const timer = setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (e, id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className='header' id='header'>
        <div className='header_logo'>
        <img src={logoHeader} alt="Logo Header" />
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
