import React from "react"

export default function Reviews(){

    return(
        <div id="reviews">
            <h1 className="reviews-title">See what our customer are saying about our work</h1>
            <div className="reviews-container ">
                
                <div className="reviews-inner">
                    <script className="reviews" defer async src='https://cdn.trustindex.io/loader.js?62a084f15c43133ec1767e9e82f'></script>
                </div>
            </div>
        </div>
    )
}