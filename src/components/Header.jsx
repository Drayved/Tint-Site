import React, { useState, useEffect, useRef } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 770);
  const [isNavFixed, setIsNavFixed] = useState(false);

  const headerRef = useRef(null);

  const handleLogoClick = () => {
    window.location.reload();
    window.scrollTo(0, 0);
    
    window.innerWidth < 770 ?
    setShowMenu(!showMenu) : ""
  };

  const handleMenuClick = () => {
    window.innerWidth < 770 ?
    setShowMenu(!showMenu) : ""
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 770);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 600) {
      setIsNavFixed(true);
    } else {
      setIsNavFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);




  return (
    <div ref={headerRef} id="home" className="header-container">
      <div
        className={`header-nav-container ${
          isNavFixed ? "nav-fixed" : ""
        }`}
      >
        
        <ul className={`header-navbar ${showMenu ? "show" : "hidden"}`}>
        {!isSmallScreen ? (
            <h3 className="header-nav-logo" onClick={handleLogoClick}>
              PEACH & CAKE<span className="text-sm">Window Tinting & Auto Services</span>
            </h3>
          ) : (
            ""
          )}
          <li className={isSmallScreen ? "" : "hidden"}>
            <a className="cur" onClick={handleLogoClick }>HOME</a>
          </li>
          <li>
            <a href="#services" onClick={handleMenuClick}>SERVICES</a>
          </li>
          <li>
            <a href="#quote" onClick={handleMenuClick}>QUOTE</a>
          </li>
          
          <li>
            <a href="#contact" onClick={handleMenuClick}>CONTACT</a>
          </li>
          <li>
            <a href="#reviews" onClick={handleMenuClick}>REVIEWS</a>
          </li>
        </ul>
        {!showMenu ? (
          <div className="header-nav-toggle" onClick={handleMenuClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : (
          <span onClick={handleMenuClick} className="close-nav">
            ✖
          </span>
        )}
      </div>

      <div className="small-logo-container">
        <h3 className="logo-small-screen" onClick={handleLogoClick}>
          PEACH & CAKE<span className="text-sm">Window Tinting & Auto Services</span>
        </h3>
      </div>

      <div className="header-titles">
        <h1 className="header-title">EXPERIENCE EXCELLENCE IN AUTO SERVICES </h1>
        <h4 className="header-subtitle">Kentucky's premier tinting service</h4>
      </div>
    </div>
  );
}
