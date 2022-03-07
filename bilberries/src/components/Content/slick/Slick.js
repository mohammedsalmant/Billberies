import React from 'react';
import Slider from "react-slick";
import {Cake} from '../Slider/Cake';
import Slide from '../Slider/Slide';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slick.css"


export default function Slick() {
  var settings = {
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1
  centerMode: true,
  centerPadding: '300px',
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
  };

  return (
    <Slider {...settings} className="for_slick_slider">
    
    {Cake.map((item,index)=>(
          <div>
              < Slide {...item}/>
          </div>
        ))} 
    
    </Slider>
  )}