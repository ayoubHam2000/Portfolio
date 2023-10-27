import { PhotoEnglishByTextMain } from "../../assets/images";
import { EProjects } from "../../enums/project-list.enum";
import { EPCategory, EPLanguage } from "../../enums/project.enum";
import { IProject } from "../../interfaces/project.interface";

export const EnglishByText : IProject = {
  id : EProjects.EnglishByText,
  title : "EnglishByText",
  imagePath : PhotoEnglishByTextMain,
  date : new Date("2020"),
  brief : "Android app project centers on the creation and management of english words. The project encompasses working with activities, fragments, and diverse UI components to provide a user-friendly experience.\nAdditionally, a robust database is designed and built using SQLite to store and organize the word data efficiently.",
  githubLink : "https://github.com/ayoubHam2000/EnglishByText",
  categories : [
    EPCategory.Android
  ],
  tools : [

  ],
  languages : [
    EPLanguage.kotlin,
    EPLanguage.SQL
  ],
}
