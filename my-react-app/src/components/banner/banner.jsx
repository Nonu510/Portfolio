import './banner.css'

function Banner() {
  return (
    <div className="hero">
        <section className="hero-content">
          <h1 className="sr-only">Bonjour et bienvenue sur mon portfolio!<br /> Je suis <span>Nolwenn</span></h1>
          {/* <p className="subtitle">Développeur front-end</p> */}
          <p className="text"><span>Développeur front-end</span> passionnée par la création de sites web et d'applications interactives.</p>
        </section>
    </div>
  )
}

export default Banner


