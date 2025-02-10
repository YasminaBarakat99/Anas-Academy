import React from "react";
import "../Styles/Card.css";
import "../Styles/PreparationsCourseScreen.css";

function NewCard({ title, status, description, link, img, isSpecial  }) {
  const statusStyles = {
    open: {
      backgroundColor: "rgb(101, 203, 101)", // Green for open
      buttonText: "سجل الان", // "Register Now"
      buttonColor: "#5E0A83", // Pink button color for open
    },
    closed: {
      backgroundColor: "#FF0000", // Red for closed
      buttonText: "التسجيل مغلق", // "Registration Closed"
      buttonColor: "#6c757d", // Grey button color for closed
      cursor: "auto",
    },
  };

  const currentStatus = statusStyles[status] || statusStyles.closed;

  return (
    <div className="new-card">
      <div
        className="registeration-status"
        style={{ backgroundColor: currentStatus.backgroundColor }}
      >
        <span>{status === "open" ? "التسجيل متاح" : "انتهى التسجيل "}</span>
      </div>

      <div className="new-card-content">
        <img
          src={img}
          alt={img}
          className={`card-image ${isSpecial ? "special-card-image" : ""}`}
        />{" "}
        <div className="card-description-section">
          <h2 className="new-card-title">{title}</h2>
          <p className="new-card-description">{description}</p>
        </div>
        <a
          className="new-card-register-button"
          href={link}
          style={{
            backgroundColor: currentStatus.buttonColor,
            cursor: currentStatus.cursor,
          }}
        >
          <span className="card-button-text">
            {status === "open" ? "   تفاصيل البرنامج  " : "التسجيل مغلق"}
          </span>
        </a>
      </div>
    </div>
  );
}

export default NewCard;
