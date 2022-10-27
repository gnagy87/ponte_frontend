import React from "react";
import { useState } from 'react';

interface Props {
  filterProjects: (searched: string) => void;
}

const ProjectFilter = ({ filterProjects }: Props) => {
  const [enteredValue, setEnteredValue] = useState<string>("");
  
  const valueChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setEnteredValue(event.currentTarget.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    filterProjects(enteredValue);
  };

  return(
    <div>
      <form onSubmit={submitHandler}>
        <input className="input"
          type="text"
          value={enteredValue}
          onChange={(e) => valueChangeHandler(e)}
        />
        <button className="btn" type="submit">Keresés</button>
      </form>
    </div>
  );
}

export default ProjectFilter;
