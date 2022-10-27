import React, { ChangeEvent } from "react";
import { InfoProps } from "../interfaces/InfoProps";
import { useState } from 'react';

const ColleagueInfo = ({page, addPage, project, setProject}: InfoProps) => {
  const [enteredName, setEnteredName] = useState<string>("");
  const [enteredPosition, setEnteredPosition] = useState<string>("");

  const nameChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setEnteredName(event.currentTarget.value);
  };

  const positionChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setEnteredPosition(event.currentTarget.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (project.colleagues === null) {
      setProject({ ...project, colleagues: [{name: enteredName, position: enteredPosition}]});
    } else {
      setProject({ ...project, colleagues: [ ...project.colleagues, {name: enteredName, position: enteredPosition}]});
    }
    setEnteredName("");
    setEnteredPosition("");
  };

  return(
    <div>
      <form onSubmit={submitHandler}>
        <input className="input"
          type="text"
          placeholder="Kolléga"
          value={enteredName}
          onChange={(e) => nameChangeHandler(e)}
        />
        <input className="input"
            type="text"
            placeholder="Pozíció"
            value={enteredPosition}
            onChange={(e) => positionChangeHandler(e)}
        />
      <button className="btn" type="submit">Kolléga hozzáadása</button>
      </form>
      <button className="btn"
          onClick={() => {addPage(page + 1);}}>
            Következő lépés
      </button>
    </div>
  );
}

export default ColleagueInfo;
