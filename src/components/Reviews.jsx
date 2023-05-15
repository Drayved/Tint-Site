import React from "react";
import reviewsData from "../Data/reviewsData.jsx";

export default function Reviews() {
  return (
    <div id="reviews">
      <h1 className="reviews-title">See what our customers are saying about our work</h1>
      <div className="reviews-container">
        <div className="reviews-inner">
          {/* <script className="reviews" defer async src='https://cdn.trustindex.io/loader.js?62a084f15c43133ec1767e9e82f'></script> */}
          {Object.values(reviewsData).map(person => (
            <div className="reviews" key={person.name}>
              <h2 className="review-stars">{person.stars}</h2>
              <div className="review-right-col">
                <p className="review-desc">{person.desc}</p>
                <h1 className="review-name">-{person.name}</h1>
              </div>

            </div>
          ))}
            <div className="google-link-container">
                <a 
                href="https://www.google.com/search?q=peach+and+cake+reviews&rlz=1C1CHBD_enUS928US928&oq=peach+and+cake+reviews&aqs=chrome.0.69i59j0i22i30j0i390i650l3j69i60l3.3061j0j4&sourceid=chrome&ie=UTF-8#ip=1&lrd=0x8841c71a6cf0d56f:0x784653a516cff427,1,,,," 
                className="google-reviews">
                    Read more on Google ⇒
                </a> 

                <a 
                href="https://www.google.com/search?q=peach+and+cake+reviews&rlz=1C1CHBD_enUS928US928&oq=peach+and+cake+reviews&aqs=chrome.0.69i59j0i22i30j0i390i650l3j69i60l3.3061j0j4&sourceid=chrome&ie=UTF-8#lrd=0x8841c71a6cf0d56f:0x784653a516cff427,3,,,," 
                className="google-write">
                    Write a review ⇒
                </a>    
            </div>  
        </div>
      </div>
    </div>
  );
}
