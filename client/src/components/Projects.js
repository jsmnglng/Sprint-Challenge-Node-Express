import React from 'react';
import { Link } from 'react-router-dom';


// import Project from './Project';

const Projects = props => {
  const { projects } = props;
  const project = projects.map(project => {
    return (
      <>
        <Link to={`/${project.id}`}>{project.name}</Link>
        <br /><br />
      </>
    );
  });

  return (
    <div>
      {project}
      <hr />


    </div>
  );
};

export default Projects;
