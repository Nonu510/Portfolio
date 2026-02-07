import React from 'react';
import './footer.scss';
import logo from '../../assets/logo_footer.png';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/votre-profil" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
        <a href="https://github.com/votre-pseudo" target="_blank" rel="noopener noreferrer"><img src={github} alt="GitHub" /></a>
      </div>
    </footer>
  )
}

export default Footer
