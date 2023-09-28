import { useState } from 'react'
import { useProfileService } from '../../Service/ProfileService'
import { EState } from '../../enums/event-state.enum'
import ListProjects from './ListProject'
import { EProjects } from '../../enums/project-list.enum'




const Projects = () => {
  const projectService = useProfileService()
  const selectedProject = projectService.getSelectedProject()

  projectService.on(EState.ProjectListChange, useState()[1]).effect()

  
  return (
    <>
      {selectedProject === EProjects.All && <ListProjects/>}
      {selectedProject === EProjects.MiniShell && <div> minishell </div>}
      {selectedProject === EProjects.Cub3d && <div> Cub3d </div>}
      {selectedProject === EProjects.Container && <div> Container </div>}
      {selectedProject === EProjects.FT_Transcendence && <div> FT_Transcendence </div>}

    </>
  )
}

export default Projects
