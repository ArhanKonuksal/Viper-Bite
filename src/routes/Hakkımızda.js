import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import HeroImg2 from '../components/Hero2/HeroImg2'
import AboutContent from '../components/AboutContent/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="HAKKIMIZDA" text="Viper Bite ekibi ile tanışın"/>
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About