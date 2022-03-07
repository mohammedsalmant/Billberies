import React,{useState} from 'react'; 
import { MenuItems } from './MenuItems';
import './Navbar.css'

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const handleClick = () =>{
        setClicked(prev => !prev);
    }
    return (
        <>
        <nav className='navbar-items'>
            <img className="navbar-logo" src="./New BJ@2x.png" alt="logo"/>
            <div className="menu-icons" onClick={handleClick}>
                <i className={clicked ? 'fas fa-times': 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? 'nav-menu active': 'nav-menu'}>
                {MenuItems.map((item,index)=>(
                    <li key={index}>
                        <a className={item.cName} href={item.url}>
                            {item.title}
                         </a>
                         <hr/>  
                    </li>
                ))}
            </ul>
        </nav>
        </>
    )
}

export default Navbar
