import {
  All_skills
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      {/* Full Stack Skills */}
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center w-full px-4 sm:px-6 lg:px-8">
        {Array.isArray(All_skills) && All_skills.map((item, index) => {
          const image = Array.isArray(item) ? item[0] : item;
          return (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
              className="w-12 sm:w-16 md:w-20 lg:w-24" // Responsive width
            />
          );
        })}
      </div>

      {/* Background Video */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto object-cover"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
