import Projects from "./Projects/Projects"
import Nav from "./Nav/Nav"
import Footer from "./Footer/Footer"
import Home from "./Home/Home"
import About from "./About/About"
import Contact from "./Contact/Contact"
import { Route, Routes } from "react-router-dom"
import { Const } from "../Service/Const"


const App = () => {

  return (
    <main className="bg-color-primary-800 text-color-primary w-screen min-h-screen ">
      <Nav />
      <Routes>
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
