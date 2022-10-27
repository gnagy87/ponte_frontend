import React from "react";

interface Props {
  page: number;
}

const ProgressBar = ({page}: Props) => {

  return(      
    <div className="progress-bar">
      <div style={{
        width: 
          page === 0
            ? "33%"
            : page === 1
              ? "66%"
              : page === 2
                ? "100%"
                : "100%"
      }}></div>
    </div>
  );
}

export default ProgressBar;
