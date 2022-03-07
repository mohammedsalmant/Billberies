import React from 'react'
import './Content.css'
import Slick from './slick/Slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Content() {
    return (
        <div className='content-main' >
            <div className='content-container'>
                <div className="content-head"> 
                    <div>
                        <h2>Our Products</h2> 
                    </div>
                    <div>
                        <p> Lorem ipsum dolor sit amet,dignissim.<br/> Phasellus non dapibus</p>
                    </div>
                </div>
                <div className="content-slide">
                    <Slick/>
                </div>
            </div>
        </div>
    )
}
