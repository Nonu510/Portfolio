import './header.css'
import logoHeader from '../../assets/logo_header.png'

function Header() {

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className='header'>
        <div className='header_logo'>
        <img src={logoHeader} alt="Logo Header" />
        </div>
        <div className='header_menu'>
          <nav>
            <ul>
              <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Accueil</a></li>
              <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>À propos</a></li>
              <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projets</a></li>
              <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Compétences</a></li>
              <li><a href="#education" onClick={(e) => scrollToSection(e, 'education')}>Formation</a></li>
              <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
      
    </>
  )
}

export default Header
