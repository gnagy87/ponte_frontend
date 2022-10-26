import React from "react";
import { useState } from 'react';
import { Project } from "../interfaces/Project";
import ColleagueInfo from "./ColleagueInfo";
import LinkInfo from "./LinkInfo";
import ProjectInfo from "./ProjectInfo";
import ProgressBar from "./ProgressBar"

interface Props {
  offCreateHandler: () => any;
  addNewProject: (project: Project) => void;
}

const Create = ({ offCreateHandler, addNewProject }: Props) => {
  const [page, setPage] = useState<number>(0);
  const [project, setProject] = useState<Project>({
    name: "",
    description: "", 
    colleagues: [],  
    links: []
  });

  const addPage = (number: number) => {
    setPage(number);
  }

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

  console.log("page: " + page)
  console.log("actual project: " + project);

  if (page === 3) {
    addNewProject(project);
    //setPage(0);
    offCreateHandler();
  }

  return (
    <div className="App">
      <ProgressBar page={page}/>
      <div className="body">{componentList[page]}</div>
    </div>
  );
}

export default Create;
