import React, { ChangeEvent } from "react";
import { Project } from "../interfaces/Project";
import { useState } from 'react';

interface Props {
  page: number;
  addPage: (n: number) => void;
  project: Project;
  setProject: (p: Project) => void;
}

const ProjectInfo = ({page, addPage, project, setProject}: Props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");

  const nameChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    console.log("name")
    setEnteredName(event.currentTarget.value);
  };

  const descriptionChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    console.log("desc")

    setEnteredDescription(event.currentTarget.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setProject({ ...project, name: enteredName, description: enteredDescription });
    addPage(page + 1);
  };
  
  return(
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          maxLength={255}
          placeholder="Projekt név"
          required
          value={enteredName}
          onChange={(e) => setEnteredName(e.target.value)}
        />
        <input
            type="text"
            minLength={50}
            maxLength={500}
            placeholder="Projekt leírás"
            value={enteredDescription}
            onChange={(e) => setEnteredDescription(e.target.value)}
        />
        <button type="submit">Következő lépés</button>
      </form>
    </div>
  )
}

export default ProjectInfo;
