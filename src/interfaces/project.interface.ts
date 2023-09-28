import { EProjects } from "../enums/project-list.enum";
import { EPCategory, EPLanguage, EPTool } from "../enums/project.enum";

export interface IProject {
  id : EProjects,
  tools : EPTool[],
  languages : EPLanguage[],
  categories : EPCategory[],
  date : Date,
  brief : string,
  title : string,
  imagePath : string,
}
