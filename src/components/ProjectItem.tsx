import React from "react";
import { Project } from "../interfaces/Project"

interface Props {
  projectItem: Project;
}

const ProjectItem = ({ projectItem }: Props) => {
  return (
    <div className="wrapper">
      <div className="card">
        <div className="card__body">
          <h2 className="card__title">{projectItem.name}</h2>
          <p className="card__description">{projectItem.description}</p>
        </div>
    </div>

    </div>

  );
}

export default ProjectItem;
