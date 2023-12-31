import React from 'react'
import { Navbar , Hero , Companies ,Courses, Acheivements ,Categories, Feedback, CTA, Footer } from './components'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Companies/>
      <Courses/>
      <Acheivements/>
      <Categories/>
      <Feedback/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default App
