import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ currentSection, scrollToSection }) => {
  return (
    <section id="hero" aria-label="Hero section with project call-to-action">
      <div className="row h-100 m-0">
        <div className="col-md-12 p-0 position-relative h-100vh">
          
          <header className="content hero-header">
            <h2 className="font-inter opacity-50 lh-1">Find The</h2>
            <h1 className="font-inter lh-1">Perfect</h1>
            <h3 className="font-inter lh-1">Fit</h3>

            <div className="hero_btn mt-md-5 d-flex justify-content-center">
              <Link to="/" className="btn btn-primary font-inter">
                Explore Advantages
              </Link>
            </div>

            <div className="secondary_content mt-md-5">
              <h2 className="font-inter">
                For Your <br /> project
              </h2>
            </div>
          </header>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
