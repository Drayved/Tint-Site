import React, { useState, useEffect } from "react"

export default function Header(){
    const [showMenu, setShowMenu] = useState(false)
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 770)

    const handleLogoClick = () => {
        window.location.reload()
        window.scrollTo(0, 0)
      }

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

    return(
        <div id="home" className="header-container">
            <div className="header-nav-container">

                <ul className={`header-navbar ${showMenu ? "show" : "hidden"}`}>
                    <li className={isSmallScreen ? "" : "hidden"}><a href="#home">HOME</a></li>
                    <li><a href="#services">SERVIES</a></li>
                    <li><a href="#quote">QUOTE</a></li>
                    {!isSmallScreen ? <li className="header-nav-logo" onClick={handleLogoClick}>YOUR LOGO HERE<span>YOUR NAME HERE</span></li> : ""}
                    <li><a href="#contact">CONTACT</a></li>
                    <li><a href="#reviews">REVIEWS</a></li>
                </ul>

                <div className="header-nav-toggle" onClick={handleMenuClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className="small-logo-container">
                <h3 className="logo-small-screen" onClick={handleLogoClick}>YOUR LOGO HERE<span>YOUR NAME HERE</span></h3>
            </div>
           
            <div className="header-titles">
                <h1 className="header-title">SERVING CUSTOMERS FOR 25 YEARS</h1>
                <h4 className="header-subtitle">Kentuckys premier tinting service</h4>
            </div>
        </div>
       
        
    )
}