import React, { ChangeEvent } from "react";
import { Project } from "../interfaces/Project";
import { useState } from 'react';

interface Props {
  page: number;
  addPage: (n: number) => void;
  project: Project;
  setProject: (p: Project) => void;
}

const LinkInfo = ({page, addPage, project, setProject}: Props) => {
  const [enteredLink, setEnteredLink] = useState("");

  const enteredLinkHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setEnteredLink(event.currentTarget.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (project.links == null) {
      setProject({ ...project, links: [enteredLink]});
    } else {
      setProject({ ...project, links: [ ...project.links, enteredLink]});
    }
    setEnteredLink("");
    setEnteredLink("");
  };

  return(
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Link"
          value={enteredLink}
          onChange={(e) => enteredLinkHandler(e)}
        />
        <button type="submit">Link hozzáadása</button>
      </form>
      <button
        onClick={() => {
          addPage(page + 1);
        }}>
          Befejezés
        </button>
    </div>
  )
}

export default LinkInfo;
