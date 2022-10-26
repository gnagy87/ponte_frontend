import React from "react";
import { useState } from 'react';
import { Project } from "../interfaces/Project";
import { CreateProps } from "../interfaces/CreateProps";
import ColleagueInfo from "./ColleagueInfo";
import LinkInfo from "./LinkInfo";
import ProjectInfo from "./ProjectInfo";
import ProgressBar from "./ProgressBar"

const Create = ({ offCreateHandler, addNewProject }: CreateProps) => {
  const [page, setPage] = useState<number>(0);
  const [project, setProject] = useState<Project>({
    name: "",
    description: "", 
    colleagues: [],  
    links: []
  });

  const addPage = (number: number) => {
    setPage(number);
  };

  const componentList = [
    <ProjectInfo
      page={page}
      addPage={addPage}
      project={project}
      setProject={setProject}
    />,
    <ColleagueInfo
      page={page}
      addPage={addPage}
      project={project}
      setProject={setProject}
    />,
    <LinkInfo
      page={page}
      addPage={addPage}
      project={project}
      setProject={setProject}
    />,
  ];

  if (page === 3) {
    addNewProject(project);
    offCreateHandler();
  }

  return (
    <div className="App">
      <ProgressBar page={page}/>
      <div>{componentList[page]}</div>
    </div>
  );
}

export default Create;
