import { PhotoMe } from '../../assets/images'
import { DocCv } from '../../assets/Doc'
import { useProfileService } from '../../Service/ProfileService'
import { IProject } from '../../interfaces/project.interface'
import ProjectItem from '../Projects/ProjectItem'
import { useNavigate } from 'react-router-dom'
import { Const } from '../../Service/Const'



const ListProjectPreview = () => {
  const navigate = useNavigate()
  const profileService = useProfileService()
  const listProject = profileService.projects.slice(0, 3)

  const seeMoreClick = () => {
    navigate(`/${Const.NavProjects}`)
  }

  return (
    <div className='flex flex-col justify-center items-center px-4 xl:px-36 '>
    
      <div className='mt-6'>
        <p className='text-2xl sm:text-6xl mb-1 '> Projects </p>
      </div>

     <div className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3  mt-10 gap-8'>
        {
          listProject.map((item : IProject) => (
            <ProjectItem key={item.id} item={item}/>
          ))
        }

      </div>

      <button onClick={seeMoreClick} className='grid place-content-center mt-10 w-2/5  px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-color-secondary-500 hover:bg-color-secondary-600 focus:ring-1 focus:ring-blue-900 text-white  text-lg sm:text-xl duration-300'> See More  </button>

    </div>
  )
}



const Home = () => {
  const navigate = useNavigate()

  const contactClicked = () => {
    navigate('/Contact')
  }

  return (
    <div>
      <div className='md:h-[650px] pt-5 flex flex-col lg:flex-row justify-center items-center text-2xl gap-32 home_background mt-6'>
        <div className=''>
          <img className='bg-cover rounded-full m-4 w-[300px] xl:w-[500px]' src={PhotoMe} alt='Profile Photo'/>
        </div>
        <div className='flex flex-col gap-7  justify-center items-center'>
          <div className='flex flex-col justify-center items-center p-4 px-8 text-white bg-gray-800 rounded-md bg-opacity-100 dark:bg-opacity-0'>
            <h1 className='font-bold text-4xl'> Ayoub Ben Hamou </h1>
            <div className='mt-1'> Curious. Creative. Problem solver. </div>
          </div>
          <div className='flex flex-row gap-3 justify-between'>
            <a href={DocCv}> <button className='w-[220px] font-bold rounded-2xl border-color-secondary shadow border text-black bg-white py-3 px-4 hover:scale-105'> Download CV </button> </a>
            <button className='w-[220px] font-bold rounded-2xl border-color-secondary shadow border text-color-primary-rev bg-color-secondary-800 px-4 py-3 hover:scale-105' onClick={contactClicked}> Contact </button>
          </div>
          <div>
          </div>
        </div>
      </div>
      <ListProjectPreview />
    </div>
  )
}

export default Home