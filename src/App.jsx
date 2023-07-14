import React from "react"
import Header from "./components/Header"
import SlideShow from "./components/SlideShow"
import Form from "./components/Form";
import Footer from "./components/Footer";
import MidPitch from "./components/MidPitch";
import ServiceInfo from "./components/ServiceInfo";
import FirstPitch from "./components/FirstPitch";
import Reviews from "./components/Reviews";
import Map from "./components/Map";

const images = [
    '/images/blue-car.jpg',
    '/images/green-car.jpg',
    '/images/white-car.jpg',
    '/images/gray-car.jpg'
  ];

export default function App() {
    return (
        <div>
            <Header />
            <div className="pitch-map-container">
                <FirstPitch />
                <Map />
            </div>
            <ServiceInfo />
            <SlideShow images={images}/>
            <Form />
            <MidPitch />
            <Reviews />
            <Footer /> 
        </div>
    )
}
