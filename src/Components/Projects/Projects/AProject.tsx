import { IconGithub } from "../../../assets/icons"
import { IProject } from "../../../interfaces/project.interface"


const AProject = ({project} : {project : IProject}) => {
  const brief = project.brief.split('\n')

  return (
    <div className="flex flex-col justify-center items-center gap-4 h-[700px] text-3xl xl:text-4xl">
      {
        brief.map((item : string, index : number) => (
          <div key={index} className="text-center text-[0.7em] w-[50%]">{item}</div>
        ))
      }
      <a className="flex gap-2 border border-black dark:border-white rounded-md p-4 hover:scale-105" href={project.githubLink}>
        <IconGithub />
        {project.title}
      </a>
    </div>
  )
}

export default AProject