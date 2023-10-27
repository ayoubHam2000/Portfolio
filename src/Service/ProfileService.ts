import { EPCategory, EPLanguage, EPTool } from "../enums/project.enum"
import { IAddress } from "../interfaces/address.interface"
import { IEducation } from "../interfaces/education.interface"
import { IProjectListItem } from "../interfaces/project-list-item.interface"
import { IProject } from "../interfaces/project.interface"
import { Const } from "./Const"
import { Categories } from "./Objs/Categories"
import { Education } from "./Objs/Education"
import { Skills } from "./Objs/Skills"
import { Container } from "./Projects/Container"
import { Cub3d } from "./Projects/Cub3d"
import { EnglishByText } from "./Projects/EnglishByText"
import { FT_Transcendence } from "./Projects/FT_Transcendence"
import { Inception } from "./Projects/Inception"
import { Minishell } from "./Projects/MiniShell"
import { NetPractice } from "./Projects/NetPractice"
import { Philosophers } from "./Projects/Philosophers"
import { WebServer } from "./Projects/WebServer"
import { Service } from "./Service"



class Profile extends Service {

  navigationItems : string[]
  firstName : string
  lastName : string
  fullName : string
  email : string
  github : string
  linkedin : string
  twitter : string
  brief : string
  phoneNumber : string
  listCategories : IProjectListItem[]
  listTools : IProjectListItem[]
  listLanguages : IProjectListItem[]
  projects : IProject[]
  education : IEducation[]
  skills : string[]
  address : IAddress


  constructor() {
    super()
    this.firstName = "Ayoub"
    this.lastName = "Ben Hamou"
    this.fullName = "Ayoub Ben Hamou"
    this.github = "https://github.com/ayoubHam2000"
    this.linkedin = "https://www.linkedin.com/in/ayoub-ben-hamou/"
    this.twitter = "https://twitter.com/ayoubFox1337"
    this.phoneNumber = "+212 63 58 98 600"
    this.email = "ayoubbenhamou0731@gmail.com"
    this.address = {
      city : "Ouezzane",
      country : "Morocco",
      fullAddress : "Ouezzane, Morocco"
    }
    this.brief = "I am a dedicated and highly motivated graduate student with a strong academic background and a passion for Software Development. My experience spans data science, basics of system programming in unix, web development, DevOps, and multiprocessing programming, where I have actively contributed to projects using C/C++, Python, Kotlin, and JavaScript. I am enthusiastic about seeking opportunities to enhance my skills, collaborate on exciting projects, and gain valuable real-world experience." + "\n I eagerly seek opportunities to expand my horizons, explore cutting-edge technologies, and engage in innovative projects. My goal is to not only enhance my own skills but also contribute meaningfully to the dynamic and ever-evolving field of software development."
 
    this.navigationItems = [Const.NavHome, Const.NavAbout, Const.NavProjects, Const.NavContact]
    this.listCategories = Categories.ListCategories
    this.listTools = Categories.ListTools
    this.listLanguages = Categories.ListLanguages
    this.projects = this.constructProjects()
    this.education = this.constructEducation()
    this.skills = this.constructSkills()


  }


  getLanguageName(id : EPLanguage) {
    return this.listLanguages.find((item : IProjectListItem) => item.id === id)?.name
  }

  getCategoryName(id : EPCategory) {
    return this.listCategories.find((item : IProjectListItem) => item.id === id)?.name
  }

  getToolName(id : EPTool) {
    return this.listTools.find((item : IProjectListItem) => item.id === id)?.name
  }

  getListCategory(item : IProject) {
    let list = item.categories.map((item : EPCategory) => this.getCategoryName(item))
    list.filter((item : any) => item !== undefined)
    return list.join(", ")
  }

  private constructProjects() : IProject[] {
    const list : IProject[] = [
    FT_Transcendence,
    Cub3d,
    Minishell,
    Container,
    WebServer,
    Philosophers,
    EnglishByText,
    NetPractice,
    Inception
  ]

    return list
  }

  private constructEducation() : IEducation[] {
    return Education
  }

  private constructSkills() : string[] {
    return Skills
  }
}

const profile = new Profile()

function useProfileService() {
  return profile
}

export {
  useProfileService
}
