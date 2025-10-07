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
    carrent,
    jobit,
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
      title: "Blender Artist",
      icon: web,
    },
    {
      title: "2D Animation",
      icon: mobile,
    },
    {
      title: "3D Animation",
      icon: backend,
    },
    {
      title: "Game dev",
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
      title: "Highschool",
      company_name: "Kendriya vidyalaya Malleshwaram",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Aug 2018 - April 2023",
      points: [
        "Kendriya Vidyalaya, Malleshwaram was founded on 4 July 1965.",
        "Because of high application numbers, the school introduced a second shift around 2018.",
        "It is among the few Kendriya Vidyalayas equipped with smart boards / e-classrooms and uses e-learning tools.",
        "It has grown from modest beginnings to become one of the prominent KVs in Bangalore..",
      ],
    },
    {
      title: "Undergraduation",
      company_name: "ST. Joseph University",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "july 2023 - ...",
      points: [
        "Founded in 1882, one of Bengaluru’s oldest and most reputed institutions.",
        "Gained university status in 2022, becoming India’s first Public-Private Partnership University.",
        "Run by the Jesuit order, with the motto “Fide et Labore” (Faith and Toil).",
        "Known for strong research, innovation, and interdisciplinary education.",
      ],
    },
    {
      title: "COLLEGE DAYS PRODUCTION",
      company_name: "Student production",
      icon: shopify,
      iconBg: "#383E56",
      date: "Dec 2023 - running",
      points: [
        "A group of students running a film production creating innovative stories with passion.",
        "Known for their best work 'VELICHAM' which has won many awards across film festival.",
        "With cinema as their passion they are on a jouney to create movies that touches every human and give voices to the voicelss.",
       
      ],
    },
    {
      title: "Aceofabyss",
      company_name: "A digital art account",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Present",
      points: [
        "My fan art focuses on bringing characters to life with strong emotion and expression..",
        "I love experimenting with color and lighting to make each piece stand out.",
        "My work reflects my genuine passion for the fandoms I create art for.",
        "I’ve developed a unique style while staying true to the essence of every character.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Their digital artworks always stand out with vibrant energy.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "They keep experimenting with styles, and it always turns out stunning.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Their art style is both unique and evolving — that’s real dedication!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "RED PILL",
      description:
        "A student made shortfilm filled with unexpected twist by college days production and directed by me",
      tags: [
        {
          name: "twist",
          color: "blue-text-gradient",
        },
        {
          name: "cdp",
          color: "green-text-gradient",
        },
        {
          name: "redpill",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://www.instagram.com/p/DHtOob7ozS8/?utm_source=ig_web_copy_link&igsh=b3B3YTR0aWtyOHRv",
    },
    {
      name: "Digital Art",
      description:
        "A digital art account for fan arts and passion projects.",
      tags: [
        {
          name: "Digitalart",
          color: "blue-text-gradient",
        },
        {
          name: "fanart",
          color: "green-text-gradient",
        },
        {
          name: "aceofabyss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "TOYLET",
      description:
        "Did thumbnail for a student shortfilm.",
      tags: [
        {
          name: "Toilet",
          color: "blue-text-gradient",
        },
        {
          name: "shortfilm",
          color: "green-text-gradient",
        },
        {
          name: "Thumbnail",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://youtu.be/O_43xuui3DA?si=-QC1B0wv_1nuPLBW",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };