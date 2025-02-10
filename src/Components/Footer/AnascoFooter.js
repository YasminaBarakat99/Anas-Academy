import React from 'react';
import '../../Styles/Footer/AnascoFooter.css';

import x from '../../Images/Footer/x.png';
import fb from '../../Images/Footer/fb.png';
import ln from '../../Images/Footer/ln.png';
import multiLogo1 from '../../Images/Footer/multilogo1.png';
import extraLogo4 from '../../Images/Footer/extraLogo4.webp';



function AnascoFooter() {
  return (
    <div className='bottom-container'>
            <div className='bottom-one'>
                <h2 className='bottom-one-title'>روابط سريعة</h2>
                <ul className='bottom-one-content'>
                    <a className='bottom-one-item' href="https://anascogroup.com/sa/">أنسكو السعودية</a>
                    <a className='bottom-one-item' href="https://anascogroup.com/eg/">أنسكو مصر </a>
                    <a className='bottom-one-item' href="https://anascogroup.com/uk/"> أنسكو بريطانيا</a>
                    <a className='bottom-one-item' href="#"> قريبا أنسكو الامارات</a>
                    <a className='bottom-one-item' href="https://anasacademy.uk/privacy/">سياسة الخصوصية</a>
                </ul>
            </div>
            <div className='bottom-one'>
                <h2  className='bottom-one-title'>مواقع أخرى </h2>
                <ul className='bottom-one-content'>
                    <a className='bottom-one-item' href="https://anasacademy.uk/"> ANAS Academy</a>
                    <a className='bottom-one-item' href="https://acadima.net">Acadima college </a>
                    <a className='bottom-one-item' href="http://neobridge.uk/"> Neo Bridge center </a>
                </ul>
            </div>
            <div className='bottom-three'>
                <h2 className='bottom-one-title'>المسؤلية الاجتماعية </h2>
                <ul className='bottom-one-content'>
                    <a className='bottom-one-item' href="https://anascogroup.com/sa/#rep"> مسؤليتنا الإجتماعية في السعودية</a>
                    <a className='bottom-one-item' href="https://anascogroup.com/eg/#rep">  مسؤليتنا الإجتماعية في مصر</a>
                    <a className='bottom-one-item' href="https://anascogroup.com/uk/#rep">  مسؤليتنا الإجتماعية في بريطانيا </a>
                    <a className='bottom-one-item' href="#"> مسؤليتنا الإجتماعية في الامارات </a>
                </ul>
            </div>

            <div className='bottom-four'>
                <h2 className='bottom-four-title'>  تواصل معنا</h2>
                <ul className='logos-main-container'>
                    <a className='logo-container' href="https://www.facebook.com/profile.php?id=61567250176332"><img src={fb} alt='fb' className='logo'/></a>
                    <a className='logo-container' href="https://x.com/ANASCOGROUP"><img src={x} alt='x' className='logo'/></a>
                    <a className='logo-container' href="https://www.linkedin.com/company/anascogruop/about/"><img src={ln} alt='ln' className='logo'/></a>
                </ul>
            </div>

            <div className='bottom-five'>
                <h2 className='bottom-one-title'> الإعتمادات </h2>
                <div className='multilogo-container'>
                    <img src={extraLogo4} alt='extraLogo4' className='multiLogo2'/>
                    <img src={multiLogo1} alt='multiLogo1' className='multiLogo1'/>
                </div>
            </div>

        </div>
  );
}

export default AnascoFooter;
