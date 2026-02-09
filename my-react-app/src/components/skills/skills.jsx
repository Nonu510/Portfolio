import React from 'react';
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

  return (
    <section className="projects-grid">
      {skillsData.map((skills, index) => (
        <SkillsItem
          key={index}
          iconSrc={skills.iconSrc}
          iconAlt={skills.iconAlt}
        //   title={skills.title}
        />
      ))}
    </section>
  );
};

export default Skills;
