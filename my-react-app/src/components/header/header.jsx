import './header.css'
import logoHeader from '../../assets/logo_header.png'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function Header() {
  const location = useLocation();

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

  const scrollToSection = (e, id) => {
    const element = document.getElementById(id);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className='header' id='header'>
        <div className='header_logo'>
        <img src={logoHeader} alt="Logo Header" />
        </div>
        <div className='header_menu'>
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
      </div>
      
    </>
  )
}

export default Header
