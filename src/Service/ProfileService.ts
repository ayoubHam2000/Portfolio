import { PhotoContainerMain, PhotoCub3dMain, PhotoMe, PhotoMiniShellMain, PhotoTranscendenceMain } from "../assets/images"
import { EProjects } from "../enums/project-list.enum"
import { EPCategory, EPLanguage, EPTool } from "../enums/project.enum"
import { IAddress } from "../interfaces/address.interface"
import { IEducation } from "../interfaces/education.interface"
import { IProjectListItem } from "../interfaces/project-list-item.interface"
import { IProject } from "../interfaces/project.interface"
import { Const } from "./Const"
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
    this.github = "Github Link"
    this.linkedin = "LinkedIn Link"
    this.twitter = "Twitter Link"
    this.phoneNumber = "+212 63 58 98 600"
    this.email = "ayoubbenhamou0731@gmail.com"
    this.address = {
      city : "Ouezzane",
      country : "Morocco",
      fullAddress : "Ouezzane, Morocco"
    }
    this.brief = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis reprehenderit et laborum, rem, dolore eum quod voluptate exercitationem nobis, nihil esse debitis maxime facere minus sint delectus velit in eos quo officiis explicabo deleniti dignissimos. Eligendi illum libero dolorum cum laboriosam corrupti quidem, reiciendis ea magnam? Nulla, impedit fuga! "
 
    this.navigationItems = [Const.NavHome, Const.NavAbout, Const.NavProjects, Const.NavContact]
    this.listCategories = []
    this.listTools = []
    this.listLanguages = []
    this.projects = this.constructProjects()
    this.education = this.constructEducation()
    this.skills = this.constructSkills()

    this.constructLists()
  }


  private constructLists() {

    this.listCategories.push({id: EPCategory.Unspecified, name: "All Categories"})
    this.listCategories.push({id: EPCategory.Ai, name: "Ai"})
    this.listCategories.push({id: EPCategory.Web, name: "Web"})
    this.listCategories.push({id: EPCategory.Android, name: "Android"})
    this.listCategories.push({id: EPCategory.GameDev, name: "GameDev"})
    this.listCategories.push({id: EPCategory.Unix, name: "Unix"})
    this.listCategories.push({id: EPCategory.ImperativeProgramming, name: "Imperative programming"})
    this.listCategories.push({id: EPCategory.Rigor, name: "Rigor"})
    this.listCategories.push({id: EPCategory.NetworkSystemAdministration, name: "Network & system administration"})
    this.listCategories.push({id: EPCategory.Algorithms, name: "Algorithms"})
    this.listCategories.push({id: EPCategory.ObjectOrientedProgramming, name: "Object-oriented programming"})
    this.listCategories.push({id: EPCategory.Graphics, name: "Graphics"})

    //FrameWord and Libraries and Tools
    this.listTools.push({id: EPTool.Unspecified, name: "All Tools"})
    this.listTools.push({id: EPTool.Pandas, name: "Pandas"})
    this.listTools.push({id: EPTool.NumPy, name: "NumPy"})
    this.listTools.push({id: EPTool.Django, name: "Django"})
    this.listTools.push({id: EPTool.React, name: "React"})
    this.listTools.push({id: EPTool.Tailwind, name: "Tailwind"})
    this.listTools.push({id: EPTool.Nest, name: "Nest"})
    this.listTools.push({id: EPTool.NodeJs, name: "NodeJs"})
    this.listTools.push({id: EPTool.TensorFlow, name: "TensorFlow"})
    this.listTools.push({id: EPTool.Flask, name: "Flask"})
    this.listTools.push({id: EPTool.Postgresql, name: "Postgresql"})
    this.listTools.push({id: EPTool.MongoDb, name: "MongoDb"})
    this.listTools.push({id: EPTool.MariaDb, name: "MariaDb"})
    this.listTools.push({id: EPTool.OrmPrisma, name: "Prisma ORM"})
    this.listTools.push({id: EPTool.OrmSql, name: "SQL ORM"})
    
    //languages
    this.listLanguages.push({id: EPLanguage.Unspecified, name: "All Languages"})
    this.listLanguages.push({id: EPLanguage.C, name: "C"})
    this.listLanguages.push({id: EPLanguage.Python, name: "Python"})
    this.listLanguages.push({id: EPLanguage.JavaScript, name: "JavaScript"})
    this.listLanguages.push({id: EPLanguage.Cpp, name: "C++"})
    this.listLanguages.push({id: EPLanguage.kotlin, name: "kotlin"})
    this.listLanguages.push({id: EPLanguage.Java, name: "Java"})
    this.listLanguages.push({id: EPLanguage.Bash, name: "Bash"})
    this.listLanguages.push({id: EPLanguage.SQL, name: "SQL"})
    this.listLanguages.push({id: EPLanguage.Php, name: "PHP"})
    this.listLanguages.push({id: EPLanguage.Csharp, name: "C#"})
    this.listLanguages.push({id: EPLanguage.Matlab, name: "Matlab"})
    this.listLanguages.push({id: EPLanguage.Typescript, name: "Typescript"})
    this.listLanguages.push({id: EPLanguage.Html, name: "HTML5"})
    this.listLanguages.push({id: EPLanguage.Css, name: "CSS"})
    this.listLanguages.push({id: EPLanguage.R, name: "R"})
    this.listLanguages.push({id: EPLanguage.Octave, name: "Octave"})
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
    {
      id : EProjects.FT_Transcendence,
      title : "ft_transcendence",
      imagePath : PhotoTranscendenceMain,
      date : new Date("2020"),
      brief : "brief",
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
        EPTool.OrmSql
      ],
      languages : [
        EPLanguage.Css,
        EPLanguage.Html,
        EPLanguage.SQL,
        EPLanguage.Typescript
      ],
    },
    {
      id : EProjects.Cub3d,
      title : "Cub3d",
      imagePath : PhotoCub3dMain,
      date : new Date("2020"),
      brief : "This project is inspired by the world-famous eponymous 90's game, which was the first FPS ever.",
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
    },
    {
      id : EProjects.MiniShell,
      title : "Minishell",
      imagePath : PhotoMiniShellMain,
      date : new Date("2020"),
      brief : "this project is about creating a simple shell.",
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
    },
    {
      id : EProjects.Container,
      title : "Container",
      imagePath : PhotoContainerMain,
      date : new Date("2020"),
      brief : "Reimplement Vector, Map, Set and Stack of the c++98 standard library",
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
  ]

    return list
  }

  private constructEducation() : IEducation[] {
    const list : IEducation[] = [
      {
        title : "1337 Future is Loading UM6P-42Network level:10.69",
        name : "Digital Technology Architect | Oct 2019 - 2023",
        items : [
          "System Programming and advanced C / C++",
          "Data Structures & Algorithms",
          "DevOps"
        ]
      },
      {
        title : "1337 Future is Loading UM6P-42Network level:10.69",
        name : "Digital Technology Architect | Oct 2019 - 2023",
        items : [
          "System Programming and advanced C / C++",
          "Data Structures & Algorithms",
          "DevOps"
        ]
      }
    ]

    return list
  }

  private constructSkills() : string[] {
    const skills : string[] = [
      "Tensorflow / Pytorch / Scikit-learn",
      "Pandas / Numpy / Matplotlib",
      "Python / C / C++ / Java",
      "FastApi / Pyspark / OpenCV",
      "Docker / Kubernetes",
      "AWS / AWS SageMaker",
      "SQL(PostgreSQL) / PL/SQL",
      "Socket Programming",
      "Multithreading Programming",
      "System Programming",
      "Git / GitHub Actions",
    ]
    return skills
  }



}

const profile = new Profile()

function useProfileService() {
  return profile
}

export {
  useProfileService
}
