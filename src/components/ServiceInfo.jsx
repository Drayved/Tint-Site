import React from "react"

export default function ServiceInfo(){
    
    return(
        <div id="services">
            <div className="vehicle-img"></div>
            <div className="services">
                <div className="second-pitch-container">
                    <h2 className="second-pitch">At (Company Name) we offer a variety of window tinting and clear bra applications.
                        Whether you need automotive, commercial, or residential work, our expert installers will 
                        make sure the job gets done right the first time.
                    </h2>
                    <p className="second-pitch-details">Our customer and their investments are extremely important to us. We look forward to working with you!</p>
                </div>
                <div className="pic-info-container">
                    <div>
                        <img className="info-images" src="/images/garage-pic.jpg" alt="Blue Skyline" />
                        <h3 className="list-title">WINDOW TINT</h3>
                        <ol className="service-list">
                            <li>Blocks 97% of harmful UV rays</li>
                            <li>Reduces air conditioning costs</li>
                            <li>Reduces glare and eye discomfort</li>
                            <li>Provides privacy</li>
                        </ol>
                    </div>
                    <div>
                        <img className="info-images" src="/images/second-pic(2).jpg" alt="White BMW" />
                        <h3 className="list-title">CLEAR BRA</h3>
                        <ol className="service-list">
                            <li>High grade clear polyurethane</li>
                            <li>Applied to high impact areas</li>
                            <li>Prevents damage from road debris</li>
                            <li>Officially licensed by NASCAR</li>
                        </ol>
                    </div>
                    <div>
                        <img className="info-images" src="/images/third-pic(2).jpg" alt="Broken Glass" />
                        <h3 className="list-title">SECURITY FILM</h3>
                        <ol className="service-list">
                            <li>Perfect for your home or business</li>
                            <li>Protects against natural disasters</li>
                            <li>Holds glass in place</li>
                            <li>Deters criminals</li>
                        </ol>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}