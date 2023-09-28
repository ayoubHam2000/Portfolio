import { useProfileService } from '../../Service/ProfileService'
import ListProjects from './ListProject'
import { EProjects } from '../../enums/project-list.enum'
import { useParams } from 'react-router-dom'
import { IProject } from '../../interfaces/project.interface'


const Projects = () => {
  const projectService = useProfileService()
  const params = useParams();
  const projectName = params.projectName
  const projectItem = projectService.projects.find((item : IProject) => item.title === projectName)

  if (!projectItem) {
    return <ListProjects/>
  } else {
    return (
    <>
      {projectItem.id === EProjects.MiniShell && <div> Minishell </div>}
      {projectItem.id === EProjects.Cub3d && <div> Cub3d </div>}
      {projectItem.id === EProjects.Container && <div> Container </div>}
      {projectItem.id === EProjects.FT_Transcendence && <div> FT_Transcendence </div>}
    </>
    )
  }
  
}

export default Projects
