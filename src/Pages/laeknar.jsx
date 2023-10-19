import React from 'react';
import Image from '../Images/pexels-pixabay-40568 (1).avif';

function Laeknar() {
    return (
      <React.Fragment>
        <img className='main-img' src={Image} alt='stethoscope' />
        Listi yfir lækna
      </React.Fragment>
    );
}

export default Laeknar;
