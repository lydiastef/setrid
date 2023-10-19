import React from 'react';
import Image from '../Images/pexels-pixabay-40568 (1).avif';
import Phoneimg from '../Images/vaadin_phone-landline.png';
import './landingpage.css';
import { Link, useNavigate } from 'react-router-dom';

function Landingpage() {
    const navigate = useNavigate();
      
    function handleClick() {
        navigate('/laeknar');
    }

    return (
      <React.Fragment>
        <img className='main-img' src={Image} alt='stethoscope' />
        <div className='info-box'>
            <Link to='/Laeknar'>
                <div>
                    <button className='info-btn1' onClick={handleClick}>Læknar</button>
                </div>
            </Link>
            <div className='phone'>
                <img className='phone-img' src={Phoneimg} alt='phone'/>
                000-0000
            </div>
            <button className='info-btn2'>Þjónusta</button>
        </div>
        <div className='whatissetrid'>
            <h2>Hvað er Læknasetrið?</h2>
            <p>Blablablabla</p>
        </div>
        <div className='instructions'>
            <div className='where'>
                Hvar erum við?
            </div>
            <div className='when'>
                Opnunartímar
            </div>
        </div>
      </React.Fragment>
    );
  }
  
  export default Landingpage;
