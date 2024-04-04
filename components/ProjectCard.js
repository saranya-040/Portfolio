import React from 'react';
import './ProjectCard.css';
import datavisualization from './datavisualization.jpg';
import appointment from './appointment.jpg'; 

const ProjectCard = () => {
  return (
    <div>
      <div className="project-card">
        <h1>Data Visualization</h1>
        <img src={datavisualization} alt="Data Visualization" />
        <p>This project takes student names and marks as input and visualizes the marks as a Bargraph and Piechart so that the comparison of the marks will be identified easily.</p>
      </div>

      <div className="project-card">
        <h1>Doctor Appointment</h1>
        <img src={appointment} alt="Appointment" />
        <p>This project is used for patients to make appointments in hospital. They can select doctor by their profession, time they wants.</p>
      </div>
    </div>
  );
}

export default ProjectCard;
