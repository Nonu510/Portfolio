import React from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className='banner'>
        <h1>DUBOURG Nolwenn</h1>
        <h2>Développeur front-end</h2>
        <p>Je suis passionnée par la création de sites web et d'applications interactives.</p>
      </div>
      <div className='about'>
        <h2>À propos de moi</h2>
        <p>Bienvenue sur mon portfolio ! Je m'appelle Nolwenn Dubourg et je suis développeur front-end. J'adore transformer des idées en expériences numériques attrayantes et fonctionnelles. </p>
      </div>
      <div className='projects'>
        <h2>Projets</h2>
          <h3>Projet 1</h3>
          <h3>Projet 2</h3>
          <h3>Projet 3</h3>
      </div>
      <div className='skills'>
        <h2>Compétences</h2>
          <h3>HTML</h3>
          <h3>CSS</h3>
          <h3>JavaScript</h3>
          <h3>React</h3>
          <h3>Node.js</h3>
          <h3>MongoDB</h3>
          <h3>Git</h3>
          <h3>Figma</h3>
      </div>
      <div className='education'>
        <h2>Formation</h2>
          <h3>Baccalauréat scientifique</h3>
          <h3>BTS électrotechnique</h3>
          <h3>Intégrateur Web (openclassrooms)</h3>
      </div>
      <div className='contact'>
        <h2>Contact</h2>
      </div>
    </>
  )
}

export default App
