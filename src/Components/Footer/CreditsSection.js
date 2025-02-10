import React from 'react';
import '../../Styles/Footer/CreditsSections.css';

import anascoLogo from '../../Images/Footer/anasco-logo.webp';
import extraLogo1 from '../../Images/Footer/extraLogo1.png';
import extraLogo2 from '../../Images/Footer/extraLogo2.png';
import extraLogo3 from '../../Images/Footer/extraLogo3.png';


function CreditsSection() {
  return (
    <div className='credits-section'>
        <a href="https://acadima.tech">
          <img src={anascoLogo} alt='anascoLogo' className='anasconewLogo'/>
        </a>
        <div className='credits-text-container'>
          <span className='credits-text'>جميع الحقوق محفوطة لصالح <a className='anascogroupLink' href="https://anascogroup.com/"> مجموعة أنسكو القابضة للتعليم  </a> @ 2025   </span>
        </div>
        <div className='credits-left'>
          <img src={extraLogo2} alt='extraLogo2' className='anascoExtraLogo'/>
          <img src={extraLogo1} alt='extraLogo1' className='anascoExtraLogo'/>
          <img src={extraLogo3} alt='extraLogo3' className='anascoExtraLogo'/>
        </div>
    </div>
  );
}

export default CreditsSection;
