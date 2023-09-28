import { useEffect, useState } from "react"
import { IconMoon, IconSun } from "../../assets/icons"
import { EMainPageState } from "../../enums/main-page-state.enum"
import { ETheme } from "../../enums/theme.enum"
import { useProfileService } from "../../Service/ProfileService"
import { EProjects } from "../../enums/project-list.enum"

interface INav {
  setMainPageState : React.Dispatch<React.SetStateAction<EMainPageState>>
}


const toggleDarkMode = () => {
  const colorTheme = localStorage.theme === "dark" ? ETheme.Dark : ETheme.Light;
  const [theme, setTheme] = useState(colorTheme);

  useEffect(() => {
      const root = window.document.documentElement;
      const themeString = theme === ETheme.Dark ? "dark" : "light"
      root.classList.remove("dark");
      root.classList.remove("light");
      root.classList.add(themeString);
      localStorage.setItem('theme', themeString);
  }, [theme]);

  const toggle = () => {
    if (theme === ETheme.Light) {
      setTheme(ETheme.Dark)
    } else {
      setTheme(ETheme.Light)
    }
  }

  return {
    theme,
    toggle
  }
}

const Nav = ({setMainPageState} : INav) => {
  const projectService = useProfileService()
  const {theme, toggle} = toggleDarkMode();

  const projectClick = () => {
    projectService.setSelectedProject(EProjects.All)
    setMainPageState(EMainPageState.Project)
  }

  console.log(theme)

  return (
    <section className="flex flex-row justify-between pt-5 items-center text-2xl">
      <div className="font-bold  uppercase"> 
        <span className=" bg-white text-black px-1 rounded-md">Ayoub</span> Ben Hamou </div>
      <div className="">
        <ul className="flex flex-row gap-8">
          <li className=" cursor-pointer p-2 rounded-md px-6" 
          onClick={() => setMainPageState(EMainPageState.Home)}
          > Home </li>
          <li className=" cursor-pointer p-2 rounded-md px-6" 
          onClick={() => setMainPageState(EMainPageState.About)}
          > About </li>
          <li className=" cursor-pointer p-2 rounded-md px-6" 
          onClick={() => projectClick()}
          > Project </li>
          <li className=" cursor-pointer p-2 rounded-md px-6" 
          onClick={() => setMainPageState(EMainPageState.Contact)}
          > Contact </li>
        </ul>  
      </div>
      <div className="flex"> 
        <div onClick={() => toggle()} className="p-3 bg-blue-800 rounded-md  hover:cursor-pointer hover:scale-105 hover:bg-blue-900">
         {theme === ETheme.Dark && <IconSun />}
         {theme === ETheme.Light && <IconMoon />}
        </div>
      </div>
    </section>
  )
}

export default Nav
