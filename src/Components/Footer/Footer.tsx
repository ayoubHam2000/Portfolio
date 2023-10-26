import { IconGithub, IconLinkedin, IconTwitter } from '../../assets/icons'
import { useProfileService } from '../../Service/ProfileService'

const Footer = () => {
  const profileService = useProfileService()

  return (
    <footer className='pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-color-primary mx-6 xl:mx-36 text-2xl'>
      <div className='flex flex-col justify-center items-center gap-3'>
        <div className='text-[1.25em]'>
          Follow me
        </div>
        <div className='flex gap-20 my-4 text-[1.5em]' >
           <a className='rounded-lg text-color-primary hover:text-white primary bg-color-primary-700 hover:bg-color-secondary-700 hover:scale-105 shadow-sm p-4 duration-300' href={profileService.github}> <IconGithub/> </a> 
           <a className='rounded-lg text-color-primary hover:text-white primary bg-color-primary-700 hover:bg-color-secondary-700 hover:scale-105 shadow-sm p-4 duration-300' href={profileService.twitter}> <IconTwitter/> </a> 
           <a className='rounded-lg text-color-primary hover:text-white primary bg-color-primary-700 hover:bg-color-secondary-700 hover:scale-105 shadow-sm p-4 duration-300' href={profileService.linkedin}> <IconLinkedin/> </a> 
        </div>
        <div className='flex flex-col xl:flex-row gap-2 xl:gap-20 roboto_font' >
          <div> {profileService.phoneNumber} </div>
          <div> {profileService.email} </div>
          <div> {profileService.address.country} </div>
        </div>
        <div className='text-center mt-16 sm:mt-28'> 2023 Typescript React & Tailwind CSS Portfolio {profileService.fullName} </div>
        <div className='text-center text-[0.7em] text-gray-400'> Made By Love And Passion </div>
      </div>
    </footer>
  )
}

export default Footer