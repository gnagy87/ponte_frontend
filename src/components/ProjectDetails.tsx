import { Project } from "../interfaces/Project";
import ColleagueDetails from "./ColleagueDetails";

interface Props {
  projectItem: Project
}

const ProjectDetails = ({ projectItem }: Props) => {
  return(
    <div>
        <h2>Projekt neve: {projectItem.name}</h2>
        {projectItem.description !== null && projectItem.description !== undefined 
          && projectItem.description.length > 0 && <h3>Projekt leírása:</h3>}
        <p>{projectItem.description}</p>
        {
          projectItem.colleagues !== null && projectItem.colleagues.length > 0 &&
          <h3>Projekten dolgozó munkatársak:</h3>
        }
        {projectItem.colleagues?.map(c => <ColleagueDetails colleague={c}/>)}
        {
          projectItem.links !== null && projectItem.links.length > 0 &&
          <h3>Linkek:</h3>
        }
        {
          projectItem.links?.map(l => <p>{l}</p>)
        }
    </div>
    );
}

export default ProjectDetails;
