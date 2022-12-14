import "./App.css"
import React from 'react';
import { useState, useEffect } from 'react';
import { Project } from './interfaces/Project';
import { filterProjectsByGivenWord } from "./services/FilterService";
import ProjectFilter from './components/ProjectFilter';
import Projects from './components/Projects';
import Create from './components/Create';

const DUMMY_PROJECTS: Array<Project> = [
    {
      name: "First project", 
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
      name: "Second project", 
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
      name: "Third project", 
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
      name: "Fourth project", 
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
  const [filteredProjects, setFilteredProjects] = useState<Array<Project>>([]);
  const [onCreate, setOnCreate] = useState<boolean>(false);
  const [filter, setFilter] = useState<boolean>(false);

  const onCreateHandler = () => {
    setOnCreate(true);
  };

  const offCreateHandler = () => {
    setOnCreate(false);
  };

  const offFilter = () => {
    setFilter(false);
  }

  const getProjects = async () => {
    setProjects(DUMMY_PROJECTS)
  };

  useEffect(() => {getProjects()}, []);

  const filterProjects = (searched: string) => {
    if (searched === null || searched === undefined || searched === "") {
      setFilteredProjects([]);
      setFilter(false);
    } else {
      setFilteredProjects(filterProjectsByGivenWord(projects, searched));
      setFilter(true);
    }
  }

  const addNewProject = (project: Project) => {
    setProjects(prevProjects => [...prevProjects, project])
  };

  return (
    <div>
      {!onCreate && <button className="btn" onClick={onCreateHandler}>??j projekt</button>}
      {!onCreate && <ProjectFilter filterProjects={filterProjects}/>}
      {!onCreate && <Projects projects={filter ? filteredProjects : projects}/>}
      {onCreate && <Create offCreateHandler={offCreateHandler} addNewProject={addNewProject} offFilter={offFilter}/>}
    </div>
  );
}

export default App;
