import { useState } from 'react'
import Navbar from './Navbar'
import CustomCursor from './component/cursor'
import Projects from './component/Projects'
import Contact from './component/Contact'



function App() {

  return (
    <>
     {/* <CustomCursor /> */}
     <Navbar />
     <Projects />
     <Contact />
    </>
  )
}

export default App
