import { PhotoCub3dMain } from "../../assets/images";
import { EProjects } from "../../enums/project-list.enum";
import { EPCategory, EPLanguage } from "../../enums/project.enum";
import { IProject } from "../../interfaces/project.interface";

export const Cub3d : IProject = {
  id : EProjects.Cub3d,
  title : "Cub3d",
  imagePath : PhotoCub3dMain,
  date : new Date("2020"),
  brief : "3D game draws inspiration from the iconic first-person shooter game, Wolfenstein 3D. \n It introduces the concept of raycasting in computer graphics and strives to implement it using mathematical knowledge, including vectors and matrices.",
  githubLink : "https://github.com/ayoubHam2000/cub3d",
  categories : [
    EPCategory.Graphics,
    EPCategory.GameDev,
    EPCategory.Rigor
  ],
  tools : [

  ],
  languages : [
    EPLanguage.C
  ],
}
