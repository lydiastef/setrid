import React from 'react';
import Image from '../../Images/pexels-pixabay-40568 (1).avif';
import './laeknar.css';

function Laeknar() {
    return (
      <React.Fragment>
        <img className='main-img' src={Image} alt='stethoscope' />
          <div className='laeknar-container'>
          <p>Fjöldi lækna starfa hjá Læknasetrinu í hinum ýmsu greinum. Hér fyrir neðan er yfirlit yfir lækna sem starfa hjá Læknasetrinu.</p>
            <h3 className='laeknar-h3'>Blóðlæknar</h3>
            <ul>
                <li>Brynjar Viðarsson</li>
                <li>Guðmundur Rúnarsson</li>
                <li>Sigrún Reykdal</li>
            </ul>
            <h3 className='laeknar-h3'>Gigtlæknar</h3>
            <ul>
              <li>Árni Jón Geirsson</li>
            </ul>
            <h3 className='laeknar-h3'>Hjartalæknar</h3>
            <ul>
              <li>Atli Einarsson - hjartasjúkdómar</li>
              <li>Geir Hirlekar</li>
              <li>Daníel Ásgeirsson - lyflækningar, hjarta- og nýrnasjúkdómar</li>
              <li>Gestur Þorgeirsson - lyflækningar og hjartasjúkdómar</li>
              <li>Gizur Gottskálksson - lyflækningar og hjartasjúkdómar</li>
              <li>Gottskálk Gizurarson - lyflækningar og hjartasjúkdómar</li>
              <li>Og svo framvegis</li>

            </ul>
          </div>
      </React.Fragment>
    );
}

export default Laeknar;
