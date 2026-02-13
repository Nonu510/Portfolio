import React, { useRef, useEffect, useState } from 'react';
import SkillsItem from '../skills_item/skills_item';
import './skills.scss';

import reactIcon from '../../assets/logospec/react.svg';
import reduxIcon from '../../assets/logospec/redux-svgrepo-com.svg';
import html5Icon from '../../assets/logospec/html-5-svgrepo-com.svg';
import css3Icon from '../../assets/logospec/css3.svg';
import jsIcon from '../../assets/logospec/javascript-svgrepo-com.svg';
import nodejsIcon from '../../assets/logospec/node-js-svgrepo-com.svg';
import mongoIcon from '../../assets/logospec/mongo-svgrepo-com.svg';
import gitIcon from '../../assets/logospec/git-svgrepo-com.svg';
import githubIcon from '../../assets/logospec/github.svg';
import figmaIcon from '../../assets/logospec/figma-svgrepo-com.svg';
import scssIcon from '../../assets/logospec/sass-svgrepo-com.svg';
import notionIcon from '../../assets/logospec/notion-svgrepo-com.svg';

const skillsData = [
  { name: 'React', icon: reactIcon },
  { name: 'Redux', icon: reduxIcon },
  { name: 'HTML 5', icon: html5Icon },
  { name: 'CSS 3', icon: css3Icon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'Node.js', icon: nodejsIcon },
  { name: 'MongoDB', icon: mongoIcon },
  { name: 'Git', icon: gitIcon },
  { name: 'GitHub', icon: githubIcon },
  { name: 'Figma', icon: figmaIcon },
  { name: 'SCSS', icon: scssIcon },
  { name: 'Notion', icon: notionIcon },
];

const Skills = () => {
  const carouselRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Détecter si le carrousel est visible à l'écran
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // Se déclenche quand 30% du composant est visible
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  // Défilement automatique continu et lent
  useEffect(() => {
    let interval;
    if (isVisible && !isPaused) {
      interval = setInterval(() => {
        if (carouselRef.current) {
          carouselRef.current.scrollLeft += 1; // Vitesse : 1px par intervalle
          // Si on a défilé la moitié (la longueur originale), on remet à 0 instantanément pour une boucle infinie
          if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
            carouselRef.current.scrollLeft = 0;
          }
        }
      }, 20); // Intervalle de 20ms pour un défilement fluide et lent
    }
    return () => clearInterval(interval);
  }, [isVisible, isPaused]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -250, behavior: 'smooth' }); // Ajusté à la taille d'une carte + gap
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 250, behavior: 'smooth' });
    }
  };

  // Duplication des compétences pour créer l'effet de boucle infinie
  const extendedSkills = [...skillsData, ...skillsData];

  return (
    <div 
      className="skills-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <button type="button" className="nav-button left" onClick={scrollLeft}>&#8249;</button>
      <section 
        className="skills-carousel" 
        ref={carouselRef}
      >
        {extendedSkills.map((skill, index) => (
          <SkillsItem
            key={index}
            iconSrc={skill.icon}
            iconAlt={skill.name + " Icon"}
            title={skill.name}
          />
        ))}
      </section>
      <button type="button" className="nav-button right" onClick={scrollRight}>&#8250;</button>
    </div>
  );
};

export default Skills;
