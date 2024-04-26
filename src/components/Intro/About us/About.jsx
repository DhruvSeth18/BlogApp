import React from 'react'
import imgb from './right.jpeg';
import './about.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const About = () => {
  return (
    <>
        <section id="experts">
            <h1>Community Experts</h1>
            <p>Replenish man have thing gathering lights yieding shall you</p>
            <div className="expert-box">
                <div className="profile">
                    <img src={imgb} alt=""/>
                    <h6>Ema Irnik</h6>
                    <p>Python & Algorithm Expert</p>
                    <div className="pro-links">
                        <FaFacebook className='i'/>
                        <FaInstagram className='i'/>
                        <FaLinkedin className='i'/>
                    </div>
                </div>
                <div className="profile">
                    <img src={imgb} alt=""/>
                    <h6>Jason</h6>
                    <p>Data Analysis Expert</p>
                    <div className="pro-links">
                        <FaFacebook className='i'/>
                        <FaInstagram className='i'/>
                        <FaLinkedin className='i'/>
                    </div>
                </div>
                <div className="profile">
                    <img src={imgb} alt=""/>
                    <h6>Maalik</h6>
                    <p>Full Stack Developer</p>
                    <div className="pro-links">
                        <FaFacebook className='i'/>
                        <FaInstagram className='i'/>
                        <FaLinkedin className='i'/>
                    </div>
                </div>
                <div className="profile">
                    <img src={imgb} alt=""/>
                    <h6>Jennifer</h6>
                    <p>Design Expert</p>
                    <div className="pro-links">
                        <FaFacebook className='i'/>
                        <FaInstagram className='i'/>
                        <FaLinkedin className='i'/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About
