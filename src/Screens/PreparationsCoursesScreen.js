import React from 'react';
import '../Styles/PreparationsCourseScreen.css';

import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import GuidanceSection from '../Components/GuidanceSection';
import Footer from '../Components/Footer/Footer';
import NewCard from '../Components/NewCard';

import ACP from '../Images/New folder/ACP.png';
import CDTP from '../Images/New folder/CDTP.png';
import Video from '../Images/New folder/video.png';

function PreparationsCoursesScreen() {

    return (
        <>
            <div className='navbar'>
                <Navbar />
            </div>
            <HeroSection title= "الدورات التأهيلية للشهادات الاحترافية " subtitle=''/>
            <div className='preparations-main-container'>
                <div className='preparations-courses-cards'>
                    <NewCard 
                        title='الدورة التأهيلية لشهادة محترف  (CDTP)التفكير التصميمى المعتمد  ' 
                        status='open' 
                        description='تُقدم هذه الدورة تدريباً عملياً متقدمًا على مهارات التفكير التصميمي، مما يساعد المشاركين على تطوير خبرتهم العملية واجتياز اختبار CDTP بنجاح'
                        link='https://anasacademy.uk/acp/'
                        img ={ACP}
                    />
                    <NewCard 
                        title='الدورة التأهيلية لشهادة محترف  معتمد (ACP) من أدوبى في التصميم المرئى ' 
                        status='open' 
                        description='تُقدّم هذه الدورة تدريباً عملياً متقدماً على أدوات وتقنيات أدوبي في التصميم المرئي، مما يساعد المشاركين على تطوير مهاراتهم واجتياز اختبار ACP بنجاح'
                        link='https://anasacademy.uk/cdtp/'
                        img ={CDTP}
                    />
                    <NewCard 
                        title='الدورة التأهيلية لشهادة محترف  معتمد (ACP) من أدوبى في تصميم الفيديو ' 
                        status='open' 
                        description='تُقدّم هذه الدورة تدريباً عملياً متقدماً على أدوات وتقنيات أدوبي في تصميم الفيديو، مما يساعد المشاركين على تطوير مهاراتهم واجتياز اختبار ACP بنجاح'
                        link='https://anasacademy.uk/ '
                        img ={Video}
                        isSpecial={true}
                    />
                </div>
            </div>
            <GuidanceSection />
            <Footer />
        </>
    );
}

export default PreparationsCoursesScreen;