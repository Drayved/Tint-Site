import React from "react"

export default function FirstPitch(){
    
    return(
        <div className="first-pitch-container">
            <div className="pitch-container">
                <h3 className="pitch">Welcome to (company name) Window Tint & Clear Bra. We are professionals providing
                    quality installion of window tint, clear bra, and security film.
                </h3>
                <p className="pitch-details">We are located in (city here) and we've bee serving customers and dealerships for
                    (insert years here). Our products come with a lifetime warranty guarantee. We have
                    serviced automobiles, homes, businesses, R.V.'s, and motorcycles. We focus on 
                    convenience and service to our clients and dealers. 
                </p>
            </div>
            <div className="company-info">
                <div className="phone">
                    <h2 className="text-lg mb-3">PHONE</h2>
                    <p className="text-md">555-555-5555</p>
                </div>
                <div className="email">
                    <h2 className="text-lg mb-3">EMAIL</h2>
                    <p className="text-md">youremail@email.com</p>
                </div>
                <div className="hours">
                    <h2 className="text-lg mb-3">HOURS</h2>
                    <p className="text-md w-36">7 days a week - by appointment only</p>
                </div>
            </div>
            
        </div>
    )
}