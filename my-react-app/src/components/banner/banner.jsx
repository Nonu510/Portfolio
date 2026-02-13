
import './banner.scss';
import banner from '../../assets/optimized/baniere.webp';

function Banner() {
  return (
    <div className="hero">
      {/* Image LCP - Discoverable in HTML with fetchpriority */}
      <picture className="hero-image">
        <source srcSet={banner} type="image/webp" />
        <img
          src={banner}
          alt="Bienvenue sur mon portfolio Je suis Nolwenn Développeur front-end passionnée"
          fetchPriority="high"
          decoding="async"
          width={768}
          height={306}
        />
      </picture>
      <section className="hero-content">
        <h1 className="sr-only">Bienvenue sur mon portfolio</h1>
        <p className="subtitle">Je suis <span>Nolwenn</span></p>
        <p className="text"><span>Développeur front-end</span> passionnée par la création de sites web et d'applications interactives.</p>
      </section>
    </div>
  );
}

export default Banner;


