"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import { Timeline } from "../ui/timeline";

const Experience = () => {
  const data = [
    {
      title: "Jul 23 - Mar 24", // Removed apostrophe
      content: (
        <div>
          <div className="mb-8 ">
            <div className="relative w-2/12 pb-5">
              <Image
                src="/cdao.png"
                alt="cdao"
                width={50}
                height={0}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-xl">
              • Designed 10+ event posters using Figma. Mentored in Machine Learning.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-xl">
              • Implementing responsive design and ensuring cross-browser compatibility.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-xl">
              • Contributed to UI design and implementation with React for a responsive user experience.
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Jun 24 - Jul 24", // Removed apostrophe
      content: (
        <div>
          <div className="mb-8">
            <div className="relative w-1/12 pb-5">
              <Image
                src="/grappltech.png"
                alt="grappltech"
                width={10}
                height={0}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-xl">
              • Developed the Hero section for the company website. Received professional training React JS.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-xl">
              • Implementing responsive design and ensuring cross-browser compatibility.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-xl">
              • Participating in code reviews and providing constructive feedback to other developers.
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Jul 24 - Aug 24", // Removed apostrophe
      content: (
        <div>
          <div className="mb-8">
            <div className="relative w-1/12 pb-5">
              <Image
                src="/gurukul.png"
                alt="gurukul"
                width={50}
                height={0}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-xl">
              • Developing and maintaining the company website using Next.js and other related technologies.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-xl">
              • Deployed and handled company website and email using Hostinger.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-lg md:text-xl">
              • Maintaining and enhancing the company&#39;s online presence.
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="experience" className="pt-5">
      <Timeline data={data} />
    </section>
  );
};

export default Experience;
