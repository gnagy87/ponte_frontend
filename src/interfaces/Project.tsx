import { Colleague } from "./Colleague";

export interface Project { 
  name: string;
  description: string;
  colleagues: Array<Colleague> | null;
  links: Array<string> | null;
}
