import React from "react";
import RatingsSVG from "../assets/rating.svg"
import RatingOne from "../assets/rating1.svg"

const Ratings = () => {
    return (
        <div className="Ratings">
            <h2>
                Join the 1.1 million+ college students <br/>
                who trust SubAlert for their subscription management needs
            </h2>
            <div className="Ratings-stars">
                <div className="stars">
                    <img src={RatingOne} alt="ratings stars" />
                    <img src={RatingOne} alt="ratings stars" />
                    <img src={RatingOne} alt="ratings stars" />
                    <img src={RatingOne} alt="ratings stars" />
                    <img src={RatingsSVG} alt="ratings stars" />
                </div>
                <div className="stars-text">
                    4.5 Stars (7.5k Ratings)
                </div>
            </div>
            <div className="Ratings-text">
                We've worked hard over the years saving college
                students a total of $87 million. 
            </div>
        </div>

    )
}

export default Ratings