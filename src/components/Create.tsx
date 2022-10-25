import React from "react";
import { useState } from 'react';
import { Project } from "../interfaces/Project";
import ColleagueInfo from "./ColleagueInfo";
import LinkInfo from "./LinkInfo";
import ProjectInfo from "./ProjectInfo";

interface Props {
  offCreateHandler: () => any;
  addNewProject: (project: Project) => void;
}

const Create = ({ offCreateHandler, addNewProject }: Props) => {
  const [page, setPage] = useState(0);
  const [project, setProject] = useState<Project>({
    name: "",
    description: "", 
    colleagues: [],  
    links: []
  });

  console.log(project)

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
    />,
    <LinkInfo
      page={page}
      addPage={addPage}
    />,
  ];

  if (page === 3) {
    offCreateHandler();
  }

  return (
    <div className="App">
      <div className="progress-bar">
        {
          <div
            style={{
              width:
                page === 0
                  ? "25%"
                  : page === 1
                  ? "50"
                  : page === 2
                  ? "75%"
                  : "100%"
            }}
          ></div>
        }
      </div>
      <div className="body">{componentList[page]}</div>
    </div>
  );
}

export default Create;
