import React from "react";
import firstPic from "../assets/aboutMovie1.avif";
import secondPic from "../assets/aboutMovie2.avif";

const AboutUsPage = () => {
  return (
    <div className="w-10/12 mx-auto space-y-4">
      <h2 className="font-bold">About Us Page</h2>
      <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img className="h-[250px]" src={firstPic} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Our Goal</h2>
          <p>Storing all kinds of movies in one place.</p>
        </div>
      </div>

      <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img className="h-[250px] w-[500px]" src={secondPic} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Our Misson</h2>
          <p>
            {" "}
            Centralize all movie. User can add movie. Select favourite movie,
            update movie etc.
          </p>
        </div>
      </div>

      <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img className="h-[250px]" src={firstPic} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Our Vision</h2>
          <p>Give all kinds of support in one website.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
