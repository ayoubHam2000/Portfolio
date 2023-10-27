import { PhotoTranscendenceMain } from "../../assets/images";
import { EProjects } from "../../enums/project-list.enum";
import { EPCategory, EPLanguage, EPTool } from "../../enums/project.enum";
import { IProject } from "../../interfaces/project.interface";

export const FT_Transcendence : IProject = {
  id : EProjects.FT_Transcendence,
  title : "Ft_Transcendence",
  imagePath : PhotoTranscendenceMain,
  date : new Date("2020"),
  brief : "A web application that enable real-time multiplayer PingPong matches in two modes 3D and 2D with the ability that allow communication between players through an integrated chat.",
  githubLink : "https://github.com/ayoubelhioui/ft_transcendence",
  categories : [
    EPCategory.Web,
    EPCategory.Rigor
  ],
  tools : [
    EPTool.NodeJs,
    EPTool.Postgresql,
    EPTool.Nest,
    EPTool.React,
    EPTool.Tailwind,
    EPTool.TypeORM
  ],
  languages : [
    EPLanguage.Css,
    EPLanguage.Html,
    EPLanguage.SQL,
    EPLanguage.Typescript
  ],
}
