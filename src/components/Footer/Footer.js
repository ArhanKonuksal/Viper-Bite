import "./FooterStyles.css"
import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaInstagram, FaGithub, } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    <div>
                        <h4>Yenikent, Lefkoşa, Kuzey Kıbrıs</h4>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}} />+90 548 850 40 90</h4>
            </div>
            <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}} />viper-bite@gmail.com</h4>
            </div>
            </div> 
            <div className="right">
                <h4>Misyomuz</h4>
                <p>Dijital dünyada markanızı güçlendirmek ve öne çıkarmak için buradayız! Profesyonel ekibimizle yaratıcı çözümler sunuyoruz. </p>
                <div className="social">
                <FaInstagram size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                <FaGithub size={30} style={{color:"#fff", marginRight:"1rem"}} />
                </div>
            </div>
    </div> 
    </div> 
  )
}

export default Footer
