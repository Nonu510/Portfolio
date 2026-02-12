import React from 'react';
import './footer.scss';

function Footer() {

  return (
    <footer className="footer">
      <div className="footer-logo">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <picture>
            <source srcSet="/Portfolio/src/assets/optimized/logo-footer.webp" type="image/webp" />
            <img src="/Portfolio/src/assets/logo_footer.png" alt="Logo" loading="lazy" />
          </picture>
        </a>
      </div>
      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/nolwenn-dubourg-224606348/" target="_blank" rel="noopener noreferrer">
          <picture>
            <source srcSet="/Portfolio/src/assets/optimized/linkedin.webp" type="image/webp" />
            <img src="/Portfolio/src/assets/linkedin.png" alt="LinkedIn" loading="lazy" />
          </picture>
        </a>
        <a href="https://github.com/nonu510" target="_blank" rel="noopener noreferrer">
          <picture>
            <source srcSet="/Portfolio/src/assets/optimized/github.webp" type="image/webp" />
            <img src="/Portfolio/src/assets/github.png" alt="GitHub" loading="lazy" />
          </picture>
        </a>
      </div>
    </footer>
  )
}

export default Footer
