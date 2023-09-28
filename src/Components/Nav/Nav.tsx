import { useEffect, useState } from "react"
import { IconHamburger, IconMoon, IconSun } from "../../assets/icons"
import { ETheme } from "../../enums/theme.enum"
import { useProfileService } from "../../Service/ProfileService"
import { useLocation, useNavigate } from "react-router-dom"
import { Const } from "../../Service/Const"




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

const Nav = () => {
  const profileService = useProfileService()
  const navigate = useNavigate()
  const {theme, toggle} = toggleDarkMode();
  const navItems = profileService.navigationItems
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [matches, setMatches] = useState(false);
  const openStyle = open || matches ? {display : "block"} : {display : "none"}

  const itemClicked = (to : string) => {
    setOpen(false)
    navigate(`/${to}`)
  }

  const getStyle = (itemName : string) => {
    const selected = location.pathname.split("/")[1]
    if (itemName === selected) {
      return {fontWeight: "700", color : "rgb(59 130 246)"}
    }
    return {}
  }

  const logoClicked = () => {
    navigate(`/${Const.NavHome}`)
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    const handleMediaChange = (event : any) => {
      setOpen(false)
      setMatches(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    setMatches(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  return (
    
    <nav className=" bg-white border-gray-200 dark:bg-gray-900">

      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        <div onClick={logoClicked} className="cursor-pointer font-bold  uppercase order-1 text-[1.2em] md:text-[1em]"> 
         <span className=" bg-black dark:bg-white text-white dark:text-black px-1 rounded-md">Ayoub</span> Ben Hamou 
        </div>
        


        <div style={openStyle} className="w-full md:block md:w-auto order-2 md:order-1">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

            {
              navItems.map((itemName : string) => (
                <li key={itemName} style={getStyle(itemName)} className="block py-2 pl-3 pr-4 cursor-pointer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" 
                onClick={() => itemClicked(itemName)}
                > {itemName} </li>
              ))
            }

          </ul>
        </div>

        <div className="flex flex-row gap-5 order-1 md:order-2 ">

          <div className="flex"> 
            <div onClick={() => toggle()} className="p-3 bg-color-secondary-800 text-white rounded-md  hover:cursor-pointer hover:scale-105 hover:bg-color-secondary-900">
            {theme === ETheme.Dark && <IconSun />}
            {theme === ETheme.Light && <IconMoon />}
            </div>
          </div>

          <button onClick={() => setOpen(!open)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-2xl  rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <IconHamburger />
          </button>

        </div>

      </div>
    </nav>

  )
}

export default Nav
