import "./WorkCardStyles.css"
import React from 'react'
import { NavLink } from "react-router-dom"


const WorkCard = (props) => {
  return (
            <div className="project-card">
                <img src={props.imgsrc} alt="images"/>
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details">
                    <p>{props.text}</p>
                    <div className="pro-btns">
                        <NavLink to={props.view} className="btn" target="_blank">GÖZ ATIN</NavLink>
                        <NavLink to="/iletişim" className="btn">BİLGİ İSTEYİN</NavLink>
                    </div>
                </div>
            </div>
  )
}

export default WorkCard
