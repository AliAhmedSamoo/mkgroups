import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../component/navbar'
import "./css/blog.css"

import { FaFacebook, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";

import { useNavigate } from 'react-router-dom';





function Blogs() {

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





  const blogList = [
    {
      id: 1,
      title: '7 CSS tools you should be using ',
      category: 'development',
      subCategory: ['frontend', 'ui/ux', 'design'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: '/assets/images/author.jpg',
      createdAt: 'June 03, 2021',
      cover: '/assets/images/designer-1.jpg',
    },
    {
      id: 2,
      title: 'Milan Places That Highlight The City',
      category: 'travel',
      subCategory: ['vacation', 'holidays', 'sight seeing'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: '/assets/images/author.jpg',
      createdAt: 'June 03, 2021',
      cover: '/assets/images/f67396fc3cfce63a28e07ebb35d974ac.jpg',
    },
    {
      id: 3,
      title: 'Online Shopping – An Alternative to Shopping in the Mall',
      category: 'shopping',
      subCategory: ['e-commerce store', 'clothing', 'shopping store'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: '/assets/images/author.jpg',
      createdAt: 'June 03, 2021',
      cover: '/assets/images/fQwuyKJ9qxjSbr6REcgtmW-1200-80.jpg',
    },
    {
      id: 4,
      title: 'ADVENTURE IN YOU',
      category: 'adventure',
      subCategory: ['adrenaline', 'stay-fit', 'lifestyle'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: '/assets/images/author.jpg',
      createdAt: 'June 03, 2021',
      cover: '/assets/images/graphic-design-trends.png',
    },
    {
      id: 5,
      title: 'Loaded BBQ Baked Potatoes',
      category: 'cooking',
      subCategory: ['bbq', 'food', 'lifestyle'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: '/assets/images/author.jpg',
      createdAt: 'June 03, 2021',
      cover: '/assets/images/make-it-personal.jpg',
    },
    {
      id: 6,
      title: 'Beyond the Beach',
      category: 'travel',
      subCategory: ['beaches', 'sea', 'holidays'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: '/assets/images/author.jpg',
      createdAt: 'June 03, 2021',
      cover:
        '/assets/images/Purple-Combination-colors-graphic-design-predictions-1024x576-1024x576.jpg',
    },
    {
      id: 7,
      title: 'Art & Perception',
      category: 'art',
      subCategory: ['skill', 'design', 'passion'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: '/assets/images/author.jpg',
      createdAt: 'June 03, 2021',
      cover: '/assets/images/Synthwave-Postmodern.jpg',
    },
  ];


  return (
    <div>

      <Navbar />

      <div style={{height:"50px"}}></div>

      <div className="pattern-square"></div>

      <div className="front">
        <div ref={animatedElementRef}
          className={`uper ${isVisible ? 'visible' : ''}`}>

          <h1 className="heading"> Our articles on agency</h1>
          <h3 className="sub-line">At least, not exclusively. Reduced recruiting costs, more efficient and effective</h3>
          <h3 className="s-line">communication.</h3>



        </div>


      </div>



      <div>


        <div className='blogList-wrap'>
          {blogList.map((blog) => (


            <div className='blogItem-wrap'>
               <img loading='lazzy' className='blogItem-cover nopading' src={blog.cover} alt='cover' />
          
              <p className='chip'>{blog.category}</p>
              <h3 className='nopading'>{blog.title}</h3>
              <p className='blogItem-desc nopading'>{blog.description}</p>
              <footer>
                <div className='blogItem-author'>
                   <img loading='lazzy' src={blog.authorAvatar} alt='avatar' />
                  <div>
                    <h6>{blog.authorName}</h6>
                    <p className='nopading'>{blog.createdAt}</p>
                  </div>
                </div>
               
              </footer>
            </div>




          ))}
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
                <h3 className="m-head">Empowering businesses with innovative solutions.<br />
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

export default Blogs