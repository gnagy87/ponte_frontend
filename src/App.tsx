import "./App.css"
import React from 'react';
import { useState, useEffect } from 'react';
import { Project } from './interfaces/Project';
import Projects from './components/Projects';
import Create from './components/Create';
import { useAsync } from "react-async";

const DUMMY_PROJECTS: Array<Project> = [
    {
      name: "projekt1", 
      description: "description description description description description", 
      colleagues: [
        {
          name: "colleague1",
          position: "position1"
        }
      ],  
      links: ["link1"]
    },
    {
      name: "projekt2", 
      description: "description description description description description", 
      colleagues: [
        {
          name: "colleague2",
          position: "position2"
        }
      ],  
      links: ["link2"]
    },
    {
      name: "projekt3", 
      description: "description description description description description", 
      colleagues: [
        {
          name: "colleague3",
          position: "position3"
        }
      ],  
      links: ["link3"]
    },
    {
      name: "projekt4", 
      description: "description description description description description", 
      colleagues: [
        {
          name: "colleague4",
          position: "position4"
        }
      ],  
      links: ["link4"]
    }
];


function App() {
  const [projects, setProjects] = useState<Array<Project>>([]);
  const [onCreate, setOnCreate] = useState<boolean>(false);

  const getProjects = async () => {
    setProjects(DUMMY_PROJECTS)
  }

  useEffect(() => {getProjects()}, []);

  const onCreateHandler = () => {
    setOnCreate(true);
  };

  const offCreateHandler = () => {
    setOnCreate(false);
  };

  const addNewProject = (project: Project) => {
    setProjects(prevProjects => [...prevProjects, project])
  };

  return (
    <div>
      {!onCreate && <button onClick={onCreateHandler}>Új projekt</button>}
      {!onCreate && <Projects projects={projects}/>}
      {onCreate && <Create offCreateHandler={offCreateHandler} addNewProject={addNewProject}/>}
    </div>
  );
}

export default App;
