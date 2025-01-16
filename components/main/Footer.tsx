"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "../ui/google-gemini-effect";
import { FocusCards } from "../ui/focus-cards";
import Image from "next/image";

const Footer = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Adjusted path lengths for reduced scrolling duration
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.5], [0.2, 1]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.5], [0.15, 1]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.5], [0.1, 1]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.5], [0.05, 1]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const cards = [
    {
      title: "Github",
      src: "/github.svg", // Local image
      link: "https://github.com/sujal-GITHUB", // Link for redirection
    },
    {
      title: "LinkedIn",
      src: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg", // External image
      link: "https://www.linkedin.com/in/sujal-kumar-38544b229/", // Link for redirection
    },
    {
      title: "X",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/1200px-X_logo.jpg", // External image
      link: "https://x.com/sujal_here", // Link for redirection
    },
    {
      title: "Instagram",
      src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg", // External image
      link: "https://www.instagram.com/sujal.exe_/?next=%2F", // Link for redirection
    },
    {
      title: "Leetcode",
      src: "/leetcode.png", // Local image
      link: "https://leetcode.com/u/sujal_kumar1/", // Link for redirection
    },
    {
      title: "Kaggle",
      src: "/kaggle.png", // Local image
      link: "https://www.kaggle.com/sujalkumar1597", // Link for redirection
    },
  ];

  return (
    <div className="pb-10 text-center text-xs sm:text-sm text-gray-500 z-50" id="contact">
      <div
        className="h-[200vh] w-full rounded-md relative overflow-clip"
        ref={ref}
      >
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        />
      </div>
      <FocusCards cards={cards} />
      <h1 className="text-4xl font-extralight text-center text-white">or</h1>
      <div className="flex justify-center pt-10 gap-3 md:gap-10 flex-col md:flex-row items-center pb-5 text-white">
        <div className="flex text-xs sm:text-base">
            <a
            href="mailto:sujal21102004@gmail.com"
            className="flex items-center group"
            >
            <Image
                width={50}
                height={50}
                src="/gmail.png"
                alt="gmail"
                className="pr-5 group-hover:scale-125 transition-transform duration-300 w-auto max-w-[50px]"
            />
            sujal21102004@gmail.com
            </a>
        </div>

        <div className="flex text-xs sm:text-base">
            <a
            href="tel:+919115664773"
            className="flex items-center group"
            >
            <Image
                width={50}
                height={50}
                src="/call.png"
                alt="call"
                className="pr-5 group-hover:scale-125 transition-transform duration-300 w-auto max-w-[50px]"
            />
            +91 9115664773
            </a>
        </div>
        </div>
      © 2025 sujal21102004@gmail.com . All rights reserved.
    </div>
  );
};

export default Footer;
