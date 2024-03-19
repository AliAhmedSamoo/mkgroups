import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation, NavLink } from 'react-router-dom';

import { AiFillLinkedin, AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';

import Index from './pages';

import About from './pages/about';
import Contact from './pages/contact';
import Testimonials from './pages/Testimonials';


import Blogs from './pages/Blogs';
import Services from './pages/services';

import { FaFacebook, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";


function ScrollToTop() {
  const { pathname } = useLocation();



  useEffect(() => {
    window.scrollTo(0, 0);




  }, [pathname]);

  return null;
}





function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate a delay for loading content
    const timeout = setTimeout(() => {
      setLoading(true);
    }, 2000); // Adjust the delay as needed

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);


  return (
    <div >


      {!loading ? (
        <div className="loading-spinner">

          <video autoplay="autoplay" id="banner-video" loop="loop" muted="muted" playsinline="playsinline" __idm_id__="5652481" width={"50%"} >
            <source src={"loading.mp4"} type="video/mp4" />
          </video>


        </div>
      ) : (

        <>
          <BrowserRouter>
            {/* <ScrollToTop /> */}


            <Routes>

             
              <Route path='/' element={<Index />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/Testimonials' element={<Testimonials />} />
           
              <Route path='/blogs' element={<Blogs />} />
              <Route path='/service' element={<Services />} />

    
            </Routes>











            <div className='footer'>

              <div className='subfooter'>

                <h1>Need Help</h1>
                <NavLink className="footerlinks" to={"/contact"}>Contact Us</NavLink>
                <NavLink className="footerlinks" to={""}>Buying Online</NavLink>
                <NavLink className="footerlinks" to={""}>FUP (Fair Use Policy)</NavLink>
                <NavLink className="footerlinks" to={""}>News Letter</NavLink>
                <NavLink className="footerlinks" to={"/TrackOrder"}>Track Order</NavLink>
                <NavLink className="footerlinks" to={"/returns&refunds"}>Returns & Refunds</NavLink>
                <NavLink className="footerlinks" to={"faq"}>FAQ's</NavLink>
                <NavLink className="footerlinks" to={"/Career"}>Career</NavLink>
                <NavLink className="footerlinks" to={"/Investors"}>Investors</NavLink>

              </div>


              <div className='subfooter'>

                <h1>Company</h1>
                <NavLink className="footerlinks" to={"/about"}>About Us</NavLink>
                <NavLink className="footerlinks" to={"/termandtonditions"}>Term and Conditions</NavLink>
                <NavLink className="footerlinks" to={"/privacypolicy"}>Privacy Policy</NavLink>
                <NavLink className="footerlinks" to={"/shippingpolicy"}>Shipping Policy</NavLink>
                <NavLink className="footerlinks" to={""}>info@mkgrpco.com</NavLink>
                <NavLink className="footerlinks" to={""}>(+92) 3347665664</NavLink>
                <NavLink style={{ textAlign: 'justify' }} className="footerlinks" to={""}>Isb Faisal Town tarnal Block A street 65 House no 1649E</NavLink>


              </div>


              <div className='subfooter'>

                <h1>CUSTOMER SERVICES</h1>
                <NavLink className="footerlinks" to={"/PRICEPROMISE"}>Price Promise</NavLink>
                {/* <NavLink className="footerlinks" to={""}>Payment Options</NavLink> */}
                <NavLink className="footerlinks" to={""}>Trade-in</NavLink>
                <NavLink className="footerlinks" to={"/contact"}>Complaints</NavLink>
                <NavLink className="footerlinks" to={"contact"}>Enquiries</NavLink>
                <NavLink className="footerlinks" to={""}>Repair Shops</NavLink>
              </div>









              <div className='subfooter'>

                <h1>Follow US</h1>
                <NavLink className="footerlinks" to={"https://www.facebook.com/profile.php?id=100093629576293"}><AiFillFacebook />Facebook</NavLink>
                <NavLink className="footerlinks" to={"https://twitter.com/Datawarehousegh"}><AiFillTwitterCircle />Twitter</NavLink>
                <NavLink className="footerlinks" to={"https://www.instagram.com/datawarehousegh/"}><AiFillInstagram />Instagram</NavLink>
                <NavLink className="footerlinks" to={"https://www.linkedin.com/in/data-warehouse-gh-ba7817280/"}><AiFillLinkedin />Linkedin</NavLink>
                <NavLink className="footerlinks" to={"https://www.tiktok.com/@datawarehousegh?lang=en"}><FaTiktok />Tiktok</NavLink>
                {/* <NavLink className="footerlinks" to={""}><AiFillYoutube/>Youtube</NavLink> */}

              </div>


            </div>

            <footer className="main-foot">
            <div className='downfoot'>
              <div>
                <img src='logo.png' alt='' width={"100px"} />
              </div>
              <div style={{ display: 'flex', fontSize: '12px', paddingTop: '0' }}>Copyright © 2024 &#160; <div style={{ color: "#3894FF" }}> MK Group Of Companies</div></div>
              <div className='downfootss'>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div className='socailbox'><FaFacebook /></div>
                  <div className='socailbox'><FaInstagram /></div>
                  <div className='socailbox'><FaTwitter /></div>
                </div>
                <div>
                  <div onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth'
                    });
                  }} className='socailbox addsa'><FaArrowUp /></div>
                </div>
              </div>

            </div>
          </footer>

          </BrowserRouter>

        </>)}
    </div>
  );
}

export default App;
