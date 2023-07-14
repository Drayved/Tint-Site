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
      <h4 className="footer-phone">(555) 555-5555 <span className="footer-email">youremail@yourcompany.com</span></h4>
      <h4 className="footer-name">©2019 Your Company</h4>
    </div>
  );
}
