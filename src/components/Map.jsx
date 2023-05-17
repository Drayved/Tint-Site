import React from "react"

export default function Map(){
    
    return(
        <div className="map-container">
            <div className="map-tint"></div>
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1844.3151599201979!2d-84.66383876437547!3d38.97523885484371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841c71a6cf0d56f%3A0x784653a516cff427!2sPeach%20and%20Cake%20Window%20Tinting%20%2F%20Sun%20Stoppers%20Florence!5e0!3m2!1sen!2sus!4v1684329212598!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}