import { PhotoContainerMain } from "../../assets/images";
import { EProjects } from "../../enums/project-list.enum";
import { EPCategory, EPLanguage } from "../../enums/project.enum";
import { IProject } from "../../interfaces/project.interface";

export const Container : IProject = {
  id : EProjects.Container,
  title : "Container",
  imagePath : PhotoContainerMain,
  date : new Date("2020"),
  brief : "This project is truly remarkable as it delves into numerous challenges of the C++ language, providing you with an exceptional opportunity to explore it in-depth, by reimplementing vector, map, set, stack containers from scratch, this project successfully recreates nearly all of the functionalities found in the C++98 STL counterparts.",
  githubLink : "https://github.com/ayoubHam2000/ft_containers",
  categories : [
    EPCategory.ObjectOrientedProgramming,
    EPCategory.Rigor,
    EPCategory.Algorithms
  ],
  tools : [

  ],
  languages : [
    EPLanguage.Cpp
  ],
}
