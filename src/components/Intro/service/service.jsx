import React from 'react'
import './service.css';
import { CiSquareChevRight } from "react-icons/ci";
const service = () => {
    return (
    <>
        <section className="section0">
            <section className="section1">
                <div className="host">
                    <h2 className="host1">Exclusive Blog Update: Dive In!</h2>
                    <div className="host2">we're excited to share our latest blog post with you!<br/> Click through to discover fresh insights and stay ahead of the curve.</div>
                    {/* <div className="host3"> */}
                        {/* <a href="" className="btn">Explore hosting</a> */}
                    {/* </div> */}
                </div>
            </section>
            <section className="section2">
                <div className="box">
                    <div className="i"><CiSquareChevRight /></div>
                    <h3 className="box-h3">Compelling Content</h3>
                    <p className="box-p">Deliver consistently high-quality, engaging content that resonates with your target audience, keeping them coming back for more.</p>
                </div>
                <div className="box">
                    <div className="i"><CiSquareChevRight /></div>      
                    <h3 className="box-h3">User-friendly Interface</h3>
                    <p className="box-p">Ensure your website is easy to navigate, with intuitive design and smooth functionality, enhancing the overall user experience.</p>
                </div>
                <div className="box">
                    <div className="i"><CiSquareChevRight /></div>
                    <h3 className="box-h3">SEO Optimization</h3>
                    <p className="box-p"> Implement effective search engine optimization strategies to improve your website's visibility and ranking on search engine results pages, driving organic traffic.</p>
                </div>
                <div className="box">
                    <div className="i"><CiSquareChevRight /></div>
                    <h3 className="box-h3">Interactive Engagement</h3>
                    <p className="box-p"> Foster a sense of community by encouraging reader interaction through comments, social media integration, and interactive features, enhancing user engagement and loyalty.</p>
                </div>
            </section>
        </section>
    </>)
}

export default service;
