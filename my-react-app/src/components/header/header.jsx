import './header.css'
import logoHeader from '../../assets/logo_header.png'

function Header() {

  return (
    <>
      <div className='header'>
        <div className='header_logo'>
        <img src={logoHeader} alt="Logo Header" />
        </div>
        <div className='header_menu'>
          <nav>
            <ul>
              <li><a href="#home">Accueil</a></li>
              <li><a href="#about">À propos</a></li>
              <li><a href="#projects">Projets</a></li>
              <li><a href="#skills">Compétences</a></li>
              <li><a href="#education">Formation</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
      
    </>
  )
}

export default Header
