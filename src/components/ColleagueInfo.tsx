import React from "react";

interface Props {
  page: number;
  addPage: (n: number) => void;
}

const ColleagueInfo = ({page, addPage}: Props) => {
  
  return(
    <div>
      <input
        type="text"
        placeholder="Kolléga"
        //value={formData.fullName}
        //onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
      />
      <input
          type="text"
          placeholder="Pozíció"
          //value={formData.username}
          //onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <button
        onClick={() => {
          addPage(page + 1);
        }}>
          Következő lépés
        </button>
    </div>
  )
}

export default ColleagueInfo;
