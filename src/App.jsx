import { useState } from 'react'
import Header from './components/Header/Header'
import About from './components/About/About'
import Experience from './components/Experiences/Experience'
import Projects from './components/Projects/projects'
import ContactForm from './components/ContactForm/ContactForm'
import Footer from './components/Footer/Footer'
// import Navbar from './components/Navbar'
// import './App.css'


function App() {
  

  return (
    <div className='bg-slate-700 mt-4'>
 
    <Header/>
    <About/>
    <Experience/>
    <Projects/>
    <ContactForm/>
    <Footer/>
    </div>
  )
}

export default App
// min-h-[100vh] py-[5rem] max-w-sm px-8  min-[1000px]:max-w-2xl mx-auto text-center text-lg text-white