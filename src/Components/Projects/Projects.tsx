import { useProfileService } from '../../Service/ProfileService'
import ListProjects from './ListProject'
import { EProjects } from '../../enums/project-list.enum'
import { useParams } from 'react-router-dom'
import { IProject } from '../../interfaces/project.interface'
import Container from './Projects/Container'
import Minishell from './Projects/Minishell'
import Cub3d from './Projects/Cub3d'
import FtTranscendence from './Projects/FtTranscendence'


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
        {projectItem.id === EProjects.MiniShell && <Minishell project={projectItem} /> }
        {projectItem.id === EProjects.Cub3d && <Cub3d project={projectItem} /> }
        {projectItem.id === EProjects.Container && <Container project={projectItem} />  }
        {projectItem.id === EProjects.FT_Transcendence && <FtTranscendence project={projectItem} /> }
      </>
    )
  }
  
}

export default Projects
