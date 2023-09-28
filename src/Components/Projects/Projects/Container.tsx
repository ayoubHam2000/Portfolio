import { IProject } from "../../../interfaces/project.interface"


const Container = ({project} : {project : IProject}) => {
  return (
    <div className="grid place-content-center h-[700px] text-4xl">
      <a href={project.title}>
        {project.title}
      </a>
    </div>
  )
}

export default Container