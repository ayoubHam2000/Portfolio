import Projects from "./Projects/Projects"
import Nav from "./Nav/Nav"
import Footer from "./Footer/Footer"
import Home from "./Home/Home"
import About from "./About/About"
import Contact from "./Contact/Contact"
import { Route, Routes, useLocation } from "react-router-dom"
import { Const } from "../Service/Const"
import { useEffect } from "react"


const App = () => {
  const { pathname } = useLocation();


  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100)
  }, [pathname]);
  
  

  return (
    <main className="bg-color-primary-800 text-color-primary w-screen min-h-screen ">
      <Nav />
      <Routes>
        <Route path="" element={<Home />}/>
        <Route path={Const.NavHome} element={<Home />}/>
        <Route path={Const.NavAbout} element={<About />}/>
        <Route path={Const.NavProjects} element={<Projects />}/>
        <Route path={`${Const.NavProjects}/:projectName`} element={<Projects />}/>
        <Route path={Const.NavContact} element={<Contact />}/>
      </Routes>
      <Footer />
    </main>
  )
}

export default App
