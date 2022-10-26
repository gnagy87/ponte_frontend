import React, { ChangeEvent } from "react";
import { InfoProps } from "../interfaces/InfoProps";
import { useState } from 'react';

const ProjectInfo = ({page, addPage, project, setProject}: InfoProps) => {
  const [enteredName, setEnteredName] = useState<string>("");
  const [enteredDescription, setEnteredDescription] = useState<string>("");

  const nameChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setEnteredName(event.currentTarget.value);
  };

  const descriptionChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setEnteredDescription(event.currentTarget.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setProject({ ...project, name: enteredName, description: enteredDescription });
    setEnteredName("");
    setEnteredDescription("");
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
          onChange={(e) => nameChangeHandler(e)}
        />
        <input
            type="text"
            minLength={50}
            maxLength={500}
            placeholder="Projekt leírás"
            value={enteredDescription}
            onChange={(e) => descriptionChangeHandler(e)}
        />
        <button type="submit">Következő lépés</button>
      </form>
    </div>
  );
}

export default ProjectInfo;
