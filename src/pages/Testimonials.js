import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../component/navbar';
import "./css/Testimonials.css";

import { FaFacebook, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Testimonials() {
  const Navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
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
          <h1 className="heading">Testimonials</h1>
          <h3 className="sub-line">Discover what people are saying about MK Group of Companies and our services.</h3>
        </div>
      </div>
      <div className='Testimonialsdiv'>
        <div className="testmmooo">
          <p className='nopading' style={{ height: '150px' }}>"Working with MK Group of Companies was a game-changer for our company. Their team's expertise and dedication helped us streamline our processes and achieve significant growth. Highly recommend!"</p>
          <div>
            <img loading='lazy' src='https://static.vecteezy.com/system/resources/thumbnails/009/663/927/small/5-star-rating-review-star-transparent-free-png.png' alt='' width={"40%"} />
          </div>
          <div className='testomggg'>
            <img loading='lazy' src='2x/Afzal A..jpg' alt='' />
          </div>
          <div><h3>Afzal A.</h3></div>
          <div>Position</div>
        </div>
        <div className="testmmooo">
          <p className='nopading' style={{ height: '150px' }}>"MK Group of Companies exceeded our expectations with their professionalism and attention to detail. From start to finish, they guided us through the project with clear communication and exceptional service. 5 stars!"</p>
          <div>
            <img loading='lazy' src='https://static.vecteezy.com/system/resources/thumbnails/009/663/927/small/5-star-rating-review-star-transparent-free-png.png' alt='' width={"40%"} />
          </div>
          <div className='testomggg'>
            <img loading='lazy' src='2x/Frank A (1).jpg' alt='' />
          </div>
          <div><h3>Frank A.</h3></div>
          <div>Position</div>
        </div>
        <div className="testmmooo">
          <p className='nopading' style={{ height: '150px' }}>"I couldn't be happier with the results MK Group of Companies delivered. Their innovative solutions and strategic approach transformed our business for the better. Thank you for your outstanding work!"</p>
          <div>
            <img loading='lazy' src='https://static.vecteezy.com/system/resources/thumbnails/009/663/927/small/5-star-rating-review-star-transparent-free-png.png' alt='' width={"40%"} />
          </div>
          <div className='testomggg'>
            <img loading='lazy' src='2x/Julie L..jpg' alt='' />
          </div>
          <div><h3>Julie L.</h3></div>
          <div>Position</div>
        </div>
        <div className="testmmooo">
          <p className='nopading' style={{ height: '150px' }}>"Choosing MK Group of Companies was one of the best decisions we made for our business. Their knowledgeable team provided invaluable insights and support throughout the entire process. We look forward to continuing our partnership."</p>
          <div>
            <img loading='lazy' src='https://static.vecteezy.com/system/resources/thumbnails/009/663/927/small/5-star-rating-review-star-transparent-free-png.png' alt='' width={"40%"} />
          </div>
          <div className='testomggg'>
            <img loading='lazy' src='2x/Kelly R..jpg' alt='' />
          </div>
          <div><h3>Kelly R.</h3></div>
          <div>Position</div>
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

export default Testimonials;
