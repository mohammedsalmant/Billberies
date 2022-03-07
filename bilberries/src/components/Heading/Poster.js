import React from 'react';
import './Poster.css'

export default function Poster() {
    return (
        <div className='poster'>            
            <div className="banner-content">
                <div className="banner-content-top">
                    <div className="banner-top-left">
                        <div className='banner-text'>
                            <h1 className='banner-text-head'>The Tastiest Cake</h1>
                            <h1 className='banner-text-head'>In The Town</h1>
                            <div className="banner-contact">
                                <div className="banner-contact-details">
                                    <i class="fas fa-mobile-alt"></i>
                                    <p>+91 8089406144</p>
                                </div>
                                <div className="banner-contact-details">
                                    <i class="far fa-envelope"></i>
                                    <p>salmanmohammedt@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-top-right">
                        <div className="banner-img">
                            <img src="./images/Banner-img.jpeg" alt="Banner img" />
                        </div> 
                    </div>
                </div>
                
             </div>
        </div>
    )
}
