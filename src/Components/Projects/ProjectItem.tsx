import { useProfileService } from "../../Service/ProfileService"
import { EPCategory, EPLanguage, EPTool } from "../../enums/project.enum"
import { IProject } from "../../interfaces/project.interface"

const ProjectItem = ({item} : {item : IProject}) => {
  const profileService = useProfileService()

  const itemClicked = () => {
    profileService.setSelectedProject(item.id)
  }

  return (
    <div onClick={itemClicked} className='rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark'>
      <div>
        <img className='rounded-t-xl border-none' src={item.imagePath} alt="Project Item" />
      </div>
      <div className='text-center px-4 py-6'>
        <p className='font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2'>
          {item.title}
        </p>
        <div className='flex flex-row justify-center flex-wrap'>
          {
            item.categories.map((item : EPCategory, index : number) => (
              <div key={index}>
                <div className='text-lg text-ternary-dark dark:text-ternary-light bg-blue-900 rounded-md px-2 m-1 p-1'> {profileService.getCategoryName(item)} </div>
              </div>
            ))
          }
          {
            item.tools.map((item : EPTool, index : number) => (
              <div key={index}>
                <div className='text-lg text-ternary-dark dark:text-ternary-light bg-green-900 rounded-md px-2 m-1 p-1'> {profileService.getToolName(item)} </div>
              </div>
            ))
          }
          {
            item.languages.map((item : EPLanguage, index : number) => (
              <div key={index}>
                <div className='text-lg text-ternary-dark dark:text-ternary-light bg-purple-900 rounded-md px-2 m-1 p-1'> {profileService.getLanguageName(item)} </div>
              </div>
            ))
          }
        </div>
        {/* <span className='text-lg text-ternary-dark dark:text-ternary-light bg-gray-700 mx-1 p-1'> Web </span>
        <span className='text-lg text-ternary-dark dark:text-ternary-light bg-gray-700 mx-1 p-1'> Web </span>
        <span className='text-lg text-ternary-dark dark:text-ternary-light bg-gray-700 mx-1 p-1'> Web </span> */}
      </div>
    </div>
  )
}

export default ProjectItem