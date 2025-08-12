import React from "react";
import firstPic from "../assets/aboutMovie1.avif"
import secondPic from "../assets/aboutMovie2.avif"

const AboutUsPage = () => {
  return (
    <div>
      <h2 className="font-bold">About Us Page</h2>

      <div className="shadow-xl">
        <h3>Our Goal</h3>
        <div className="flex flex-col md:flex-row gap-2">
          <img src={firstPic} alt="" />
          <p>Storing all kinds of movies in one place.</p>
        </div>
      </div>

      <div className="shadow-xl">
        <h3>Our Mission</h3>
        <div className="flex flex-col md:flex-row gap-2">
          <img src={secondPic} alt="" />
          <p>Centralize all movie. User can add movie. Select favourite movie, update movie etc.</p>
        </div>
      </div>

      <div className="shadow-xl">
        <h3>Our Vision</h3>
        <div className="flex flex-col md:flex-row gap-2">
          <img src={firstPic} alt="" />
          <p>Give all kinds of support in one website.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
