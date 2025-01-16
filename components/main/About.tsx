"use client"
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import createGlobe from "cobe";
import { useEffect, useRef, useId, useState } from "react";
import { motion } from "framer-motion";
import { CardSpotlight } from "../ui/card-spotlight";
import { AnimatePresence } from "framer-motion";
import { useOutsideClick } from "../ui/use-outside-click";

export function About() {
  const features = [
    {
      title: "My Education",
      description: "A glimpse into my academic journey, highlighting key achievements and lessons learned along the way.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "My Photography",
      description:
        "Some of the stunning captured scenes with my photography skills.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "My Expertise",
      description: "Explore the diverse domains I work with and gain insights into my expertise across various fields.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "My Origin",
      description: "My home, My working place : Punjab, India",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];


  return (
    <div className="relative z-20 pb-0 lg:py-0 max-w-7xl mx-auto" id="about-me">
      <div className="relative ">
      <div className="px-8">
        <h4 className="text-4xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          About Me
        </h4>
      </div>
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    // Handler to close the modal when the Escape key is pressed
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    // Disable body scroll when a card is active (modal is open)
    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable body scroll when no card is active
      document.body.style.overflow = "auto";
    }

    // Add and clean up the Escape key listener
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  // Close modal if clicked outside of the active card's layout
  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="relative flex py-8 px-2 mt-10 gap-10 h-auto bg-transparent">
      <AnimatePresence>
        {/* Overlay for active layout */}
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {/* Active layout (modal for the selected card) */}
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            {/* Close button for mobile view */}
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            {/* Card details modal */}
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-10/12 max-w-[500px] mt-36 md:mt-0 h-fit md:mx-0 md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-[#080821] sm:rounded-3xl overflow-hidden"
            >
              {/* Modal image */}
              <motion.div layoutId={`image-${active.title}-${id}`} className="relative w-full flex justify-center">
                <Image
                  priority
                  width={200} // Use 0 so the image takes up the full width of the container
                  height={200} // Use 0 to allow dynamic height based on the container
                  src={active.src}
                  alt={active.title}
                  className="w-full h-auto max-h-[10vh] mt-5 lg:max-h-[20vh] object-contain sm:rounded-tr-lg sm:rounded-tl-lg"
                />
              </motion.div>

              <div>
                {/* Modal title and description */}
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>
                {/* Modal content */}
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      {/* Inactive layout (list of cards) */}
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-[#080821] rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 items-center flex-col md:flex-row ">
              {/* Card image */}
              <motion.div layoutId={`image-${card.title}-${id}`} className="">
                <Image
                  width={200}
                  height={200}
                  src={card.src}
                  alt={card.title}
                  className="h-38 w-40 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                {/* Card title and description */}
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            {/* Call-to-action button */}
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-blue-950 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
      {/* Gradient overlay for inactive layout */}
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b  w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <CardSpotlight className="h-auto w-full mt-10 mb-10 p-4 md:mt-20 md:mb-20 md:p-6 lg:p-8">
      <p className="text-lg lg:text-lg xl:text-xl font-bold relative z-20 mt-2 text-white text-left">
        Specializations
      </p>
      <div className="text-neutral-200 mt-4 relative z-20 text-sm md:text-base xl:text-md">
        <p className="text-left">Below are the fields I specialize in:</p>
        <ul className="list-none mt-2 space-y-2">
          {/* Frontend Development */}
          <Step
            title={
              <>
                <span className="hidden sm:inline lg:hidden xl:inline">
                  Frontend Development (React, Next.js, TailwindCSS)
                </span>
                <span className="inline sm:hidden lg:inline xl:hidden">Frontend Development</span>
              </>
            }
          />
          {/* Backend Development */}
          <Step
            title={
              <>
                <span className="hidden sm:inline lg:hidden xl:inline">
                  Backend Development (Node.js, Express, MongoDB)
                </span>
                <span className="inline sm:hidden lg:inline xl:hidden">Backend Development</span>
              </>
            }
          />
          {/* Machine Learning */}
          <Step
            title={
              <>
                <span className="hidden sm:inline lg:hidden xl:inline">
                  Machine Learning (Python, TensorFlow, Scikit-learn)
                </span>
                <span className="inline sm:hidden lg:inline xl:hidden">Machine Learning</span>
              </>
            }
          />
          {/* Cloud Computing */}
          <Step
            title={
              <>
                <span className="hidden sm:inline lg:hidden xl:inline">
                  Cloud Computing (AWS, Docker)
                </span>
                <span className="inline sm:hidden lg:inline xl:hidden">Cloud Computing</span>
              </>
            }
          />
          {/* UI/UX Design */}
          <Step
            title={
              <>
                <span className="hidden sm:inline lg:hidden xl:inline">
                  UI/UX Design (Figma)
                </span>
                <span className="inline sm:hidden lg:inline xl:hidden">UI/UX Design</span>
              </>
            }
          />
          {/* Web 3 */}
          <Step
            title={
              <>
                <span className="hidden sm:inline lg:hidden xl:inline">
                  Web 3 (Solidity, Ethereum, Smart Contracts)
                </span>
                <span className="inline sm:hidden lg:inline xl:hidden">Web 3</span>
              </>
            }
          />
          {/* Version Control */}
          <Step
            title={
              <>
                <span className="hidden sm:inline lg:hidden xl:inline">
                  Version Control (Git, GitHub, GitLab)
                </span>
                <span className="inline sm:hidden lg:inline xl:hidden">Version Control</span>
              </>
            }
          />
          {/* DevOps */}
          <Step
            title={
              <>
                <span className="hidden sm:inline lg:hidden xl:inline">
                  DevOps (CI/CD, Dockerization)
                </span>
                <span className="inline sm:hidden lg:inline xl:hidden">DevOps</span>
              </>
            }
          />
        </ul>

      </div>
      <p className="text-neutral-300 mt-4 relative z-20 text-xs md:text-sm lg:text-base text-left">
        With a solid foundation and experience in these domains, I can deliver
        impactful and innovative solutions tailored to project needs.
      </p>
    </CardSpotlight>
  );
};

export const SkeletonTwo = () => {
  const images = [
    "/manali1.jpg",
    "/manali2.jpg",
    "/shimla1.jpg",
    "/shimla2.jpg",
    "/shimla3.jpg",
    "/amritsar1.jpg",
    "/fool1.jpg",
    "/jaipur1.jpg",
    "/mountain1.jpg",
    "/mountain2.jpg",
    "/mountain3.jpg",
    "/mountain4.jpg",
  ];

  const firstRowImages = images.slice(0, Math.ceil(images.length / 2));
  const secondRowImages = images.slice(Math.ceil(images.length / 2));

  const imageVariants = {
    whileHover: {
      scale: 1.5,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.5,
      rotate: 0,
      zIndex: 100,
    },
  };

  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      {/* First Row */}
      <div className="flex flex-row -ml-20">
        {firstRowImages.map((image, idx) => (
          <motion.div
            key={`first-row-image-${idx}`}
            variants={imageVariants}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt={`Image ${idx + 1}`}
              width={500}
              height={500}
              className="rounded-lg h-32 w-32 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>

      {/* Second Row */}
      <div className="flex flex-row">
        {secondRowImages.map((image, idx) => (
          <motion.div
            key={`second-row-image-${idx}`}
            variants={imageVariants}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt={`Image ${idx + 1}`}
              width={500}
              height={500}
              className="rounded-lg h-32 w-32 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>

      {/* Left Gradient Overlay */}
      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent h-full pointer-events-none" />

      {/* Right Gradient Overlay */}
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const devicePixelRatio = window.devicePixelRatio || 1;
    const canvasWidth = 600;
    const canvasHeight = 600;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: devicePixelRatio,
      width: canvasWidth * devicePixelRatio,
      height: canvasHeight * devicePixelRatio,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1], // General marker color
      glowColor: [0.1, 0.8, 1], // Glow color matching Punjab's marker
      markers: [
        // Punjab, India with glow effect
        { location: [31.1471, 75.3412], size: 0.05 },
      ],
      onRender: (state) => {
        // Update the globe's rotation
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy(); // Clean up the globe on component unmount
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: 600,
        height: 600,
        maxWidth: "100%",
        aspectRatio: "1",
      }}
      className={className}
    />
  );
};

const Step = ({ title }: any) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  )
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "B.Tech.",
    title: "Dr B R Ambedkar National Institute of Technoogy Jalandhar",
    src: "/nitj.png",
    ctaText: "See",
    content: () => {
      return (
        <p>
          I am currently pursuing my Bachelor of Technology in Information Technology at the prestigious Dr. B. R. Ambedkar National Institute of Technology, Jalandhar, an institution renowned for its academic excellence and rigorous curriculum. Here, I have maintained a commendable CGPA of 7.10 showcasing my dedication to mastering complex concepts and emerging technologies. My journey at NIT Jalandhar has been transformative, providing me with a robust foundation in Information Technology and equipping me with the analytical and problem-solving skills essential for excelling in the tech industry.
        </p>
      );
    },
  },
  {
    description: "High School",
    title: "Bhartiya Vidya Mandir Sr. Sec. School",
    src: "/bvm.png",
    ctaText: "See",
    content: () => {
      return (
        <p>
          My academic excellence extends back to my school years, where I consistently stood out as a high achiever. I graduated from Bhartiya Vidya Mandir Sr. Sec. School in Ludhiana, earning an exceptional 92.2% in my Class XII CBSE board examinations. This achievement reflected my unwavering focus and ability to grasp intricate concepts, particularly in science and mathematics. Earlier, in Class X, I secured an impressive 95.6%, a testament to my consistent dedication and love for learning.
        </p>
      );
    },
  },
];