import React from "react";
import { Project } from "../interfaces/Project"
import ProjectItem from "./ProjectItem";

interface Props {
  projects: Array<Project> | [] | null;
}

const Projects = ({projects}: Props) => {

  if (projects === null) {
    projects = [];
  }

  return (
      <div>
        {projects.map(projectItem => <ProjectItem projectItem={projectItem}/>)}
      </div>
  );
}

export default Projects;
