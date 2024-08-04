import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    music,
    docker,
    todo,
    grappltech,
    gurukul,
    blog,
    cdao,
    shouse,
    carrent,
    gurukuln,
    jobit,
    chess,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Machine Learning and AI Enthusiast",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UI / UX Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Machine Learning Mentor",
      company_name: "CDAO",
      icon: cdao,
      iconBg: "#E6DEDD",
      date: "Jul 2023 - Mar 2024",
      points: [
        "Designed 10+ event posters using Figma.",
        "Mentored in Machine Learning.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Contributed to UI design and implementation with React for a responsive user experience.",
      ],
    },
    {
      title: "Front End Web Developer",
      company_name: "GrapplTech",
      icon: grappltech,
      iconBg: "#E6DEDD",
      date: "Jun 2024 - Jul 2024",
      points: [
        "Developed the Hero section for the company website.",
        "Received professional training in HTML, CSS, JavaScript, and React JS.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Gurukul Foundation",
      icon: gurukul,
      iconBg: "#E6DEDD",
      date: "Jul 2024 - Aug 2024",
      points: [
        "Developing and maintaining company website using Next.js and other related technologies.",
        "Did projects realted to Machine Learning algorithms.",
        "Deployed and handled company website and email using Hostinger",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Shouse",
      description:
        "Web-based platform that allows users to buy gaming mice from various companies, providing a convenient and efficient solution for gaming and productivity needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "express",
          color: "yellow-text-gradient",
        },
      ],
      image: shouse,
      source_code_link: "https://github.com/sujal-GITHUB/Shouse",
    },
    {
      name: "Gurukul  Foundation",
      description:
        "Official website for Gurukul Foundation that enables users to search for projects, view estimated prices for projects, and show offerings by the comapany in various fields.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "accertinity.ui",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: gurukuln,
      source_code_link: "https://github.com/sujal-GITHUB/Gurukul-Foundation",
    },
    {
      name: "Chess.com",
      description:
        "A real-time online chess platform for seamless matchmaking, competitive play, and game tracking to enhance your chess experience.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "socket.io",
          color: "pink-text-gradient",
        },
      ],
      image: chess,
      source_code_link: "https://github.com/sujal-GITHUB/Chess.com",
    },
    {
      name: "Musiccc",
      description:
        "A music website project built with Next.js, TailwindCSS, featuring a sleek interface for users to explore and listen to a variety of music courses.",
        tags: [
          {
            name: "nextjs",
            color: "blue-text-gradient",
          },
          {
            name: "accertinity.ui",
            color: "green-text-gradient",
          },
          {
            name: "tailwind",
            color: "pink-text-gradient",
          },
      ],
      image: music,
      source_code_link: "https://github.com/sujal-GITHUB/Music-Website",
    },
    {
      name: "To-Do",
      description:
        "A user-friendly to-do website that allows real-time task management, seamless organization, progress tracking, and insightful productivity analytics.",
        tags: [
          {
            name: "javascript",
            color: "blue-text-gradient",
          },
          {
            name: "react",
            color: "green-text-gradient",
          },
          {
            name: "tailwind",
            color: "pink-text-gradient",
          },
      ],
      image: todo,
      source_code_link: "https://github.com/sujal-GITHUB/ToDo-App-Advanced",
    },
    {
      name: "Blog",
      description:
        "An engaging blog website where users can effortlessly create, edit, and share content while exploring a rich array of articles and insights.",
        tags: [
          {
            name: "appwrite",
            color: "blue-text-gradient",
          },
          {
            name: "react",
            color: "green-text-gradient",
          },
          {
            name: "tailwind",
            color: "pink-text-gradient",
          },
      ],
      image: blog,
      source_code_link: "https://github.com/sujal-GITHUB/Blog-Website",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };