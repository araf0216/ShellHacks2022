import React from "react";
import CallToAction from "../components/CallToAction";
import Description from "../components/Description";
import Ratings from "../components/Ratings";
import '../App.css'

function Home() {
    return (
      <div className="App">
        <CallToAction />
        <Description />
        <Ratings />
      </div>
    );
  }

  export default Home