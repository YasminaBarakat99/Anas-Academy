import React, { useState } from 'react';
import '../Styles/Card.css';
import cardcheck from '../Images/card-check.png';
import '../Styles/Popup.css';

function Card({ title, status, description, price, duration, startDate, requirements, link}) {

    const monthNames = {
        يناير: "يناير",
        فبراير: "فبراير",
        مارس: "مارس",
        أبريل: "أبريل",
        مايو: "مايو",
        يونيو: "يونيو",
        يوليو: "يوليو",
        أغسطس: "أغسطس",
        سبتمبر: "سبتمبر",
        أكتوبر: "أكتوبر",
        نوفمبر: "نوفمبر",
        ديسمبر: "ديسمبر",
    };

    const formatStartDate = (date) => {
        // console.log(date)
        if (!date) {
            return "تاريخ بدء غير متوفر";
        }

        try {
            const [day, month, year] = date.split(" ");
            return `تبدأ الدراسة بتاريخ ${day} من شهر ${monthNames[month]} لعام ${year}`;
        } catch {
            return "تاريخ بدء غير صالح";
        }
    };

    const formattedDate = formatStartDate(startDate);


    const [showPopup, setShowPopup] = useState(false);

    const statusStyles = {
        open: {
            backgroundColor: "rgb(101, 203, 101)", // Green for open
            buttonText: "سجل الان", // "Register Now"
            buttonColor: "#f70387" // Pink button color for open
        },
        closed: {
            backgroundColor: "#FF0000", // Red for closed
            buttonText: "التسجيل مغلق", // "Registration Closed"
            buttonColor: "#6c757d", // Grey button color for closed
            cursor: 'auto'
        }
    };

    const currentStatus = statusStyles[status] || statusStyles.closed;

    const handleButtonClick = () => {
        if (status === "open") {
            setShowPopup(true);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className='card'>
            <div
                className='registeration-status'
                style={{ backgroundColor: currentStatus.backgroundColor }}
            >
                <span>{status === "open" ? "التسجيل متاح" : "انتهى التسجيل "}</span>
            </div>

            <div className='card-content'>
                <div className='card-description-section'>
                    <h2 className='card-title'>{title}</h2>
                    <p className='card-description'>{description}</p>
                </div>

                <div className='card-details'>
                    <h5 className='price'> 
                        <span>ريال سعودي</span>  
                        <span>{price}</span>
                    </h5>

                    <div className='details-section'>
                        <div className='details-item-cont'>
                            <div className='icon-container'><img src={cardcheck} alt='cardcheck' className='details-item-icon' /></div>
                            <span className='details-item-text'>تعليم مدمج تفاعلي</span>
                        </div>
                        <div className='details-item-cont'>
                            <div className='icon-container'><img src={cardcheck} alt='cardcheck' className='details-item-icon' /></div>
                            <span className='details-item-text'> 
                                <span>{duration}</span> 
                                <span>ساعات تدريبية</span>
                            </span>
                        </div>
                    </div>

                    <span className='course-start-date'> {formattedDate} </span>

                    <div
                        className='card-register-button'
                        style={{ backgroundColor: currentStatus.buttonColor, cursor: currentStatus.cursor }}
                        onClick={handleButtonClick}
                    >
                        <span className='card-button-text'>{status === "open" ? " سجل الان" : "التسجيل مغلق"}</span>
                    </div>
                </div>

            </div>

            {/* Popup */}
            {showPopup && (
                <div className='popup-overlay' onClick={closePopup}>
                    <div className='popup' onClick={(e) => e.stopPropagation()}>
                        <h2 className='popup-title'>{title}</h2>
                        <p className="popup-description">
                            {requirements ? requirements : "لا يوجد شروط"}
                        </p>
                        <div className='popup-buttons-container'>
                            <button className='popup-close-button' onClick={closePopup}>إغلاق</button>
                            <a href={link} className='popup-resume-button'> استمرار</a>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Card;
