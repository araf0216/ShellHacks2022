import React from "react";
import DescriptionImg from "../assets/descriptions.png"

const Description = () => {
    return (
        <div className="Description">
            <img src={DescriptionImg} alt="Payments" />
            <div className="Description-content">
                <h2>Get control over your subscriptions</h2>
                <p>
                    Never pay for an unused subscription again. <br/>
                    SubAlert will instantly find and track all of your subscriptions. <br/>
                    We will cancel your unused subscriptions so you don't have too. <br/>
                </p>
            </div>
        </div>
    )
}

export default Description