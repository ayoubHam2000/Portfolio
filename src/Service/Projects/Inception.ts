import { PhotoInceptionMain } from "../../assets/images";
import { EProjects } from "../../enums/project-list.enum";
import { EPCategory, EPTool } from "../../enums/project.enum";
import { IProject } from "../../interfaces/project.interface";

export const Inception : IProject = {
  id : EProjects.Inception,
  title : "Inception",
  imagePath : PhotoInceptionMain,
  date : new Date("2020"),
  brief : "This DevOps project involves the creation and configuration of multiple containers using a stable Debian operating system as the base image.",
  githubLink : "https://github.com/ayoubHam2000/Inception",
  categories : [
    EPCategory.NetworkSystemAdministration,
    EPCategory.DevOps
  ],
  tools : [
    EPTool.Docker
  ],
  languages : [
  ],
}
