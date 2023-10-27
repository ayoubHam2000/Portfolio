import { PhotoNetPracticeMain } from "../../assets/images";
import { EProjects } from "../../enums/project-list.enum";
import { EPCategory } from "../../enums/project.enum";
import { IProject } from "../../interfaces/project.interface";

export const NetPractice : IProject = {
  id : EProjects.NetPractice,
  title : "NetPractice",
  imagePath : PhotoNetPracticeMain,
  date : new Date("2020"),
  brief : "Using a graphical simulator to interconnect different hosts, this project introduce the fundamentals of network management. By exploring the roles of routers, switches, and gaining insights into how IPv4 functions.",
  githubLink : "./",
  categories : [
    EPCategory.NetworkSystemAdministration,
  ],
  tools : [

  ],
  languages : [
    
  ],
}
