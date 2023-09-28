import { useState } from "react"
import { EMainPageState } from "../enums/main-page-state.enum"
import Projects from "./Projects/Projects"
import Nav from "./Nav/Nav"
import Footer from "./Footer/Footer"
import Home from "./Home/Home"
import About from "./About/About"
import Contact from "./Contact/Contact"


const App = () => {
  const [mainPageState, setMainPageState] = useState(EMainPageState.Home)

  return (
    <main className="bg-gray-800 text-white w-screen min-h-screen ">
      <Nav setMainPageState={setMainPageState}/>
      {mainPageState === EMainPageState.Home && <Home setMainPageState={setMainPageState} />}
      {mainPageState === EMainPageState.About && <About />}
      {mainPageState === EMainPageState.Project && <Projects/>}
      {mainPageState === EMainPageState.Contact && <Contact />}
      <Footer />
    </main>
  )
}

export default App
