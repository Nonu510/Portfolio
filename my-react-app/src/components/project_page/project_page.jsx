import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { projectsData } from '../../data/projects.js';
import './project_page.scss';

const ProjectPage = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="project-page">
      {/* Banner Section */}
      <div className="project-banner">
        <img src={project.iconSrc} alt={project.iconAlt} className="banner-icon" />
        <h1 className="banner-title">{project.title}</h1>
        <p className="banner-description">{project.description}</p>
      </div>

      {/* Content Body */}
      <div className="project-content">
        {/* Row 1: Scenario (Left) - Image (Right) */}
        <div className="content-row">
          <div className="text-column">
            <h2>Scénario</h2>
            <p>{project.scenario}</p>
          </div>
          <div className="image-column">
            <div className="image-placeholder">Image Scénario</div>
          </div>
        </div>

        {/* Row 2: Details (Left) - Image (Right) */}
        <div className="content-row">
          <div className="text-column">
            <h2>Détails</h2>
            <p>{project.details || "Détails à venir..."}</p>
          </div>
          <div className="image-column">
            <div className="image-placeholder">Image Détail</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;