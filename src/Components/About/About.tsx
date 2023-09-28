import { PhotoAbout } from '../../assets/images'
import { IEducation } from '../../interfaces/education.interface'
import { useProfileService } from '../../Service/ProfileService'



const EducationItem = ({educationItem} : {educationItem : IEducation}) => {
  return (
    <div className="w-[90%] lg:w-[70%] border border-color-primary rounded-lg px-8 py-10 flex flex-col gap-10">
      <div className='flex flex-col gap-4'>
        <h1 className='text-[1.5em] font-bold'> {educationItem.title} </h1>
        <h2 className='text-[1.1em] font-semibold'> {educationItem.name} </h2>
        <ul className='space-y-3 list-disc mt-8 ml-3'>
          {
            educationItem.items.map((a : string, index : number) => (
              <li key={index}> {a} </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

const About = () => {
  const profileService = useProfileService()
  const education = profileService.education
  const skills = profileService.skills
  const brief = profileService.brief

  return (
  <div className="flex flex-col justify-center items-center text-2xl mt-10 gap-5">
    
    <img src={PhotoAbout} alt="Photo" className='w-[400px] md:w-[500px] bg-cover rounded-xl shadow-xl'/>
    <div className='w-[80%] text-justify md:w-[50%] mt-5'> {brief} </div>
    
    <div className='text-[2em] my-32'> Education </div>
    {
      education.map((item : IEducation, index : number) => (
        <EducationItem educationItem={item} key={index} />
      ))
    }

    
    <div className='text-[2em] my-32'> Skills </div>
    <div className="w-[90%] lg:w-[70%] border border-color-primary rounded-lg px-8 py-10 flex flex-col gap-10">
      <div className='flex flex-col gap-4'>
        <ul className='space-y-3 list-disc mt-8 ml-3'>
          {
            skills.map((item : string, index : number) => (
              <li key={index} > {item} </li>
            ))
          }
        </ul>
      </div>
    </div>

  </div>

  )
}

export default About



