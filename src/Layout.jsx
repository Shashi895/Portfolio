import React from 'react'
import Header from './Components/NavBar/Header'
import Landing from './Components/LandingPage/Landing'
import About from './Components/About ME Page/About'
import Projects from './Components/Projects Page/Projects'
import Contact from './Components/Contact ME Page/Contact'
import Footer from './Components/Footer/Footer'

function Layout() {
  return (
   <>
   <Header/>
   <Landing/>
   <About/>
   <Projects/>
   <Contact/>
   <Footer/>
   </>
  )
}

export default Layout
