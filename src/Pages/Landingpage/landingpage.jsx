import React from 'react';
import Image from '../../Images/pexels-pixabay-40568 (1).avif';
import ImageWhere1 from '../../Images/image-where.png';
import ImageWhere2 from '../../Images/maps-where.png';
import Phoneimg from '../../Images/vaadin_phone-landline.png';
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
                535-7700
            </div>
            <button className='info-btn2'>Þjónusta</button>
        </div>
        <div className='instructions'>
            <div className='where'>
                <h2 className='where-h2'>Hvar erum við?</h2>
                <p className='where-p'>Læknasetrið er staðsett í Mjóddinni. Gengið er inn vinstra megin við Nettó um innganginn sem sést á myndinni hér fyrir neðan.</p>
                <img className='where-img' src={ImageWhere1} alt='Image of Læknasetrið from the outside' />
                <p className='where-p'>Hægt er að sjá staðsetningu Læknasetursins á Google Maps með því að smella á kortið hér fyrir neðan.</p>
                <img className='where-img' src={ImageWhere2} alt='Find Læknasetrið on Maps' />
            </div>
            <div className='when'>
                <h2 className='where-h2'>Opnunartímar</h2>
                    <div className='thedays'>
                        <p>Mánudagar 8-17</p>
                        <p>Þriðjudagar 8-17</p>
                        <p>Miðvikudagar 8-18</p>
                        <p>Fimmtudagar 8-17</p>
                        <p>Föstudagar 8-16</p>
                        <p>Laugardagar Lokað</p>
                        <p>Sunnudagar Lokað</p>
                    </div>

            </div>
        </div>
        <div className='whatissetrid'>
            <h2>Hvað er Læknasetrið?</h2>
            <p>Læknasetrið ehf. var stofnað 1986 og er félag lækna um samvinnu við rekstur læknastofa. Á Læknasetrinu starfa nú um 40 sérfræðingar í lyflækningum og hinum ýmsu sérgreinum auk sálfræðings.</p>
        </div>
        <div className='stjorn-container'>

            <h3 className='stjorn-h3'>Stjórn Læknasetursins ehf.</h3>
                <ul>
                <li>Þórarinn Guðnason stjórnarformaður</li>
                <li>Þórarinn Guðnason stjórnarformaður</li>
                <li>Þórarinn Guðnason stjórnarformaður</li>
                </ul>
            <h3 className='stjorn-h3'>Stjórnendur</h3>
            <ul>
                <li>Þórarinn Guðnason, lækningaforstjóri</li>
                <li>Dagmar Guðmundsdóttir, skrifstofustjóri</li>
                <li>Ásdís Gunnarsdóttir, rekstrarstjóri</li>
            </ul>
        </div>
      </React.Fragment>
    );
  }
  
  export default Landingpage;
