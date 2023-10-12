import {FaBars, FaTimes} from 'react-icons/fa';
import {useRef} from 'react';
import '../Styles/navbar.css';

function Navbar() {
    const navRef = useRef(); 

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

    return (
        <header>
            <h3>Læknasetrið</h3>
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