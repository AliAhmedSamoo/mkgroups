import React from 'react'
import Navbar from '../component/navbar'
import "./css/index.css"
import { TbHomeStar } from "react-icons/tb";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { TbCrane } from "react-icons/tb";


function index() {
  return (
    <div>
      <Navbar />



      {/* 1 */}
      <div className='topdiv' style={{ backgroundImage: "url('div1.png')", color: "white", backgroundSize: 'cover', backgroundRepeat: " no-repeat" }} >
        <div className='reeel'></div>

        <div className='uperrrr' style={{ zIndex: '10', marginBottom: '50px' }}>
          <h4>Excellence in Every Project</h4>
          <div className='divfortop'><h1>Transforming Homes, Building Dreams, Delivering Quality"</h1></div>
          <p></p>

          <div style={{ display: 'flex', gap: "10px" }}>
            <button className='formalbtn'> Get Started</button>
            <button className='formalbtn2'>  Free Consultations</button>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className='topdiv' style={{ backgroundColor: 'white' }}>






        <div className="content-container">

          <div className="title"><h4>About us</h4></div>

          <div className="main-title">
            Empowering Dreams, Building Trust: Discover MK Group's Legacy
          </div>
          <div className="description">
            Welcome to MK Group of Company, where excellence meets commitment. With a legacy of delivering top-notch services in home improvement, real estate, and construction, we take pride in turning your dreams into reality.
          </div>


          <div className="formalbtn">Discover more</div>


        </div>
        <div className='videopree'>

          <div className='unervideo'>
            <video autoplay="autoplay" id="banner-video" loop="loop" muted="muted" playsinline="playsinline" __idm_id__="5652481" width={"100%"} height={"100%"}>
              <source src={"video.mp4"} type="video/mp4" />
            </video>


            {/* <video autoPlay loop muted playsInline preload="auto" id="banner-video" width="100%" height="100%">
              <source src="video.mp4" type="video/mp4" />
            </video> */}



          </div>



          <div className='videokuperwala'>
            <h1 style={{ margin: "0" }}>15+</h1>
            <h2 style={{ margin: "0" }}>Years of Experience</h2>
          </div>


        </div>












      </div>



      {/* 3 */}
      <div className='topdiv3' style={{ backgroundColor: 'white' }}>




        <div className='aaaa' style={{ backgroundColor: '#808994', display: 'flex', alignItems: 'center' }}>



          <div className="content-container2" >

            <div className="title"><h4>About us</h4></div>

            <div className="main-title">
              Empowering Dreams, Building Trust: Discover MK Group's Legacy
            </div>
            <div className="description">
              Welcome to MK Group of Company, where excellence meets commitment. With a legacy of delivering top-notch services in home improvement, real estate, and construction, we take pride in turning your dreams into reality.
            </div>


            <div className="formalbtn">Discover more</div>


          </div>




        </div>
        <div className='bbbb' style={{ height: '100%', backgroundColor: '#808994', backgroundImage: "url('div2.png')", backgroundSize: 'cover' }}></div>













      </div>



      {/* 4 */}
      <div className='topdiv2' style={{ height: '200px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center", flexDirection: "column" }}>
          <h3 style={{ color: 'red' }}>"Comprehensive Solutions Tailored to Your Needs</h3>
          <h2>Explore Our Expertise in Home Services, Real Estate, and Construction</h2>
        </div>

      </div>

      {/* 4 */}
      <div className='topdiv4' style={{}}>

        <div className='topdiv4box'>
          <div className='bbnnbb' style={{ width: '80%', padding: "20px 30px", textWrap: 'wrap' }}>

            <TbHomeStar style={{ color: 'red', width: '100px', height: '100px' }} />
            <h3>Home Services</h3>
            <p>MK Group's Home Services server offers a seamless platform for homeowners to access top-quality maintenance, repairs, and smart home solutions. With a focus on reliability and convenience, we connect homeowners with trusted service providers to ensure their homes remain comfortable and secure.</p>

          </div>



          <div style={{ height: '150px', width: '100%', backgroundImage: "url('1.png')", backgroundSize: 'cover' }}>

          </div>
        </div>

        <div className='topdiv4box'>
          <div className='bbnnbb' style={{ width: '80%', padding: "20px 30px", textWrap: 'wrap' }}>

            <MdOutlineRealEstateAgent style={{ color: 'red', width: '100px', height: '100px' }} />
            <h3>Real Estate</h3>
            <p>MK Group's Real Estate server is your one-stop destination for all things property-related. Whether you're buying, selling, renting, or investing, our platform provides comprehensive listings, market insights, and expert guidance to help you navigate the real estate market with confidence.</p>

          </div>



          <div style={{ height: '150px', width: '100%', backgroundImage: "url('2.png')", backgroundSize: 'cover' }}>

          </div>
        </div>

        <div className='topdiv4box'>
          <div className='bbnnbb' style={{ width: '80%', padding: "20px 30px", textWrap: 'wrap' }}>

            <TbCrane style={{ color: 'red', width: '100px', height: '100px' }} />
            <h3>Construction</h3>
            <p>MK Group's Construction server caters to professionals and businesses in the construction industry, offering a suite of tools and resources to streamline project management and enhance productivity. From project coordination to material sourcing, our platform empowers construction stakeholders to deliver successful projects efficiently.</p>

          </div>



          <div style={{ height: '150px', width: '100%', backgroundImage: "url('3.png')", backgroundSize: 'cover' }}>

          </div>
        </div>
      </div>




      <div style={{
        width: '100%',
        height: '200px'
      }}></div>
    </div>
  )
}

export default index