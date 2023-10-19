import {FaBars, FaTimes} from 'react-icons/fa';
import {useRef} from 'react';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';


function Navbar() {

    const navRef = useRef(); 
    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    } // Switch between hamburger menu and nav items on screen after screen size
    
    const navigate = useNavigate();      
    function handleClick() {
        navigate('/landingpage');
    } // Click logo to go back to landingpage

    return (
        <header>
            <Link to='/Landingpage' style={{ textDecoration: 'none' }}>
                <div className='logo' onClick={handleClick}>Læknasetrið</div>
            </Link>
            <nav ref={navRef}> 
                <div className='a-container'>
                    <a href='/#'>Home</a>
                    <a href='/#'>Home</a>
                    <a href='/#'>Home</a>
                    <a href='/#'>Home</a>
                    <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                        <FaTimes/>
                    </button>
                </div>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}

export default Navbar;