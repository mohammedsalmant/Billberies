import React, { useState } from 'react';
import './Slide.css';
import '../../Button/Button.css';
import ReactWhatsapp from 'react-whatsapp';
// import Order from '../../Order/Order';

function Slide(props) {
    const [modal, setModal] = useState(false);

    const Toggle = ()=>{
        setModal(!modal)
    }
    return (
            <div className='items'>
                <div className="card">
                    <img className='img-thumbnail' src={props.img}  alt='Cake-img'/>
                    <div className="card-body">
                            <div className="cake-details-left">
                                <h5 clasNames="card-title">{props.title}</h5>
                                <p className="card-text">{props.price}</p>
                            </div>
                            <div className="cake-details-right">
                                <div className="order">
                                    {/* <div className="btn" onClick={()=>Toggle()}>Order Now</div> */}
                                    <div className="btn" onClick={()=>Toggle()}>
                                        <ReactWhatsapp number="+971526034119" message="Hello World!!!" >
                                            Order Now
                                        </ReactWhatsapp>
                                    </div>
                                    {/* {modal ? <div className='modal'><Order/></div>:null} */}
                                </div> 
                            </div>
                    </div>
                </div>
            </div>
    )
}

export default Slide
