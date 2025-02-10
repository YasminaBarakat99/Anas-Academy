import React from 'react';
import '../../Styles/Footer/AnasAcademyFooter.css';
import '../../Styles/Footer/CreditsSections.css';

import googlePlay from '../../Images/Footer/googlePlay.png';
import appGallery from '../../Images/Footer/appGallery.png';
import star from '../../Images/Footer/star.png';
import phone from '../../Images/Footer/phone.png';

import x from '../../Images/Footer/x.png';
import fb from '../../Images/Footer/fb.png';
import ln from '../../Images/Footer/ln.png';
import ig from '../../Images/Footer/ig.png';
import yt from '../../Images/Footer/yt.png';

function AnasAcademyFooter() {
  return (
    <div className='anas-acad-footer'>
        <div className='anas-acad-socials'>
            <ul className='anas-logos-main-container'>
                <a className='anasacad-logo-container' href="https://www.instagram.com/anasacademy/"><img src={ig} alt='ig' className='logo'/></a>
                <a className='anasacad-logo-container' href="https://www.linkedin.com/company/anascogruop/about/"><img src={ln} alt='ln' className='logo'/></a>
                <a className='anasacad-logo-container' href="https://www.youtube.com/channel/UCglrBLCkL6YnRZYy69-TwUw"><img src={yt} alt='yt' className='logo'/></a>
                <a className='anasacad-logo-container' href="https://x.com/ANASCOGROUP"><img src={x} alt='x' className='logo'/></a>
                <a className='anasacad-logo-container' href="https://www.facebook.com/profile.php?id=61567250176332"><img src={fb} alt='fb' className='logo'/></a>
            </ul>
            <div className='credits-left'>
                <a className='credits-left-text' href="https://anasacademy.uk/privacy/">سياسة الخصوصية </a>
                <span className='dash'>|</span>
                <a className='credits-left-text' href="https://anasacademy.uk/termsandconditions/"> الشروط و الاحكام </a>
            </div>
        </div>

        <div className='top-container'>
            <div className='top-one'>
                <h2 className='top-one-title'>التدريب</h2>
                <ul className='top-one-content'>
                    <a className='top-one-item' href="https://anasacademy.uk/training/">التدريب</a>
                    <a className='top-one-item' href="https://anasacademy.uk/qc/">الشهادات الإحترافية</a>
                    <a className='top-one-item' href="https://anasacademy.uk/alumniunit/">وحدة الخريجين</a>
                </ul>
            </div>

            <div className='top-one'>
                <h2  className='top-one-title'>المنصات الإلكترونية</h2>
                <ul className='top-one-content'>
                    <a className='top-one-item' href="https://anasacademy.uk/platform/"> منصة المتدرب</a>
                    <a className='top-one-item' href="https://anasacademy.uk/certificate/certificate-check.php">التحقق من الشهادات</a>
                    <a className='top-one-item' href='https://anasacademy.uk/occasions/'> منصة مناسبات</a>
                </ul>
            </div>

            <div className='top-one'>
                <h2 className='top-one-title'>الاستشارات </h2>
                <ul className='top-one-content'>
                    <a className='top-one-item' href="https://consultant.anasacademy.uk/">استشارات تعليمية</a>
                    <a className='top-one-item' href="https://consultant.anasacademy.uk/"> استشارات فنية</a>
                    <a className='top-one-item' href="https://consultant.anasacademy.uk/">استشارات التسويق الرقمى </a>
                    <a className='top-one-item' href="https://consultant.anasacademy.uk/"> استشارات تقييم جودة الأعمال </a>
                </ul>
            </div>

            <div className='top-four'>

                <div className='top-four-stores'>
                    <p className='rate-desc'>الاًن متاح على</p>
                    <div className='stores-container'>
                        <a href="https://play.google.com/store/apps/details?id=uk.anasacademy.edu.edu_anas_academyy&pli=1"><img src={googlePlay} alt='googlePlay' className='googlePlay'/></a>
                        <a href="https://appgallery.huawei.com/app/C109021927"><img src={appGallery} alt='appGallery' className='appGallery'/></a>
                    </div>
                </div>

                <div className='top-four-rating'>
                    <p className='rate-desc'>جوجل (4.5 تقييمات) </p>
                    <ul className='stars-container'>
                        <li><img src={star} alt='star' className='star'/></li>
                        <li><img src={star} alt='star' className='star'/></li>
                        <li><img src={star} alt='star' className='star'/></li>
                        <li><img src={star} alt='star' className='star'/></li>
                        <span className='rate'> 4.5</span>
                    </ul>
                </div>

            </div>

            <div className='top-five'>
                <h2 className='top-one-title'>للتواصل معنا</h2>
                <div className='contact-buttons-container'>
                    <button className='contact-button'>
                        <a href="https://support.anasacademy.uk/" className='contact-button-text' > 
                            <img  src={phone} alt='phone' className='phone'/>
                            تواصل معنا 
                        </a>  
                    </button> 
                    <button className='contact-button'>
                        <a href="https://anasacademy.uk/brand-guide" className='contact-button-text'>
                            Brand Guide     
                        </a>
                    </button>           
                </div>
            </div>
        </div>

    </div>
  );
}

export default AnasAcademyFooter;
