import React from 'react';
import './footer.scss';
import logoFooterWebp from '../../assets/optimized/logo-footer.webp';
import logoFooterPng from '../../assets/optimized/logo-footer.png';
import githubWebp from '../../assets/optimized/github.webp';
import githubPng from '../../assets/optimized/github.png';
import linkedinWebp from '../../assets/optimized/linkedin.webp';
import linkedinPng from '../../assets/optimized/linkedin.png';

function Footer() {

  return (
    <footer className="footer">
      <div className="footer-logo">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <picture>
            <source srcSet={logoFooterWebp} type="image/webp" />
            <img src={logoFooterPng} alt="Logo" loading="lazy" width={126} height={126} />
          </picture>
        </a>
      </div>
      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/nolwenn-dubourg-224606348/" target="_blank" rel="noopener noreferrer">
          <picture>
            <source srcSet={linkedinWebp} type="image/webp" />
            <img src={linkedinPng} alt="LinkedIn" loading="lazy" width={80} height={76} />
          </picture>
        </a>
        <a href="https://github.com/nonu510" target="_blank" rel="noopener noreferrer">
          <picture>
            <source srcSet={githubWebp} type="image/webp" />
            <img src={githubPng} alt="GitHub" loading="lazy" width={328} height={76} />
          </picture>
        </a>
      </div>
    </footer>
  )
}

export default Footer
