import { useProfileService } from "../../Service/ProfileService"
import { IconAddress, IconEmail, IconPhone } from "../../assets/icons"

const Contact = () => {
  const profileService = useProfileService()

  return (
    <section className='h-[700px] flex flex-col justify-center items-center py-5 sm:py-10 mt-5 sm:mt-10 px-36'>
      
      <div className=''>
        <h3 className='sm:text-xl mb-3 '>
        Get in Touch
        </h3>
      </div>
      

      <div className=' mt-10 sm:mt-16'>
        <p className='text-2xl sm:text-4xl mb-1  '> Contact Me </p>
      </div>
      
     
      
      <div className="flex flex-col justify-center items-center text-2xl mt-10">
        <div className="border border-color-primary rounded-lg px-8 py-10 flex flex-col gap-10">
          <div className="flex flex-col justify-center gap-8 items-center">
            <IconEmail />
            <a className="hover:text-blue-500 hover:scale-105 duration-300" href={`https://mail.google.com/mail/u/0/?fs=1&to=${profileService.email}&tf=cm`}> {profileService.email} </a>
          </div>
          <div className="flex flex-col justify-center gap-8 items-center">
            <IconAddress />
            <a href="#"> {profileService.address.fullAddress} </a>
          </div>
          <div className="flex flex-col justify-center gap-8 items-center">
            <IconPhone />
            <a href="#"> {profileService.phoneNumber} </a>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Contact