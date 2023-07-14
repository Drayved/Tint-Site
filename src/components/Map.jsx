import React from "react"

export default function Map(){
    
    return(
        <div className="map-container">
            <div className="map-tint"></div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49498.29524506863!2d-84.41600670597944!3d39.160090463740296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841b39afdef07ed%3A0x8b070207c0a45d49!2sCincinnati%20Zoo%20%26%20Botanical%20Garden!5e0!3m2!1sen!2sus!4v1689361940691!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}