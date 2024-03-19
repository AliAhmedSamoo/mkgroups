import React, { useState } from 'react'
import "./css/navbar.css"
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [mobmenu, setmubmenu] = useState(true)
const Navigate = useNavigate()

  return (<>
    <div className='navbar'>
      <div className='navlogo'>
        <img src='logo.png' alt='' width={"100%"} height={"100%"} />
      </div>
      <div className='navmanu'>
        <h5 onClick={()=>Navigate("/")}>Home</h5>
        <h5 onClick={()=>Navigate("/about")}>About</h5>
        <h5 onClick={()=>Navigate("/service")}>Services</h5>
        <h5 onClick={()=>Navigate("/")}>Projects </h5>
        <h5 onClick={()=>Navigate("/contact")}>Contact Us</h5>
        <h5 onClick={()=>Navigate("/Testimonials")}>Testimonials </h5>
        <h5 onClick={()=>Navigate("/blogs")}>Blogs </h5>

      </div>



      {mobmenu ? <> <div className='navmanumob'><FaBars onClick={() => setmubmenu(false)} style={{ width: '40px', height: '40px', color: "0a0048" }} /></div>
      </> : <> <div className='navmanumob'><ImCross onClick={() => setmubmenu(true)} style={{ width: '40px', height: '40px', color: "0a0048" }} /></div>
      </>}



     
      </div>
      {mobmenu === false && <> 
      <div className='navmanu2'>
      <h5 onClick={()=>Navigate("/")}>Home</h5>
        <h5 onClick={()=>Navigate("/about")}>About</h5>
        <h5 onClick={()=>Navigate("/service")}>Services</h5>
        <h5 onClick={()=>Navigate("/")}>Projects </h5>
        <h5 onClick={()=>Navigate("/contact")}>Contact Us</h5>
        <h5 onClick={()=>Navigate("/Testimonials")}>Testimonials </h5>
        <h5 onClick={()=>Navigate("/blogs")}>Blogs </h5>


      </div></>}
  </>)
}

export default Navbar