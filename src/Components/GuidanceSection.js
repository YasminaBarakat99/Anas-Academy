import React from 'react';
import '../Styles/GuidanceSection.css';

import GuidancePic from '../Images/GuidancePic.png';
import speakerPic from '../Images/speakerPic.png';

function GuidanceSection() {
  return (
    <div className='guidance-container'>
        <div className='guidance-second-container'>
            <img  src={GuidancePic} alt='GuidancePic' className='guidancePic'/>
            <div className='guidance-content'>
                <h3 className='guidance-title'>
                    <span>مازلت محتار </span> 
                    <span>بنوع البرنامج اللي يناسبك؟ </span>
                </h3>
                <h3 className='guidance-desc'>
                    منسوبى قسم التدريب بانتظارك و سعيدين بتقديم المساعدة و تقديم الاستشارة المناسبة لك .. لا تتردد بالتواصل معنا 
                </h3>
                <button className='guidance-button'>
                    <a className='guidance-button-content' href="http://consultant.anasacademy.uk/">
                        <img  src={speakerPic} alt='speakerPic' className='speakerPic'/>
                        احتاج استشارة 
                    </a>  
                </button>
            </div>
        </div>
        <div className='guidance-second-container-background'></div>
    </div>
  )
}

export default GuidanceSection;
