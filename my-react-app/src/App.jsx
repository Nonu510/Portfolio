import React from 'react'
import './App.css'
import './styles.css'
import Banner from './components/banner/banner.jsx'
import Project from './components/project/project.jsx'
import ProjectItem from './components/project_item/project_item.jsx';

function App() {

  return (
    <>
      <div className='banner' id='home'>
        <Banner />
      </div>
      <div className='main-content'>
        <div className='about' id='about'>
          <h2>À propos de moi</h2>
          <p>Bienvenue sur mon portfolio ! Je m'appelle Nolwenn Dubourg et je suis développeur front-end. J'adore transformer des idées en expériences numériques attrayantes et fonctionnelles. </p>
        </div>
        <div className='projects' id='projects'>
          <h2>Projets</h2>
            <Project />
        </div>
        <div className='skills' id='skills'>
          <h2>Compétences</h2>
            <h3>HTML</h3>
            <h3>CSS</h3>
            <h3>JavaScript</h3>
            <h3>React</h3>
            <h3>Node.js</h3>
            <h3>MongoDB</h3>
            <h3>Git</h3>
            <h3>Figma</h3>
            <h3>SCSS</h3>
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
