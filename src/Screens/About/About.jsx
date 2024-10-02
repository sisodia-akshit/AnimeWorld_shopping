import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import AboutProducts from './AboutProducts/AboutProducts'
import { NavLink } from 'react-router-dom'

function About() {

  return (
    <>
      <Header />
      <div className='about'>
        <h1>From <span>classic series to the latest hits</span>, explore a world of <span>anime-inspired products</span> that bring your <span>favorite characters to life.</span></h1>
        <h1>Lets go for Shopping  </h1>
        <h1><NavLink to={'/home'}><button>Gooo!</button></NavLink></h1>
        <AboutProducts />
      </div>

      <Footer />
    </>

  )
}

export default About