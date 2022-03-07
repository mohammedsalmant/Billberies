import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div>
            <div className='footer'>
                <div className="footer-head">
                    <h2>Follow us At</h2>
                </div>
                <div className="footer-social">
                    <div><i class="fab fa-facebook-f"></i></div>
                    <div><i class="fab fa-instagram"></i></div>
                    <div><i class="fab fa-twitter"></i></div>
                </div>
            </div>
            <div className='footer-copy'>&copy; <em id="date">&nbsp;&nbsp;2022&nbsp;</em>&nbsp;&nbsp;Bilberries</div>
        </div>
    )
}

export default Footer
