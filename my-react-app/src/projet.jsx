import React from 'react';
import { Link } from 'react-router-dom';
import ProjectItem from '../project_item/project_item.jsx';
import './project.scss';
import { projectsData } from '../../data/projects';

const Projet = () => {
  return (
    <section className="projects-grid">
      {projectsData.map((project) => (
        <Link to={`/project/${project.id}`} key={project.id} style={{ textDecoration: 'none', color: 'inherit', display: 'contents' }}>
          <ProjectItem
            iconSrc={project.iconSrc}
            iconAlt={project.iconAlt}
            title={project.title}
            description={project.description}
          />
        </Link>
      ))}
    </section>
  );
};

export default Projet;
