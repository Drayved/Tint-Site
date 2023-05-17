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
      <h4 className="footer-phone">(859) 414-3453 <span className="footer-email">florence@sunstoppers.com</span></h4>
      <h4 className="footer-name">©2019 Peach & Cake</h4>
    </div>
  );
}
