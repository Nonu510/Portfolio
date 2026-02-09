import React from 'react'
import './App.css'
import './styles.css'
import Banner from './components/banner/banner.jsx'
import Project from './components/project/project.jsx'
import Skills from './components/skills/skills.jsx'

function App() {

  return (
    <>
      <div className='banner' id='home'>
        <Banner />
      </div>
      <div className='main-content'>
        <div className='about' id='about'>
          <h2>À propos de moi</h2>
          <p>Je m'appelle <span>Nolwenn Dubourg</span> et je suis <span>développeur front-end</span> sur Caen.<br />
            J'adore transformer des idées en expériences numériques <span>attrayantes et fonctionnelles</span>.<br />
            Toujours en recherche de nouveaux <span>challenges</span> et <span>d'apprentissage continu</span>.</p>
        </div>
        <div className='projects' id='projects'>
          <h2>Projets</h2>
            <Project />
        </div>
        <div className='skills' id='skills'>
          <h2>Compétences et outils</h2>
          <Skills />
        </div>
          <div className='education' id='education'>
            <h2>Formation</h2>
              <h3>Baccalauréat scientifique</h3>
              <h3>BTS électrotechnique</h3>
              <h3>Intégrateur Web (openclassrooms)</h3>
          </div>
          <div className='contact' id='contact'>
            <h2>Contact</h2>
          </div>
      </div>
    </>
  )
}

export default App
