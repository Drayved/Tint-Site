import React from "react"

export default function FirstPitch(){
    
    return(
        <div className="first-pitch-container">
            <div className="pitch-container">
                <h3 className="pitch">Welcome to (your company) Window Tinting & Auto Services. We are professionals providing
                    quality installion of window tint, clear bra, and security film.
                </h3>
                <p className="pitch-details">We are located in Florence, KY and we've been providing customers and dealerships with
                    exceptional service since 2019. Our products come with a lifetime warranty guarantee. We have
                    serviced automobiles, homes, businesses, R.V.'s, and motorcycles. We focus on 
                    convenience and service to our clients and dealers. 
                </p>
            </div>
            <div className="company-info">
                <div className="phone">
                    <h2 className="text-lg mb-3 font-bold">PHONE</h2>
                    <p className="text-md italic">(555) 555-5555</p>
                </div>
                <div className="email">
                    <h2 className="text-lg mb-3 font-bold">EMAIL</h2>
                    <p className="text-md italic">youremail@yourcompany.com </p>
                </div>
                <div className="hours">
                    <h2 className="text-lg mb-3 font-bold">HOURS</h2>
                    <p className="text-md w-36 italic">Monday-Saturday 8am-5pm</p>
                </div>
            </div>
            
        </div>
    )
}