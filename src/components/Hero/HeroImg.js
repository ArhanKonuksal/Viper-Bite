import "./HeroImgStyles.css"
import React from 'react'
import IntroImg from "../../assets/intro-bg.jpg"
import { Link } from "react-router-dom"


const HeroImg = () => {
  return (
    <div className="hero">
    <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>dİjİtalde fark yaratmak İçİn</p>
            <h1>Viper Bite</h1> 
            <div>
                <Link to="/hizmetler" className="btn">Hİzmetler</Link>
                <Link to="/iletişim" className="btn-light">İletİşİm</Link>
            </div>
        </div> 
    </div>
  )
}

export default HeroImg