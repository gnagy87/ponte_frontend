import { Project } from "./Project";

export interface CreateProps {
  offCreateHandler: () => any;
  addNewProject: (project: Project) => void;
}
