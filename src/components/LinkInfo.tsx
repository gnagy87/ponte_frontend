import React, { ChangeEvent } from "react";
import { InfoProps } from "../interfaces/InfoProps";
import { useState } from 'react';

const LinkInfo = ({page, addPage, project, setProject}: InfoProps) => {
  const [enteredLink, setEnteredLink] = useState<string>("");

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
        <input className="input"
          type="text"
          placeholder="Link"
          value={enteredLink}
          onChange={(e) => enteredLinkHandler(e)}
        />
        <button className="btn" type="submit">Link hozzáadása</button>
      </form>
      <button className="btn"
        onClick={() => {
          addPage(page + 1);
        }}>
          Befejezés
        </button>
    </div>
  );
}

export default LinkInfo;
