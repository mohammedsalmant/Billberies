import React from 'react';
import './Queries.css'

function Queries() {
    return (
        <div className='queries'>
            <div className="queries-main">
                <div className="queries-head">
                    <h2>Have any Queries</h2>
                </div>
                <div className="queries-p">
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className="queries-btn">
                    <div className='btn-left'>
                        <div className="btn">Call Now</div>
                    </div>
                    <div className='btn-right'>
                        <div className='queries-btn-right'>Mail Me</div>
                    </div>
                </div>
            </div>
            <img className='queries-wave' src="./images/layered-waves-haikei.svg" alt="wave"  />
        </div>
    )
}

export default Queries
