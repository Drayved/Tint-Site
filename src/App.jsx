import React from "react"
import Header from "./components/Header"
import SlideShow from "./components/SlideShow"
import Form from "./components/Form";
import Footer from "./components/Footer";
import MidPitch from "./components/MidPitch";
import ServiceInfo from "./components/ServiceInfo";
import FirstPitch from "./components/FirstPitch";
import Reviews from "./components/Reviews";

const images = [
    '/images/urus.jpg',
    '/images/first-pic.jpg',
    '/images/second-pic.jpg',
    '/images/third-pic.jpg',
  ];

export default function App() {
    return (
        <div>
            <Header />
            <FirstPitch />
            <ServiceInfo />
            <SlideShow images={images}/>
            <Form />
            <MidPitch />
            <Reviews />
            <Footer /> 
        </div>
    )
}
