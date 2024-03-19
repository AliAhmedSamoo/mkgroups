import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../component/navbar';
import "./css/about.css";
import { FaFacebook, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Services() {
    const [isVisible, setIsVisible] = useState(false);
    const Navigate = useNavigate();
    const animatedElementRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const element = animatedElementRef.current;
            if (element) {
                const top = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                setIsVisible(top < windowHeight + 20);
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
            <div style={{ height: "50px" }}></div>
            <div className="pattern-square"></div>
            <div className="front">
                <div ref={animatedElementRef} className={`uper ${isVisible ? 'visible' : ''}`}>
                    <h1 className="heading">MK Group of Companies - Your Trusted Partner</h1>
                    <h3 className="sub-line">Maximize your potential with our comprehensive range of services.</h3>
                </div>

                <div className='aboutValues'>
                    <h1>Our Services</h1>

                    <div className='aboutvaluediv'>
                        <img loading='lazy' src='Services/Home-Services.jpg' alt='' />
                        <div>
                            <h4 className='nopading' style={{ color: '#blue' }}>01</h4>
                            <h2 className='nopading' style={{ color: "#fff" }}>Home Services</h2>
                            <p className='nopading'>Transform your home with our expert home services. From renovations to repairs, we've got you covered.</p>
                            <h5 className='nopading'>Explore More</h5>
                        </div>
                    </div>

                    <div className='aboutvaluediv2'>
                        <div>
                            <h4 className='nopading' style={{ color: '#blue' }}>02</h4>
                            <h2 style={{ color: "#fff" }} className='nopading'>Real Estate</h2>
                            <p className='nopading'>Find your dream property with our real estate solutions. Whether buying, selling, or renting, we make it easy.</p>
                            <h5 className='nopading'>Explore More</h5>
                        </div>
                        <img loading='lazy' src='Services/Real-Estate.jpg' alt='' />
                    </div>

                    <div className='aboutvaluediv'>
                        <img loading='lazy' src='Services/Construction.jpg' alt='' />
                        <div>
                            <h4 className='nopading' style={{ color: '#blue' }}>03</h4>
                            <h2 className='nopading' style={{ color: "#fff" }}>Construction</h2>
                            <p className='nopading'>Build your future with our construction services. From concept to completion, we deliver excellence.</p>
                            <h5 className='nopading'>Explore More</h5>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '50px' }}></div>

                <div className='aboutValues'>
                    <div className='aboutvaluediv3'>
                        <div className='ander'>
                            <h4 className='nopading' style={{ color: '#blue' }}>HIRE US / CONSULTATION REQUEST</h4>
                            <h2 style={{ color: "#fff" }} className='nopading'>Engage Our Services</h2>
                            <p className='nopading'>Ready to elevate your business with our expertise? Reach out to us for a consultation!</p>
                            <div className='blogItem-author'>
                                <img loading='lazy' src="Contact/Avatar.jpg" alt='avatar' />
                                <div>
                                    <h6>John Doe</h6>
                                    <p className='nopading'>+123 456 789</p>
                                    <p className='nopading'>example@mkgroup.com</p>
                                </div>
                            </div>
                        </div>

                        <div className='joinsssss'>
                            <div className='contactformdiv2'>
                                <form className='contactusform'>
                                    <div className='insideform'><label>Name *</label> <input /></div>
                                    <div className='insideform'><label>Email *</label> <input /></div>
                                    <div className='insideform'><label>Company Name</label> <input /></div>
                                    <div className='insideform'><label>Phone</label> <input /></div>
                                    <div className='insideform'><label>Message</label> <textarea /></div>
                                    <button style={{ width: '100%', margin: '0' }} className="purchase">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div className="foot-white">
                    <div className="foot-panel">
                        <ul>
                            <div className="presentation">
                                <h5 className="m-head">MK GROUP OF COMPANIES</h5>
                            </div>
                            <div className="presentation">
                                <h3 className="m-head">Empowering businesses with innovative solutions.<br />
                                    Join us in shaping the future of your business.</h3>
                                <h5 className="m-head">Subscribe To Our Newsletter</h5>
                            </div>

                            <div className="email-bar">
                                <input className="email-edit" type="email" id="email" name="email" placeholder="Email" required />
                                <button className="subs">Subscribe</button>
                            </div>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Services;
