import { useProfileService } from '../../Service/ProfileService'
import ListProjects from './ListProject'
import { EProjects } from '../../enums/project-list.enum'
import { useParams } from 'react-router-dom'
import { IProject } from '../../interfaces/project.interface'
import AProject from './Projects/AProject'


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
        {projectItem.id === EProjects.MiniShell && <AProject project={projectItem} /> }
        {projectItem.id === EProjects.Cub3d && <AProject project={projectItem} /> }
        {projectItem.id === EProjects.Container && <AProject project={projectItem} />  }
        {projectItem.id === EProjects.FT_Transcendence && <AProject project={projectItem} /> }
        {projectItem.id === EProjects.WebServer && <AProject project={projectItem} /> }
        {projectItem.id === EProjects.Philosophers && <AProject project={projectItem} /> }
        {projectItem.id === EProjects.EnglishByText && <AProject project={projectItem} /> }
        {projectItem.id === EProjects.NetPractice && <AProject project={projectItem} /> }
        {projectItem.id === EProjects.Inception && <AProject project={projectItem} /> }
      </>
    )
  }
  
}

export default Projects
