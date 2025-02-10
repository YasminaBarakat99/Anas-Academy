import React from 'react';
import '../Styles/CoursesScreen.css';

import Navbar from '../Components/Navbar';
import MajorFilter from '../Components/MajorFilter';
import GuidanceSection from '../Components/GuidanceSection';
import Footer from '../Components/Footer/Footer';
import HeroSection from '../Components/HeroSection';

function CoursesScreen() {
    return (
        <>
            <div className='navbar'>
                <Navbar />
            </div>
            <HeroSection title= "الدورات التدريبية" subtitle='.اكتشف مهاراتك في مدة قصيره مع أحدث البرامج المهنية وابدأ رحلة التطوير'/>
            <div className='major-filter-main-container'>
                <MajorFilter />
            </div>
            <GuidanceSection />
            <Footer />
        </>
    );
}

export default CoursesScreen;
