import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Team = (props) => {
  return (
    <>
        <div className="profile">
            <img src={props.imgsrc} alt=""/>
            <h6>{props.name}</h6>
            <p>{props.help}</p>
            <div className="pro-links">
                <FaFacebook className='i'/>
                <FaInstagram className='i'/>
                <FaLinkedin className='i'/>
            </div>
        </div>
    </>
  )
}

export default Team