import React from "react";

export default function Footer() {
  const handleBackToTop = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="footer-container">
      <div className="footer-btn-container">
        <button className="footer-btn" onClick={handleBackToTop}>
          BACK TO TOP
        </button>
      </div>
      <h4 className="footer-phone">(303) 803-5843 <span className="footer-email">EMAIL@EMAIL.COM</span></h4>
      <h4 className="footer-name">©2019 Your Company Name Here</h4>
    </div>
  );
}
