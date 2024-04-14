import "./AboutContentStyles.css"
import React from 'react'
import { Link } from "react-router-dom"
import Arhan1 from "../../assets/arhan1.jpg"
import Arhan2 from "../../assets/arhan2.jpg"
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>ARHAN KONUKSAL</h1>
            <p>Selamlar ben bu şirketin kurucusu ve yöneticisi Arhan Konuksal . <br/>18 yaşındayım ve yazılım bölümümüze de ben bakıyorum .</p>
            <Link to="/iletişim">
                <button className="btn">İletİşİm</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={Arhan1} className="img" alt="true"></img>
                </div>
                <div className="img-stack bottom">
                    <img src={Arhan2} className="img" alt="true"></img>
                </div>
            </div>
            </div>
    </div>
  )
}

export default AboutContent