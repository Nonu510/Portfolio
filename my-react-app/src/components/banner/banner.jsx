import './banner.scss'

function Banner() {
  return (
    <div className="hero">
        {/* Image LCP - Discoverable in HTML with fetchpriority */}
        <picture className="hero-image">
          <source srcSet="/Portfolio/src/assets/optimized/baniere.webp" type="image/webp" />
          <img 
            src="/Portfolio/src/assets/baniere.webp" 
            alt="Bienvenue sur mon portfolio Je suis Nolwenn Développeur front-end passionnée"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <section className="hero-content">
          <h1 className="sr-only">Bienvenue sur mon portfolio</h1>
          <p className="subtitle">Je suis <span>Nolwenn</span></p>
          <p className="text"><span>Développeur front-end</span> passionnée par la création de sites web et d'applications interactives.</p>
        </section>
    </div>
  )
}

export default Banner


