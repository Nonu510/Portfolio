import React, { useRef, useEffect, useState } from 'react';
import SkillsItem from '../skills_item/skills_item';
import './skills.scss';
import react from '../../assets/logospec/react.svg';
import redux from '../../assets/logospec/redux-svgrepo-com.svg';
import html from '../../assets/logospec/html-5-svgrepo-com.svg';
import css from '../../assets/logospec/css3.svg';
import javascript from '../../assets/logospec/javascript-svgrepo-com.svg';
import nodejs from '../../assets/logospec/node-js-svgrepo-com.svg';
import mongoDB from '../../assets/logospec/mongo-svgrepo-com.svg';
import git from '../../assets/logospec/git-svgrepo-com.svg';
import github from '../../assets/logospec/github.svg';
import figma from '../../assets/logospec/figma-svgrepo-com.svg';
import scss from '../../assets/logospec/sass-svgrepo-com.svg';
import notion from '../../assets/logospec/notion-svgrepo-com.svg';

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

  const skillsData = [
    {
      iconSrc: react,
      iconAlt: "React Icon",
      title: "React",
    },
    {
      iconSrc: redux,
      iconAlt: "Redux Icon",
      title: "Redux",
    },
    {
      iconSrc: html,
      iconAlt: "HTML Icon",
      title: "HTML",
    },
    {
      iconSrc: css,
      iconAlt: "ArgentBank Icon",
      title: "Argent Bank",
    },
    {
      iconSrc: scss,
      iconAlt: "SCSS Icon",
      title: "SCSS",
    },
    {
      iconSrc: javascript,
      iconAlt: "JavaScript Icon",
      title: "JavaScript",
    },
    {
      iconSrc: mongoDB,
      iconAlt: "MongoDB Icon",
      title: "MongoDB",
    },
    {
      iconSrc: github,
      iconAlt: "GitHub Icon",
      title: "GitHub",
    },
    {
      iconSrc: git,
      iconAlt: "Git Icon",
      title: "Git",
    },
    {
      iconSrc: notion,
      iconAlt: "Notion Icon",
      title: "Notion",
    },
    {
      iconSrc: nodejs,
      iconAlt: "Node.js Icon",
      title: "Node.js",
    },   
    {
      iconSrc: figma,
      iconAlt: "Figma Icon",
      title: "Figma",
    },  
  ];

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
        {extendedSkills.map((skills, index) => (
          <SkillsItem
            key={index}
            iconSrc={skills.iconSrc}
            iconAlt={skills.iconAlt}
            title={skills.title}
          />
        ))}
      </section>
      <button type="button" className="nav-button right" onClick={scrollRight}>&#8250;</button>
    </div>
  );
};

export default Skills;
