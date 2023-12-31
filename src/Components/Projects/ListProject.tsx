import React, { createElement, useState } from 'react'
import { IconCategory, IconLanguage, IconSearch, IconTool } from '../../assets/icons'
import DropMenu from './DropMenu'
import { EPCategory, EPLanguage, EPTool } from '../../enums/project.enum'
import { useProfileService } from '../../Service/ProfileService'
import { IProject } from '../../interfaces/project.interface'
import ProjectItem from './ProjectItem'



interface ISearch {
  search : string,
  category : EPCategory,
  tool : EPTool,
  language : EPLanguage
}

const ListProjects = () => {
  const profileService = useProfileService()
  const [search, setSearch] = useState<ISearch>({
    search : "",
    category : EPCategory.Unspecified,
    tool : EPTool.Unspecified,
    language : EPLanguage.Unspecified,
  })
  const selectedCategory = profileService.listCategories.find((item : any) => item.id === search.category)?.name
  const selectedTool = profileService.listTools.find((item : any) => item.id === search.tool)?.name
  const selectedLanguage = profileService.listLanguages.find((item : any) => item.id === search.language)?.name
  const listCategories = profileService.listCategories.map((item : any) => item.name)
  const listTools = profileService.listTools.map((item : any) => item.name)
  const listLanguages = profileService.listLanguages.map((item : any) => item.name)
  const listProject = profileService.projects.filter((item : IProject) => {
    return (search.category === EPCategory.Unspecified || item.categories.find((item : EPCategory) => item === search.category)) &&
    (search.tool === EPTool.Unspecified || item.tools.find((item : EPTool) => item === search.tool)) &&
    (search.language === EPLanguage.Unspecified || item.languages.find((item : EPLanguage) => item === search.language)) &&
    (!search.search || item.title.toLowerCase().includes(search.search.toLowerCase()))
  })

  const changeSearch = (newValue : string) => {
    const item : ISearch = {...search}
    item.search = newValue
    setSearch(item)
  }

  const changeCategory = (index : number) => {
    const item : ISearch = {...search}
    item.category = profileService.listCategories[index].id
    //item.tool = EPTool.Unspecified
    //item.language = EPLanguage.Unspecified
    setSearch(item)
  }

  const changeTool = (index : number) => {
    const item : ISearch = {...search}
    //item.category = EPCategory.Unspecified
    item.tool = profileService.listTools[index].id
    //item.language = EPLanguage.Unspecified
    setSearch(item)
  }

  const changeLanguage = (index : number) => {
    const item : ISearch = {...search}
    //item.category = EPCategory.Unspecified
    //item.tool = EPTool.Unspecified
    item.language = profileService.listLanguages[index].id
    setSearch(item)
  }

  const onInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    changeSearch(e.target.value)
  }

  return (
    <section className='py-5 sm:py-10 mt-5 sm:mt-10 px-4 xl:px-36'>
      
      <div className=''>
        <p className='text-2xl sm:text-4xl mb-1 '> Projects </p>
      </div>
      <div className='mt-10 sm:mt-16'>
        <h3 className='text-md sm:text-xl mb-3 '>
        Search projects by title or filter by category
        </h3>
      </div>
      
      <div className='mt-6 flex-col  border-b border-color-primary pb-3 gap-3 items-center'>
        
        <div
          className="mx-2 p-2.5 flex items-center rounded-md px-1 cursor-pointer bg-color-primary-700 text-color-primary"
        >
          <IconSearch className="ml-1 text-lg"  />     
        
          <input
            type="text"
            placeholder="Search"
            value={search.search}
            onChange={onInputChange}
            className=" text-[15px] ml-4 w-full bg-transparent focus:outline-none "
          />


        </div>

        <div className='flex flex-col md:flex-row gap-4 justify-center items-center my-5'>
          <div className='flex flex-col justify-start gap-4 items-center'>
            <DropMenu
              icon={createElement(IconCategory, {className : `grid place-content-center cursor-pointer hover:bg-color-primary-700 hover:rounded-md duration-200 p-1 text-3xl hover:scale-105`})}
              list={listCategories}
              menuStyle={{width : "190px",height : "300px", right : "0px"}}
              callBack={changeCategory} />
              <div> {selectedCategory} </div>
          </div>
          <div className='flex flex-col justify-start gap-4 items-center'>
            <DropMenu
              icon={createElement(IconTool, {className : `grid place-content-center cursor-pointer hover:bg-color-primary-700 hover:rounded-md duration-200 p-1 text-3xl hover:scale-105`})}
              list={listTools}
              menuStyle={{width : "190px",height : "300px", right : "0px"}}
              callBack={changeTool} />
              <div> {selectedTool} </div>
          </div>
          <div className='flex flex-col justify-start gap-4 items-center'>
            <DropMenu
              icon={createElement(IconLanguage, {className : `grid place-content-center cursor-pointer hover:bg-color-primary-700 hover:rounded-md duration-200 p-1 text-3xl hover:scale-105`})}
              list={listLanguages}
              menuStyle={{width : "190px", height : "300px", right : "0px"}}
              callBack={changeLanguage} />
              <div> {selectedLanguage} </div>
          </div>
        </div>
            
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mt-5 gap-8'>
        {
          listProject.map((item : IProject) => (
            <ProjectItem key={item.id} item={item}/>
          ))
        }

      </div>

    </section>
  )
}

export default ListProjects
