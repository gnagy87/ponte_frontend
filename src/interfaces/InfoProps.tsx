import { Project } from "./Project";

export interface InfoProps {
  page: number;
  addPage: (n: number) => void;
  project: Project;
  setProject: (p: Project) => void;
}
