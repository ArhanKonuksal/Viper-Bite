import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import HeroImg2 from '../components/Hero2/HeroImg2'
import Form from '../components/ContactForm/Form'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="İLETİŞİM" text="Bize ulaşın"/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact