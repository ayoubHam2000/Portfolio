import { useNavigate } from "react-router-dom"
import { useProfileService } from "../../Service/ProfileService"
import { EPCategory, EPLanguage, EPTool } from "../../enums/project.enum"
import { IProject } from "../../interfaces/project.interface"
import { Const } from "../../Service/Const"
import { useEffect, useState } from "react"

const ProjectItem = ({item} : {item : IProject}) => {
  const navigate = useNavigate()
  const profileService = useProfileService()
  const [opacityCss, setOpacityCss] = useState("0%")

  const itemClicked = () => {
    navigate(`/${Const.NavProjects}/${item.title}`)
  }

  useEffect(() => {
    setTimeout(() => setOpacityCss("100%"), 200)
  }, [])

  return (
    <div style={{opacity: opacityCss}} onClick={itemClicked} className='transition-opacity duration-500 ease-in-out rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark'>
      <div>
        <img className='rounded-t-xl border-none' src={item.imagePath} alt="Project Item" />
      </div>
      <div className='px-4 py-6'>
        <p className='text-lg md:text-xl   mb-2'>
          {item.title}
        </p>
        <div className='flex flex-row justify-center flex-wrap'>
          {
            item.categories.map((item : EPCategory, index : number) => (
              <div key={index}>
                <div className='text-lg  text-color-primary bg-blue-300 dark:bg-blue-900 rounded-md px-2 m-1 p-1'> {profileService.getCategoryName(item)} </div>
              </div>
            ))
          }
          {
            item.tools.map((item : EPTool, index : number) => (
              <div key={index}>
                <div className='text-lg  text-color-primary bg-green-300 dark:bg-green-900 rounded-md px-2 m-1 p-1'> {profileService.getToolName(item)} </div>
              </div>
            ))
          }
          {
            item.languages.map((item : EPLanguage, index : number) => (
              <div key={index}>
                <div className='text-lg  text-color-primary bg-purple-300 dark:bg-purple-900 rounded-md px-2 m-1 p-1'> {profileService.getLanguageName(item)} </div>
              </div>
            ))
          }
        </div>
        {/* <span className='text-lg  bg-color-primary-700 mx-1 p-1'> Web </span>
        <span className='text-lg  bg-color-primary-700 mx-1 p-1'> Web </span>
        <span className='text-lg  bg-color-primary-700 mx-1 p-1'> Web </span> */}
      </div>
    </div>
  )
}

export default ProjectItem