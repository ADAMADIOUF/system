import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React, { Component } from 'react'
import Slider from 'react-slick'
import a1 from '../assets/a1.png'
import a2 from '../assets/a2.png'
import a3 from '../assets/a3.png'
import a4 from '../assets/a4.png'
import a5 from '../assets/a5.png'
import a6 from '../assets/a6.png'
import a7 from '../assets/a7.png'
import a8 from '../assets/a8.png'
import a9 from '../assets/a9.png'
import a10 from '../assets/a10.png'
import { Link } from 'react-router-dom'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
       speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
     autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
       cssEase: 'linear',
   
    
       responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
             infinite: true,
             dots: true,
           },
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2,
             initialSlide: 2,
           },
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
           },
         },
       ],
     }
    return (
      <div className='slider-tow'>
        <h2> Toutes les dernières tendances mobiles du moment</h2>
        <Slider {...settings}>
          <div className='gallery-img'>
            <a href='/promotions'>
              <img src={a1} alt='' />
            </a>
          </div>
          <div className='gallery-img'>
            <a href='/tecno'>
              <img src={a2} alt='' />
            </a>
          </div>
          <div className='gallery-img'>
            <a href='/samsung'>
              <img src={a3} alt='' />
            </a>
          </div>
          <div className='gallery-img'>
            <a href='/huawei'>
              <img src={a4} alt='' />
            </a>
          </div>
          <div className='gallery-img'>
            <a href='/iphone'>
              <img src={a5} alt='' />
            </a>
          </div>
          <div className='gallery-img'>
            <a href='/itel'>
              <img src={a6} alt='' />
            </a>
          </div>
          <div className='gallery-img'>
            <a href='/nokia'>
              <img src={a7} alt='' />
            </a>
          </div>
          <div className='gallery-img'>
         
              <img src={a8} alt='' />
           
          </div>
          <div className='gallery-img'>
            <a href='/charge'>
              <img src={a9} alt='' />
            </a>
          </div>
          <div className='gallery-img'>
            <a href='/ecouteur'>
              <img src={a10} alt='' />
            </a>
          </div>
        </Slider>
      </div>
    )
  }
}
