import React from 'react'
import { PhotoMe } from '../../assets/images'
import { DocCv } from '../../assets/Doc'
import { EMainPageState } from '../../enums/main-page-state.enum'
import { useProfileService } from '../../Service/ProfileService'
import { IProject } from '../../interfaces/project.interface'
import ProjectItem from '../Projects/ProjectItem'

interface IHome {
  setMainPageState : React.Dispatch<React.SetStateAction<EMainPageState>>
}

const ListProjectPreview = ({setMainPageState} : IHome) => {
  const profileService = useProfileService()
  const listProject = profileService.projects.filter((item : IProject, index : number) => index < 3)


  return (
    <div className='h-screen flex flex-col justify-center items-center '>
    
      <div className='text-center'>
        <p className='font-general-medium text-2xl sm:text-6xl mb-1 text-ternary-dark dark:text-ternary-light'> Projects </p>
      </div>

     <div className='grid grid-cols-1  lg:grid-cols-3  mt-10 gap-8'>
        {
          listProject.map((item : IProject) => (
            <ProjectItem key={item.id} item={item}/>
          ))
        }

      </div>

      <button onClick={() => setMainPageState(EMainPageState.Project)} className='grid place-content-center mt-10 w-2/5 text-center font-general-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-blue-500 hover:bg-blue-600 focus:ring-1 focus:ring-blue-900 text-white text-lg sm:text-xl duration-300'> See More  </button>

    </div>
  )
}

const Home = ({setMainPageState} : IHome) => {
  return (
    <>
      <div className='h-screen pt-5 flex flex-row justify-center items-center text-2xl gap-32 hhh'>
        <div className=''>
          <img className='bg-cover rounded-full' width={500} src={PhotoMe} alt='Profile Photo'/>
        </div>
        <div className='flex flex-col gap-7  justify-center items-center'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='font-bold text-4xl'> Ayoub Ben Hamou </h1>
            <div className='mt-1'> Curious. Creative. Problem solver. </div>
          </div>
          <div className='flex flex-row gap-3 justify-between'>
            <a href={DocCv}> <button className='w-[220px] font-bold rounded-2xl border-blue-900 shadow border text-black bg-white py-3 px-4 hover:scale-105'> Download CV </button> </a>
            <button className='w-[220px] font-bold rounded-2xl border-blue-900 shadow border text-white bg-blue-800 px-4 py-3 hover:scale-105' onClick={() => setMainPageState(EMainPageState.Contact)}> Contact </button>
          </div>
          <div>
          </div>
        </div>
      </div>
      <ListProjectPreview setMainPageState={setMainPageState}/>
    </>
    
  )
}

export default Home