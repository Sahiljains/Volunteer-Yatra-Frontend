import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import landingBG from '../../assets/images/blogBackground.jpg'
import landingText from '../../assets/images/blog-bg-text.png'
import { useState, index, handleSelect } from 'react'
import latestBlogs from '../../assets/buttons/latest-blogs.png'
import next from '../../assets/buttons/next.png'

import howTo from '../../assets/vectors/how-to.svg'
import travelTips from '../../assets/vectors/travel-tips.svg'
import society from '../../assets/vectors/society.svg'
import searchbox from '../../assets/vectors/searchbox.svg'

import PageImage from './../PageImage/PageImage'
import PageConnect from './../layout/PageConnect'
import BlogPost from './BlogPost'
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Popular = () => {
  const location = useLocation()
  useEffect(() => {
    const id = location.hash
    if (id !== '') {
      const res = document.querySelector(`${id}`)
      window.scrollTo(0, res.offsetTop - 10)
    } else window.scrollTo(0, 0)
  }, [location.hash])



  const divStyle = {



  };

  const latestblogstyle = {

    margin: '-130px 10px ',


  };
  const popstyle = {

    margin: '-10px ',
    display: 'flex'


  };
  const abc = {


    display: 'flex'


  };

  const popstylee = {

    margin: '-105px 68px ',
   
  




  };

  const pops = {

    height: '55px',
    margin: '1315px'



  };
  const bgover = {

    height: '680px'



  };
  const settings = {
    dots: true,
    fade:true,

    infinite: true,
    speed: 5,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear"
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];



  return (
    <>
      <PageImage imgSrc={landingBG} imgTitle={landingText} showOutline={true} />
      <div className='popular-blogs vertical-margin' id='popular-blogs'>
        <div className='container-fluid'>
          <div className='no-gutters' style={divStyle}>

            <h1 className='text-semi-bold'>Popular Blogs</h1>
            <Link className='row blogs-first-row no-gutters' to='/blogs#pop'>
              <img src={latestBlogs} alt='' style={latestblogstyle} className='zoom-2 cursor ml-auto' />
            </Link>
          </div>

          <div style={bgover} className='bg-overlay'></div>
          <div className='row' style={popstyle}>
            <div className='col-sm-6 blog-col' >
              <BlogPost showShare={true} />
            </div>
            <div className='col-sm-6 blog-col'>
              <BlogPost showShare={true} />
            </div>
          </div>
        </div>
      </div>

     <div className='row ' style={popstylee} id='pop'>
        <Carousel {...settings}>
          <Carousel.Item breakPoints={breakPoints} style={abc}>
            <div className='col-sm-4 blog-col'>
              <BlogPost small='sm' />
            </div>
            <div className='col-sm-4 blog-col'>
              <BlogPost small='sm' />
            </div>
            <div className='col-sm-4 blog-col'>
              <BlogPost small='sm' />
            </div>
          </Carousel.Item>
          <Carousel.Item breakPoints={breakPoints} style={abc}>
            <div className='col-sm-4 blog-col'>
              <BlogPost small='sm' />
            </div>
            <div className='col-sm-4 blog-col'>
              <BlogPost small='sm' />
            </div>
          </Carousel.Item>
        </Carousel>
      </div> 





        <div className='container-fluid vertical-margin learn-step-by-step' id='how-to'>
          <h1 className='text-semi-bold'>Learn Step by Step</h1>
          <div className='row'>
            <div className='col-sm-4 vertical-margin'>
              <div>
                <img src={howTo} alt='' className='cursor zoom-2' />
              </div>
              <h2 className='text-semi-bold text-center pt-5'>"How To" Guide</h2>
            </div>
            <div className='col-sm-4 vertical-margin'>
              <div>
                <img src={travelTips} alt='' className='cursor zoom-2' />
              </div>
              <h2 className='text-semi-bold text-center pt-5'>Travel Tips</h2>
            </div>
            <div className='col-sm-4 vertical-margin'>
              <div>
                <img src={society} alt='' className='cursor zoom-2' />
              </div>
              <h2 className='text-semi-bold text-center pt-5'>How to Shape Society</h2>
            </div>
          </div>
        </div>

        <PageConnect
          color='gray'
          content={
            <>
              <h1 className='text-semi-bold lead'>Love our blogs?</h1>
              <h3 className='text-medium lead'>For more interesting facts and travel blog.</h3>
              <div className='search-box mt-4 mb-5'>
                <img src={searchbox} alt='' />
                <input type='text' name='blog-searchbox' id='blog-searchbox' placeholder='Enter your email id.' />
                <button className='zoom-2'>Subscribe</button>
              </div>
            </>
          }
        />
    </>
      )
}

      export default Popular