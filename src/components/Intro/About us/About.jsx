import React from 'react'
import deepankar from './images/Deep1.jpeg';
import deepankar2 from './images/Deep2.jpeg';
import './about.css';
import Team from './Team';
import Contact from '../ContactUs/Contact';
import Aboutcom from './Aboutcom.jsx';
import Footer from '../Footer/Footer.jsx';
const About = () => {
  return (
    <>
        <section className="about-home">
            <h2>About Us</h2>
        </section>
        <section id="experts">
            <h1>Community Experts</h1>
            <p>Replenish man have thing gathering lights yieding shall you</p>
            <div className="expert-box">
                <Team imgsrc={deepankar2} name={"Dhruv Seth"} help={"Full-Stack Developer"}/>
                <Team imgsrc={deepankar} name={"Deepankar Garg"} help={"Frontend Developer"}/>
                <Team imgsrc={deepankar} name={"Dev Bhatia"} help={"DSA & Frontend"}/>
                <Team imgsrc={deepankar2} name={"Dishant"} help={"Frontend"}/>
            </div>
        </section>
        <Aboutcom/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default About;