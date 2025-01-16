'use client';

import React, { useRef, useState } from "react";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { FlipWords } from "../ui/flip-words";
import { FaPlay, FaPause } from "react-icons/fa"; 
import Link from "next/link";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import ModelViewer from '../ui/stormtrooper'

const HeroContent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const words = [
    { text: "Redefining" },
    { text: "What's" },
    { text: "Possible" },
  ];

  const wordss = [
    "impactful",
    "innovative",
    "inspiring",
    "transformative",
    "powerful",
    "groundbreaking",
    "meaningful",
    "dynamic",
    "influential",
    "creative",
    "visionary",
    "thought-provoking",
    "revolutionary",
    "engaging",
    "memorable",
    "exceptional",
    "captivating",
    "game-changing",
    "pioneering",
    "elevating",
  ];

  // Handle the play/pause button click
  const handlePlayPauseButtonClick = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause(); // Pause the audio
          setIsPlaying(false); // Update the state to show it's paused
        } else {
          await audioRef.current.play(); // Start playing the audio
          audioRef.current.muted = false; // Unmute after play
          setIsPlaying(true); // Update the state to show it's playing
        }
      } catch (error) {
        console.error("Audio play/pause error:", error);
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-18 lg:px-20 mt-28 lg:mt-40 w-full z-[20] gap-10 lg:gap-20"
    >
      {/* Text Section */}
      <div className="w-full lg:w-3/4 xl:w-1/2 px-5 lg:px-0 flex flex-col gap-6 text-center lg:text-start">
        {/* Animated Heading */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-3 md:gap-5 lg:gap-6 text-white"
        >
          <span className="text-transparent text-xl md:text-3xl lg:text-5xl font-bold p-0">
            <TypewriterEffect words={words} />
          </span>

          <span className="text-lg md:text-xl lg:text-2xl">
            Hi, I’m <span className="font-bold">Sujal Kumar</span>, crafting <FlipWords words={wordss} className="font-bold"/> solutions by turning complexity into elegance and functionality.
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-xs md:text-sm lg:text-md text-gray-400 my-4 md:my-5 max-w-full lg:max-w-[600px] mx-auto lg:mx-0"
        >
          I’m a Full-Stack Software Engineer with a proven track record in building robust websites and software solutions. Armed with advanced Machine Learning skills, I thrive on solving complex challenges. Explore my projects and see the difference.
        </motion.p>

        {/* Button */}
        <motion.div
        variants={slideInFromLeft(0.5)}
        className="flex gap-5 justify-center lg:justify-start">
        <Link href="#" onClick={(e) => scrollToSection(e, "about-me")}>
        <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
          <span>Know More</span>
        </HoverBorderGradient>
        </Link>

        <div className="flex justify-center items-center ml-5">
          {/* Audio element with muted initially */}
        <audio ref={audioRef} loop muted>
          <source src="/audio/toothless_dance.mp3" type="audio/mp3" />
        </audio>

        {/* Play/Pause button */}
        <button
          onClick={handlePlayPauseButtonClick}
          className="absolute z-40 transform  text-white border-2 rounded-full border-gray-500 px-2 py-2"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}  {/* Show play or pause icon */}
        </button>
        </div>
        </motion.div>
      </div>

      {/* Image Section */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full lg:w-1/3 xl:w-1/2 flex justify-center items-center"
      >
        <ModelViewer modelPath="/dancing_stormtrooper.glb" />
      </motion.div>
    </motion.div>
  );
};

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault(); // Prevent default link behavior
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start", // Align to the top of the section
      });
    }
  };

export default HeroContent;
