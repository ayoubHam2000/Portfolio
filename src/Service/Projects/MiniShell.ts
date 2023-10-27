import { PhotoMiniShellMain } from "../../assets/images";
import { EProjects } from "../../enums/project-list.enum";
import { EPCategory, EPLanguage } from "../../enums/project.enum";
import { IProject } from "../../interfaces/project.interface";

export const Minishell : IProject = {
  id : EProjects.MiniShell,
  title : "Minishell",
  imagePath : PhotoMiniShellMain,
  date : new Date("2020"),
  brief : "This project is about creating a simple shell, It involves parsing the entire command and executing it, providing valuable insights into command-line operations and process management.",
  githubLink : "https://github.com/ayoubHam2000/minishell",
  categories : [
    EPCategory.Unix,
    EPCategory.Rigor,
    EPCategory.ImperativeProgramming
  ],
  tools : [

  ],
  languages : [
    EPLanguage.C
  ],
}
