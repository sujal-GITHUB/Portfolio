import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return ( 
    <div className="relative flex flex-col mb-18 md:mb-40 lg:mb-0 h-screen w-full" id="hero">
      <HeroContent />
    </div>
  );
};

export default Hero;
