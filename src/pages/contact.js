import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../component/navbar'
import "./css/contact.css"

import { FaFacebook, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";

import { useNavigate } from 'react-router-dom';



function Contact() {


    const [isVisible, setIsVisible] = useState(false);
   

    const Navigate = useNavigate()



    const animatedElementRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const element = animatedElementRef.current;
            if (element) {
                const top = element.getBoundingClientRect().top;
                console.log(" top " + top)
                const windowHeight = window.innerHeight;
                setIsVisible(top < windowHeight + 20);
                console.log(" height " + windowHeight)
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);





    return (
        <div>



            <Navbar />

<div style={{height:"50px"}}></div>

            <div className="pattern-square"></div>
            <div className="front" >
                <div ref={animatedElementRef}
                    className={`uper ${isVisible ? 'visible' : ''}`}

                >
                    <h1 className="heading">Contact Us</h1>
                    <h3 className="sub-line">Please reach out to us if you have questions about our enterprise offerings, or anything else.</h3>


                </div>












            </div>

            <div className='contactus'>
                <div className='contactformdiv'>
                    <form className='contactusform'>
                        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>  <div style={{ width: '49%' }} className='insideform'><label>First Name *</label> <input /></div>
                            <div style={{ width: '45%' }} className='insideform'><label>Last Name *</label> <input /></div></div>
                        <div className='insideform'><label>Email *</label> <input /></div>
                        <div className='insideform'><label>Company Name</label> <input /></div>
                        <div className='insideform'><label>Phone</label> <input /></div>
                        <div className='insideform'><label>Message</label> <textarea /></div>
                        <button style={{width:'100%',margin:'0'}} className="purchase">Send</button>

                    </form>
                </div>
                <div className='otherinfo'>
                    <div>
                        <h3 className='nopading'>Technical support</h3>
                        <p className='nopading'>Found a persistent bug, or need help setting a new team member up? Can’t crack a feature? Let us know!</p>
                    </div>

                    <div>
                        <h3 className='nopading'>General chat</h3>
                        <p className='nopading'>Billing issues, customizations, plan changes--anything that doesn’t fit in the other two brackets, goes here. Start Chat</p>
                    </div>

                    <div>
                        <h3 className='nopading'>Help Center</h3>
                        <p className='nopading'>Want to share feedback on an existing feature or suggest a new one? Talk to us! Visit Help Center</p>
                    </div>
                </div>
            </div>


            <footer>
                <div className="foot-white">
                    <div className="foot-panel">
                        <ul>
                            <div className="presentation">
                                <h5 className="m-head">DELTA BUSINESS SOLUTIONS</h5>
                            </div>
                            <div className="presentation">
                                <h3 className="m-head">Empowering businesses with innovative solutions.<br/>
                                    Join us in shaping the future of your business.</h3>
                                    <h5 className="m-head">Subscribe To Our newsletter</h5>
                            </div>

                            <div className="email-bar">
                                <input className="email-edit" type="email" id="email" name="email" placeholder="email" required />
                                <button className="subs">Subscribe</button>
                            </div>
                        </ul>
                       
                    </div>
                </div>
            </footer>



          


        </div>
    )
}

export default Contact