import { PhotoContainerMain, PhotoCub3dMain, PhotoEnglishByTextMain, PhotoInceptionMain, PhotoMiniShellMain, PhotoNetPracticeMain, PhotoPhilosophersMain, PhotoTranscendenceMain, PhotoWebServerMain } from "../assets/images"
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
    this.github = "https://github.com/ayoubHam2000"
    this.linkedin = "https://www.linkedin.com/in/ayoub-ben-hamou-2a3999224/"
    this.twitter = "https://twitter.com/ayoubFox1337"
    this.phoneNumber = "+212 63 58 98 600"
    this.email = "ayoubbenhamou0731@gmail.com"
    this.address = {
      city : "Ouezzane",
      country : "Morocco",
      fullAddress : "Ouezzane, Morocco"
    }
    this.brief = "I am a dedicated and highly motivated graduate student with a strong academic background and a passion for Software Development. My experience spans the Unix ecosystem, web development, DevOps, and multiprocessing programming, where I have actively contributed to projects using C/C++, Python, Kotlin, and JavaScript. I am enthusiastic about seeking opportunities to enhance my skills, collaborate on exciting projects, and gain valuable real-world experience." + "\n I eagerly seek opportunities to expand my horizons, explore cutting-edge technologies, and engage in innovative projects. My goal is to not only enhance my own skills but also contribute meaningfully to the dynamic and ever-evolving field of software development."
 
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
    this.listCategories.push({id: EPCategory.DevOps, name: "DevOps"})
    this.listCategories.push({id: EPCategory.Concurrency, name: "Concurrency"})

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
    this.listTools.push({id: EPTool.TypeORM, name: "TypeORM"})
    this.listTools.push({id: EPTool.Docker, name: "Docker"})
    
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
      title : "Ft_Transcendence",
      imagePath : PhotoTranscendenceMain,
      date : new Date("2020"),
      brief : "brief",
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
    },
    {
      id : EProjects.Cub3d,
      title : "Cub3d",
      imagePath : PhotoCub3dMain,
      date : new Date("2020"),
      brief : "This project is inspired by the world-famous eponymous 90's game, which was the first FPS ever.",
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
    },
    {
      id : EProjects.MiniShell,
      title : "Minishell",
      imagePath : PhotoMiniShellMain,
      date : new Date("2020"),
      brief : "this project is about creating a simple shell.",
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
    },
    {
      id : EProjects.Container,
      title : "Container",
      imagePath : PhotoContainerMain,
      date : new Date("2020"),
      brief : "Reimplement Vector, Map, Set and Stack of the c++98 standard library",
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
    },
    {
      id : EProjects.WebServer,
      title : "WebServer",
      imagePath : PhotoWebServerMain,
      date : new Date("2020"),
      brief : "Reimplement Vector, Map, Set and Stack of the c++98 standard library",
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
    },
    {
      id : EProjects.Philosophers,
      title : "Philosophers",
      imagePath : PhotoPhilosophersMain,
      date : new Date("2020"),
      brief : "Reimplement Vector, Map, Set and Stack of the c++98 standard library",
      githubLink : "https://github.com/ayoubHam2000/philosophers",
      categories : [
        EPCategory.Unix,
        EPCategory.Rigor,
        EPCategory.Concurrency,
        EPCategory.ImperativeProgramming,
      ],
      tools : [

      ],
      languages : [
        EPLanguage.C
      ],
    },
    {
      id : EProjects.EnglishByText,
      title : "EnglishByText",
      imagePath : PhotoEnglishByTextMain,
      date : new Date("2020"),
      brief : "Reimplement Vector, Map, Set and Stack of the c++98 standard library",
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
    },
    {
      id : EProjects.NetPractice,
      title : "NetPractice",
      imagePath : PhotoNetPracticeMain,
      date : new Date("2020"),
      brief : "Reimplement Vector, Map, Set and Stack of the c++98 standard library",
      githubLink : "./",
      categories : [
        EPCategory.NetworkSystemAdministration,
      ],
      tools : [

      ],
      languages : [
        
      ],
    },
    {
      id : EProjects.Inception,
      title : "Inception",
      imagePath : PhotoInceptionMain,
      date : new Date("2020"),
      brief : "Reimplement Vector, Map, Set and Stack of the c++98 standard library",
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
  ]

    return list
  }

  private constructEducation() : IEducation[] {
    const list : IEducation[] = [

      {
        title : "1337 School",
        name : "Mohammed VI Polytechnic University - 1337 School | Digital Technology Architect Since 2021",
        items : [
          "Unix, System Programming and advanced C / C++",
          "Rigor",
          "Data Structures & Algorithms",
          "Object Oriented Programming",
          "Network System Administration",
          "Graphics",
          "DevOps",
        ]
      },
      {
        title : "Ibn Tofaïl University",
        name : "Bachelor degree in Mathematics and Computer Science 2018-2021",
        items : [
          "C/C++, Java, SQL, UML",
          "Unix ecosystem, Operating System, Multiprocessing programming",
          "Web, Javascript, Networking", 
        ]
      },
      {
        title : "Baccalaureate",
        name : "Science Math A 2018",
        items : [
          "Math",
          "Physics"
        ]
      },
    ]

    return list
  }

  private constructSkills() : string[] {
    const skills : string[] = [
      "Pandas, Numpy, Matplotlib",
      "Python, C, C++, Java",
      "Docker",
      "SQL(PostgreSQL), PL/SQL, MongoDB",
      "Socket Programming",
      "Multithreading Programming",
      "System Programming",
      "Git, GitHub Actions",
      "Positivity, Problem-solving, Teamwork",
      "Adaptability, Time management",
      "NodeJs, NestJs, React, Tailwind"
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
