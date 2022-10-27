import { DetailsProps } from "../interfaces/DetailsProps"
import ProjectDetails from "./ProjectDetails";

const Details = ({ projectItem, handleClose }: DetailsProps) => {
  return(
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={handleClose}>x</span>
          <ProjectDetails projectItem={projectItem}/>
        </div>
      </div>
  );
}

export default Details;
