import React from "react";

interface Props {
  page: number;
  addPage: (n: number) => void;
}

const LinkInfo = ({page, addPage}: Props) => {

  return(
    <div>
      <input
        type="text"
        placeholder="Link"
        //value={formData.fullName}
        //onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
      />
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
