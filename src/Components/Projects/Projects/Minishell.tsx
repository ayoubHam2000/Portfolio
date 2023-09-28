import { IProject } from '../../../interfaces/project.interface'

const Minishell = ({project} : {project : IProject}) => {
  return (
    <div className="grid place-content-center h-[700px] text-4xl">
      <a href={project.githubLink}>
        {project.title}
      </a>
    </div>
  )
}

export default Minishell