import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-10 text-secondary text-[25px] max-w-3xl leading-[30px] hover:text-white"
        >
          <a href="https://resume-three-xi.vercel.app/">Resume</a>
        </motion.p>

        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Bio.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I am Sujal Kumar, a passionate software developer currently pursuing
          my Bachelor of Technology in Information Technology from Dr. B. R.
          Ambedkar National Institute of Technology, Jalandhar. I have
          maintained a CGPA of 7 and consistently strive for excellence in my
          academic and professional endeavors. My academic background also
          includes stellar performance at Bhartiya Vidya Mandir Sr. Sec. School
          in Ludhiana, where I achieved 92.2% in my XII standard and 95.6% in my
          X standard under the CBSE board.<br/> <br/>My technical skills are diverse and
          robust. I am proficient in programming languages such as C++, Python,
          and JavaScript, and have a good command of C, Java, and TypeScript. I
          have hands-on experience with databases like MySQL and MongoDB.
          Additionally, I am adept at using various tools and technologies,
          including Figma, Docker, Git, ReactJS, NextJS, TailwindCSS, Redux,
          Express, and Postman. My coursework has equipped me with a solid
          foundation in Data Structures and Algorithms, Database Management
          Systems, Object-Oriented Programming, Operating Systems, Computer
          Networking, and Data Mining and Machine Learning.<br/><br/> In my professional
          journey, I have contributed to College DAO by designing over ten event
          posters using Figma, mentoring peers in Machine Learning, and working
          on UI design and implementation with React to enhance user experience.
          As an SDE Intern at GrapplTech, I developed the Hero section for the
          company website and received professional training in HTML, CSS,
          JavaScript, and React JS.<br/><br/> I have also completed several impactful
          projects. I developed a full-stack blog website using the MERN stack,
          incorporating features for user authentication and secure data storage
          on Appwrite servers. Another significant project was creating a
          dynamic, responsive website for Gurukul Foundation using NextJS,
          TailwindCSS, and TypeScript, focusing on improving user interaction
          and performance. Additionally, I designed and implemented an
          e-commerce platform for music, Shouse, which features secure user
          authentication and backend functionalities for managing user accounts
          and transactions.<br/><br/> I take pride in my achievements, including active
          participation in coding platforms such as Coding Ninjas, GFG, and
          LeetCode, where I have solved over 350 problems. I have also showcased
          my innovative skills as a National Level Innovative Science Model
          Exhibitor and am a certified programmer in C++ and Python.<br/><br/> I am always
          eager to learn and grow, seeking opportunities to apply my skills and
          knowledge in real-world scenarios. You can reach out to me via email
          at sujal21200204@gmail.com, or connect with me on GitHub and LinkedIn.
        </motion.p>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
