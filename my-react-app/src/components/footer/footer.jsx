import React from 'react';
import './footer.scss';
import logo from '../../assets/logo_footer.png';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';

function Footer() {

  return (
    <footer className="footer">
      <div className="footer-logo">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/nolwenn-dubourg-224606348/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
        <a href="https://github.com/nonu510" target="_blank" rel="noopener noreferrer"><img src={github} alt="GitHub" /></a>
      </div>
    </footer>
  )
}

export default Footer
