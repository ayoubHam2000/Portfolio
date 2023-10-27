import { PhotoWebServerMain } from "../../assets/images";
import { EProjects } from "../../enums/project-list.enum";
import { EPCategory, EPLanguage } from "../../enums/project.enum";
import { IProject } from "../../interfaces/project.interface";

export const WebServer : IProject = {
  id : EProjects.WebServer,
  title : "WebServer",
  imagePath : PhotoWebServerMain,
  date : new Date("2020"),
  brief : "Implementing an HTTP/1.1 WebServer from scratch using c++.",
  githubLink : "https://github.com/ayoubHam2000/web_server",
  categories : [
    EPCategory.ObjectOrientedProgramming,
    EPCategory.Rigor,
    EPCategory.Unix,
    EPCategory.NetworkSystemAdministration
  ],
  tools : [

  ],
  languages : [
    EPLanguage.Cpp
  ],
}
