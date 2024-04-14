import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import HeroImg from "../components/Hero/HeroImg"
import Footer from "../components/Footer/Footer"
import Work from '../components/WorkCard/Work'

const Home = () => {
    return (
        <div>
        <Navbar />
        <HeroImg />
        <Work />
        <Footer />
        </div>
    );
}

export default Home 