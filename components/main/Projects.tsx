"use client"
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import { LinkPreview } from "../ui/link-preview";

const Projects = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-20 pb-0" id="projects">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center py-10 px-4 md:px-8 lg:px-10">
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
          >
            My Projects
          </motion.div>
          <motion.div
            variants={slideInFromRight(0.5)}
            className="cursive text-[20px] text-gray-200 mt-[10px] text-center"
          >
            Explore my innovative and impactful projects.
          </motion.div>
        </div>

        {/* Projects Grid - Same as original */}
        <div className="grid grid-cols-1 z-40 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-10 px-4 md:px-10 w-full">
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:bg-black dark:border-white/[0.2] border-black/[0.1] dark:bg-opacity-30 w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              munchmate
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              munchmate is a food delivery website that allows users to browse menus, place orders, and have their favorite meals delivered right to their doorstep.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/munchmate.png"
                height={1000}
                width={1000}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Munchmate Thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-8">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://munchmate.onrender.com/"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Live →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:text-black text-white text-xs font-bold"
              >
                <Link href="https://github.com/sujal-GITHUB/munchmate.git">
                  <Image
                    src="/gitwhite.png"
                    height={18}
                    width={18}
                    className="w-4 h-4 object-cover rounded-xl"
                    alt="GitHub Repository"
                  />
                </Link>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:bg-black dark:border-white/[0.2] border-black/[0.1] dark:bg-opacity-30 w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Parallelia
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Parallelia is an immersive platform that connects users in dynamic virtual spaces, enabling seamless interaction in a responsive environment.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/parallelia.png"
                height={1000}
                width={1000}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Munchmate Thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-8">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/sujal-GITHUB/Parallelia"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Live →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:text-black text-white text-xs font-bold"
              >
                <Link href="https://github.com/sujal-GITHUB/Parallelia">
                  <Image
                    src="/gitwhite.png"
                    height={18}
                    width={18}
                    className="w-4 h-4 object-cover rounded-xl"
                    alt="GitHub Repository"
                  />
                </Link>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:bg-black dark:border-white/[0.2] border-black/[0.1] dark:bg-opacity-30 w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Serene Stay
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Serene Stay is a platform offering personalized accommodations, seamless bookings, and AI-driven recommendations for a hassle-free experience.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/serene-stay.png"
                height={1000}
                width={1000}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Munchmate Thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-8">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/sujal-GITHUB/Serene-Stay.git"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Live →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:text-black text-white text-xs font-bold"
              >
                <Link href="https://github.com/sujal-GITHUB/Serene-Stay.git">
                  <Image
                    src="/gitwhite.png"
                    height={18}
                    width={18}
                    className="w-4 h-4 object-cover rounded-xl"
                    alt="GitHub Repository"
                  />
                </Link>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:bg-black dark:border-white/[0.2] border-black/[0.1] dark:bg-opacity-30 w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              routeify
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              routeify is a ride-hailing app for booking rides, tracking drivers, and making payments, offering real-time updates and various ride options.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/routeify.png"
                height={1000}
                width={1000}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Munchmate Thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-8">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/sujal-GITHUB/Routeify.git"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Live →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:text-black text-white text-xs font-bold"
              >
                <Link href="https://github.com/sujal-GITHUB/Routeify.git">
                  <Image
                    src="/gitwhite.png"
                    height={18}
                    width={18}
                    className="w-4 h-4 object-cover rounded-xl"
                    alt="GitHub Repository"
                  />
                </Link>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:bg-black dark:border-white/[0.2] border-black/[0.1] dark:bg-opacity-30 w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              PriceSeer
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              PriceSeer is an AI-driven platform that predicts house prices using machine learning, helping users make informed property decisions.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/priceseer.jpg"
                height={1000}
                width={1000}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Munchmate Thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-8">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/sujal-GITHUB/PriceSeer"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Live →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:text-black text-white text-xs font-bold"
              >
                <Link href="https://github.com/sujal-GITHUB/PriceSeer">
                  <Image
                    src="/gitwhite.png"
                    height={18}
                    width={18}
                    className="w-4 h-4 object-cover rounded-xl"
                    alt="GitHub Repository"
                  />
                </Link>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:bg-black dark:border-white/[0.2] border-black/[0.1] dark:bg-opacity-30 w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              RookAndRoll
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              RookAndRoll is a chess game platform where players can play classic chess matches against each other, offering an engaging and competitive environment.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/rookandroll.png"
                height={1000}
                width={1000}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Munchmate Thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-8">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/sujal-GITHUB/RookAndRoll"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Live →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:text-black text-white text-xs font-bold"
              >
                <Link href="https://github.com/sujal-GITHUB/RookAndRoll">
                  <Image
                    src="/gitwhite.png"
                    height={18}
                    width={18}
                    className="w-4 h-4 object-cover rounded-xl"
                    alt="GitHub Repository"
                  />
                </Link>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
      </div>

      {/* ContainerScroll visible only on md and larger screens */}
      <div className="hidden lg:block">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-3xl md:text-4xl font-semibold z-40 text-black dark:text-white">
                Checkout my <br />
                <span className="text-[4rem] md:text-[6rem] font-bold mt-1 leading-none">
                  Resume
                </span>
              </h1>
            </>
          }
        >
          <div className="relative">
            <Image
              src="/resume.png"
              alt="hero"
              layout="fill"
              className="object-cover sm:object-center rounded-2xl"
            />
          </div>
        </ContainerScroll>
      </div>

      {/* LinkPreview section visible only on smaller screens */}
      <div className="block lg:hidden">
        <div className="flex justify-center items-center h-auto p-5 text-center flex-col px-4">
          <p className="text-neutral-500 dark:text-neutral-400 z-40 text-xl text-center md:text-3xl max-w-3xl mb-10">
            Checkout my {" "}
            <LinkPreview
              url="https://drive.google.com/file/d/1Pg_eonejIlWRJhz8G6_AVFBA_sxZu0KO/view?usp=sharing"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
            >
              Resume
            </LinkPreview>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Projects;