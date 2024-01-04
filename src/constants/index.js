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
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    bncc,
    icpc,
    carrent,
    jobit,
    tripguide,
    wedding,
    porto,
    threejs,
    mysql,
    vuejs,
    
    
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Vue JS",
      icon: vuejs,
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
      name: "mysql",
      icon: mysql,
    },
  ];
  
  const experiences = [
    {
      title: "Human Resource Activist",
      company_name: "Binus Computer Club (BNCC)",
      icon: bncc,
      iconBg: "#383E56",
      date: "2021 - 2022",
      points: [
        "Responsible for organizing and maintaining human resources in BNCC",
        "Work in a team to create an event with over 1000 participants.",
      ],
    },
    {
      title: "Contestant",
      company_name: "International Collegiate Programming Contest",
      icon: icpc,
      iconBg: "#E6DEDD",
      date: "2022",
      points: [
        "Competing nationally against Top Universities in Indonesia.",
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
      name: "Event and Wedding Marketplace",
      description:
        "Web-based platform that allows users to seamlessly plan, discover, and book a wide range of events and services, fostering a collaborative and efficient event management experience.",
      tags: [
        {
          name: "figma",
          color: "blue-text-gradient",
        },
      ],
      image: wedding,
      source_code_link: "https://www.figma.com/file/tkRc0OOIiHKs1fh1zzvvcV/eCon---Entre-team-library?type=design&node-id=0-1&mode=design",
    },
    {
      name: "Portofolio Web",
      description:
        "I designed and developed this portfolio website to showcase my skills in web development, reflecting my commitment to creating seamless and visually engaging online experiences.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: porto,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };