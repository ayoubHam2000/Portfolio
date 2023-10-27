import { EPCategory, EPLanguage, EPTool } from "../../enums/project.enum"
import { IProjectListItem } from "../../interfaces/project-list-item.interface"

const listCategories : IProjectListItem[] = []
const listTools : IProjectListItem[] = []
const listLanguages : IProjectListItem[] = []

listCategories.push({id: EPCategory.Unspecified, name: "All Categories"})
listCategories.push({id: EPCategory.Ai, name: "Ai"})
listCategories.push({id: EPCategory.Web, name: "Web"})
listCategories.push({id: EPCategory.Android, name: "Android"})
listCategories.push({id: EPCategory.GameDev, name: "GameDev"})
listCategories.push({id: EPCategory.Unix, name: "Unix"})
listCategories.push({id: EPCategory.ImperativeProgramming, name: "Imperative programming"})
listCategories.push({id: EPCategory.Rigor, name: "Rigor"})
listCategories.push({id: EPCategory.NetworkSystemAdministration, name: "Network & system administration"})
listCategories.push({id: EPCategory.Algorithms, name: "Algorithms"})
listCategories.push({id: EPCategory.ObjectOrientedProgramming, name: "Object-oriented programming"})
listCategories.push({id: EPCategory.Graphics, name: "Graphics"})
listCategories.push({id: EPCategory.DevOps, name: "DevOps"})
listCategories.push({id: EPCategory.Concurrency, name: "Concurrency"})

//FrameWord and Libraries and Tools
listTools.push({id: EPTool.Unspecified, name: "All Tools"})
listTools.push({id: EPTool.Pandas, name: "Pandas"})
listTools.push({id: EPTool.NumPy, name: "NumPy"})
listTools.push({id: EPTool.Django, name: "Django"})
listTools.push({id: EPTool.React, name: "React"})
listTools.push({id: EPTool.Tailwind, name: "Tailwind"})
listTools.push({id: EPTool.Nest, name: "Nest"})
listTools.push({id: EPTool.NodeJs, name: "NodeJs"})
listTools.push({id: EPTool.TensorFlow, name: "TensorFlow"})
listTools.push({id: EPTool.Flask, name: "Flask"})
listTools.push({id: EPTool.Postgresql, name: "Postgresql"})
listTools.push({id: EPTool.MongoDb, name: "MongoDb"})
listTools.push({id: EPTool.MariaDb, name: "MariaDb"})
listTools.push({id: EPTool.OrmPrisma, name: "Prisma ORM"})
listTools.push({id: EPTool.TypeORM, name: "TypeORM"})
listTools.push({id: EPTool.Docker, name: "Docker"})

//languages
listLanguages.push({id: EPLanguage.Unspecified, name: "All Languages"})
listLanguages.push({id: EPLanguage.C, name: "C"})
listLanguages.push({id: EPLanguage.Python, name: "Python"})
listLanguages.push({id: EPLanguage.JavaScript, name: "JavaScript"})
listLanguages.push({id: EPLanguage.Cpp, name: "C++"})
listLanguages.push({id: EPLanguage.kotlin, name: "kotlin"})
listLanguages.push({id: EPLanguage.Java, name: "Java"})
listLanguages.push({id: EPLanguage.Bash, name: "Bash"})
listLanguages.push({id: EPLanguage.SQL, name: "SQL"})
listLanguages.push({id: EPLanguage.Php, name: "PHP"})
listLanguages.push({id: EPLanguage.Csharp, name: "C#"})
listLanguages.push({id: EPLanguage.Matlab, name: "Matlab"})
listLanguages.push({id: EPLanguage.Typescript, name: "Typescript"})
listLanguages.push({id: EPLanguage.Html, name: "HTML5"})
listLanguages.push({id: EPLanguage.Css, name: "CSS"})
listLanguages.push({id: EPLanguage.R, name: "R"})
listLanguages.push({id: EPLanguage.Octave, name: "Octave"})

export const Categories = {
  ListCategories : listCategories,
  ListTools : listTools,
  ListLanguages : listLanguages,
}
