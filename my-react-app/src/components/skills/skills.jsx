import React from 'react';
import SkillsItem from '../skills_item/skills_item';
import './skills.scss';
import react from '../../assets/logospec/react-1-logo-svgrepo-com.svg';
import redux from '../../assets/logospec/redux-svgrepo-com.svg';
import html from '../../assets/logospec/html-5-svgrepo-com.svg';
import css from '../../assets/logospec/css3-02-svgrepo-com.svg';
import javascript from '../../assets/logospec/javascript-svgrepo-com.svg';
import nodejs from '../../assets/logospec/node-js-svgrepo-com.svg';
import mongoDB from '../../assets/logospec/mongo-svgrepo-com.svg';
import git from '../../assets/logospec/git-svgrepo-com.svg';
import github from '../../assets/logospec/github-142-svgrepo-com.svg';
import figma from '../../assets/logospec/figma-svgrepo-com.svg';
import scss from '../../assets/logospec/sass-svgrepo-com.svg';
import notion from '../../assets/logospec/notion-svgrepo-com.svg';

const Skills = () => {
  const skillsData = [
    {
      iconSrc: react,
      iconAlt: "React Icon",
      title: "React",
      description: "Projet de debugg d'une page web pour une agence d'évenmentiel"
    },
    {
      iconSrc: redux,
      iconAlt: "Redux Icon",
      title: "Redux",
      description: "Création à partir d'HTML et CSS d'une page de réservation d'hotel et de location de vacances"
    },
    {
      iconSrc: html,
      iconAlt: "HTML Icon",
      title: "HTML",
      description: "Création d'une application web de location immobilière avec React."
    },
    {
      iconSrc: css,
      iconAlt: "ArgentBank Icon",
      title: "Argent Bank",
      description: "Implémentation du Front-end d'une application bancaire avec React et Redux pour la gestion de l'état global de l'application"
    },
    {
      iconSrc: javascript,
      iconAlt: "JavaScript Icon",
      title: "JavaScript",
      description: "Optimisation du référencement du portfolio de Nina Carducci, photographe et designer."
    },
    {
      iconSrc: mongoDB,
      iconAlt: "MongoDB Icon",
      title: "MongoDB",
      description: "Utilisation de MongoDB pour la gestion des données d'une application web."
    },
    {
      iconSrc: nodejs,
      iconAlt: "Node.js Icon",
      title: "Node.js",
      description: "Création d'une API REST avec Node.js et Express pour une application web."
    },
    {
      iconSrc: git,
      iconAlt: "Git Icon",
      title: "Git",
      description: "Utilisation de Git pour le contrôle de version d'un projet web."
    },
    {
      iconSrc: github,
      iconAlt: "GitHub Icon",
      title: "GitHub",
      description: "Utilisation de GitHub pour le dépôt et le partage de code d'un projet web."
    },
    {
      iconSrc: figma,
      iconAlt: "Figma Icon",
      title: "Figma",
      description: "Utilisation de Figma pour la création de maquettes et de designs d'interfaces utilisateur."
    },
    {
      iconSrc: scss,
      iconAlt: "SCSS Icon",
      title: "SCSS",
      description: "Utilisation de SCSS pour le style et le design d'une application web."
    },
    {
      iconSrc: notion,
      iconAlt: "Notion Icon",
      title: "Notion",
      description: "Utilisation de Notion pour la gestion de documents et de projets."
    },
  ];

  return (
    <section className="projects-grid">
      {skillsData.map((skills, index) => (
        <SkillsItem
          key={index}
          iconSrc={skills.iconSrc}
          iconAlt={skills.iconAlt}
          title={skills.title}
          description={skills.description}
        />
      ))}
    </section>
  );
};

export default Skills;
