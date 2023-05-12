import React, { useState, useEffect, useRef } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 770);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isNavFixed, setIsNavFixed] = useState(false);

  const headerRef = useRef(null);

  const handleLogoClick = () => {
    window.location.reload();
    window.scrollTo(0, 0);
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
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
          <li className={isSmallScreen ? "" : "hidden"}>
            <a className="cursor-pointer" onClick={handleLogoClick}>HOME</a>
          </li>
          <li>
            <a href="#services">SERVIES</a>
          </li>
          <li>
            <a href="#quote">QUOTE</a>
          </li>
          {!isSmallScreen ? (
            <li className="header-nav-logo" onClick={handleLogoClick}>
              YOUR LOGO HERE<span>YOUR NAME HERE</span>
            </li>
          ) : (
            ""
          )}
          <li>
            <a href="#contact">CONTACT</a>
          </li>
          <li>
            <a href="#reviews">REVIEWS</a>
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
            X
          </span>
        )}
      </div>

      <div className="small-logo-container">
        <h3 className="logo-small-screen" onClick={handleLogoClick}>
          YOUR LOGO HERE<span>YOUR NAME HERE</span>
        </h3>
      </div>

      <div className="header-titles">
        <h1 className="header-title">SERVING CUSTOMERS FOR 25 YEARS</h1>
        <h4 className="header-subtitle">Kentuckys premier tinting service</h4>
      </div>
    </div>
  );
}
