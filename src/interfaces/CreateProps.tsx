import { Project } from "./Project";

export interface CreateProps {
  offCreateHandler: () => void;
  addNewProject: (project: Project) => void;
  offFilter: () => void;
}
