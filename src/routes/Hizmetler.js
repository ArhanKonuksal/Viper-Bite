import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import HeroImg2 from '../components/Hero2/HeroImg2'
import PricingCard from '../components/Pricing/PricingCard'
import Work from '../components/WorkCard/Work'


const Services = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="HİZMETLER" text="Revançta olan hizmetlerimiz"/>
      <Work />
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Services