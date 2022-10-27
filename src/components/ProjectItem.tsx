import React from "react";
import { Project } from "../interfaces/Project"
import { CustomPlaceholder } from 'react-placeholder-image';
import { useState } from 'react';
import Details from "./Details";

interface Props {
  projectItem: Project;
}

const ProjectItem = ({ projectItem }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const getInitialLetters = () => {
    let result: string = "";
    projectItem.name.split(" ").map(word => result+=word[0]);
    return result.toUpperCase();
  }

  return (
    <div className="card" onClick={() => togglePopup()}>
      <div>
        <CustomPlaceholder
          width={100}
          height={100}
          backgroundColor="#123456"
          textColor="#ffffff"
          text={getInitialLetters()}
        />
      </div>
      <div>
        <h2 className="card__title">{projectItem.name}</h2>
        <p className="card__description">{projectItem.description}</p>
      </div>
      {isOpen && <Details projectItem={projectItem} handleClose={togglePopup}/>}
    </div>
  );
}

export default ProjectItem;
