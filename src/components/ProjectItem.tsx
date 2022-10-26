import React from "react";
import { Project } from "../interfaces/Project"
import { CustomPlaceholder } from 'react-placeholder-image';

interface Props {
  projectItem: Project;
}

const ProjectItem = ({ projectItem }: Props) => {

  const getInitialLetters = () => {
    let result: string = "";
    projectItem.name.split(" ").map(word => result+=word[0]);
    return result;
  }

  return (
    <div className="wrapper">
      <div className="card">
        <div className="card__image">
          <CustomPlaceholder
              width={100}
              height={100}
              backgroundColor="#123456"
              textColor="#ffffff"
              text={getInitialLetters()}
            />
        </div>
        <div className="card__body">
          <h2 className="card__title">{projectItem.name}</h2>
          <p className="card__description">{projectItem.description}</p>
        </div>
    </div>
    </div>

  );
}

export default ProjectItem;
