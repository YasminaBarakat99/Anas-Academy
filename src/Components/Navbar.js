import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../Styles/Navbar.css';

import anasAcadlogo from '../Images/anasAcadlogo-light.png';
import dropdownArrow from '../Images/dropdownArrow.png';

function Navbar() {

    const [openDropdown, setOpenDropdown] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate


    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavigation = (path) => {
        navigate(path); // Navigate to the specified path
        setIsMenuOpen(false); // Close menu after navigation
        setOpenDropdown(null); // Close dropdown after navigation
      };

    return (
        <div className='navbar-container'>

            <div className='navbar-top'>
                <div className='navbar-top-right'>
                    <a className='navbar-top-right-text' href="https://portal.office.com/">حساب الطالب</a>
                    <span>|</span>
                    <a className='navbar-top-right-text' href="https://anasacademy.uk/platform/">منصة المتدرب</a>
                </div>
                <a className='navbar-top-left' href="https://business.anasacademy.uk/">قطاع الاعمال</a>
            </div>

            <div className='navbar-middle'>
                <div className='small-screen-nav-container'>
                    {/* Hamburger icon */}
                    <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <a className='nav-logo-container' href="https://anasacademy.uk">
                        <img src={anasAcadlogo} alt='anasAcadlogo' className='anasAcadlogo'/>
                    </a>
                </div>
                <div className='buttons-container'>
                    <a className='request-button' href="https://lms.anasacademy.uk/register">
                        <p className='request-button-text'>سجل الان </p>
                    </a>
                    <a className='login-button' href="https://lms.anasacademy.uk/login/">
                        <p className='login-button-text'>تسجيل دخول</p>
                    </a>
                </div>
               
            </div>

            <div className={`navbar-bottom ${isMenuOpen ? 'open' : ''}`}>                
                <ul className='menu-items'>
                    <a className='menu-item' href="https://anasacademy.uk/"><p>الرئيسية</p></a>
                    <li className='menu-item'>
                        <div className='menu-item-top'  onClick={() => toggleDropdown('about')}>
                            <p>عن الأكاديمية</p>
                            <img src={dropdownArrow} alt='dropdownArrow' className='dropdownArrow'/>
                        </div>

                        {openDropdown === 'about' && (
                            <ul className='menu-dropdown-list'>
                                <li className='menu-dropdown-item'><a className='menu-dropdown-item-text' href="https://anasacademy.uk/aboutus/"><p className='dropdown-text'>نبذة عنا</p></a></li>
                                <li className='menu-dropdown-item'><a className='menu-dropdown-item-text' href="https://anasacademy.uk/faq/"><p className='dropdown-text'>الأسئلة الشائعة</p></a></li>
                                <li className='menu-dropdown-item'><a className='menu-dropdown-item-text' href="https://anasacademy.uk/news/"><p className='dropdown-text'>أخبار الأكاديمية</p></a></li>
                            </ul>
                        )}
                    </li>
                    <a className='menu-item' href="https://anasacademy.uk/training/"><p>التدريب</p></a>
                    <li className='menu-item'>
                        <div className='menu-item-top' onClick={() => toggleDropdown('study')}>
                            <p>ادرس معنا</p>
                            <img src={dropdownArrow} alt='dropdownArrow' className='dropdownArrow'/>
                        </div>
                        
                        {openDropdown === 'study' && (
                            <ul className='menu-dropdown-list'>
                                <li className='menu-dropdown-item'><a className='menu-dropdown-item-text' href="https://anasacademy.uk/executive-master/"><p className='dropdown-text'>الماجستير التنفيذي</p></a></li>
                                <li className='menu-dropdown-item'><a className='menu-dropdown-item-text' href="https://anasacademy.uk/programs"><p className='dropdown-text'>الدبلوم المهني</p></a></li>
                                <li className='menu-dropdown-item'><a className='menu-dropdown-item-text'  onClick={() => handleNavigation('/courses')}><p className='dropdown-text' >الدورات التدريبيه</p></a></li>
                                <li className='menu-dropdown-item'><a className='menu-dropdown-item-text'  onClick={() => handleNavigation('/preparation-courses')}><p className='dropdown-text'>التأهيل للشهادات الاحترافية</p></a></li>
                            </ul>
                        )}
                    </li>
                    <li className='menu-item'>
                        <div className='menu-item-top' onClick={() => toggleDropdown('admission')}>
                            <p>القبول</p>
                            <img src={dropdownArrow} alt='dropdownArrow' className='dropdownArrow'/>
                        </div>
                        
                        {openDropdown === 'admission' && (
                            <ul className='menu-dropdown-list'>
                                <li className='menu-dropdown-item'><a className='menu-dropdown-item-text' href="https://anasacademy.uk/calender/"><p className='dropdown-text'>التقويم الأكاديمي</p></a></li>
                                <li className='menu-dropdown-item'><a className='menu-dropdown-item-text' href="https://anasacademy.uk/admission/"><p className='dropdown-text'>متطلبات وآلية القبول</p></a></li>
                            </ul>
                        )}
                    </li>
                    <a className='menu-item' href="https://anasacademy.uk/qc/"><p>الشهادات الإحترافية</p></a>
                    <a className='menu-item' href="https://anasacademy.uk/scholarships/"><p>المنح الدراسية</p></a>
                    <a className='menu-item' href="https://stories.anasacademy.uk/"><p>قصص النجاح</p></a>
                    <a className='menu-item' href="https://anasacademy.uk/alumniunit/"><p>الخريجين</p></a>
                    <a className='menu-item' href="https://support.anasacademy.uk/"><p>الدعم والتواصل</p></a>
                </ul>
            </div>

        </div>
    );
}

export default Navbar;
