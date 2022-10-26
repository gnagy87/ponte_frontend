import { Colleague } from "../interfaces/Colleague";
import { Project } from "../interfaces/Project";

export function filterProjectsByGivenWord(projects: Array<Project>, searched: string): Array<Project> {
  return projects.filter(p => hasValueInString(p.name, searched) || hasValueInString(p.description, searched)
    || hasValueInList(p.links, searched) || hasValueInColleagues(p.colleagues, searched));
}

const hasValueInColleagues = (colleagues: Array<Colleague> | null, searched: string) => {
  return colleagues !== null && colleagues !== undefined && colleagues.filter(c => hasValueInString(c.name, searched) || hasValueInString(c.position, searched)).length > 0;
}

const hasValueInString = (value: string | null, searched: string) => {
  return value !== null && value !== undefined && value.includes(searched);
}

const hasValueInList = (links: Array<string> | null, searched: string) => {
  return links !== null && links !== undefined && links.includes(searched);
}
