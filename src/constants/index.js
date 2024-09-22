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
  v1malls,
  medilinen,
  woodapple,
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
    title: "React",
    icon: web,
  },
  {
    title: "MongoDB",
    icon: mobile,
  },
  {
    title: "Nodejs",
    icon: backend,
  },
  {
    title: "Express",
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
];

const experiences = [
  {
    title: "Jr. MERN Stack Developer",
    company_name: "WoodApple Software Solutions",
    icon: woodapple,
    iconBg: "white",
    date: "Jan 2024 - Sept 2024",
    points: [
      "Designed and developed the entire backend and frontend for an e-commerce website, creating a seamless shopping experience for users.",
      "Built two frontends: one for the e-commerce application and another for the admin portal, enabling efficient management of products, orders, customers.",
      "Developed a robust backend using Node.js, Express, and MongoDB, ensuring secure and scalable data management.",
      "Integrated payment gateway.",
      "Implemented user authentication, role-based access control, and custom APIs for enhanced security and performance.",
      "Managed deployment and maintenance of the application, ensuring continuous operation and user satisfaction.",
      "Led the development of the entire frontend for a mall management system, focusing on a user-friendly interface and intuitive design.",
      "Handled onboarding processes for clients, users, and vendors, simplifying access and management for all stakeholders.",
      "Developed comprehensive billing and reporting modules, enabling efficient tracking and analysis of transactions.",
      "Collaborated closely with backend developers to integrate APIs and ensure seamless communication between the frontend and backend systems.",
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
    name: "Medilinen Solutions",
    description:
      "Medilinen Solutions is a specialized E-Commece platform for purchasing medical supplies like surgical gowns and hospital equipments. The platform offers a user-friendly shopping expeience, multiplepayment options (COD, Razorpay), and admin portal to track all the details to get a statistic analysis of all the required details.",
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
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: medilinen,
    source_code_link: "https://medilinensolutions.com/",
  },
  {
    name: "V1 Mall Management",
    description:
      "A Mall management application with 3 different portals for Admin, Customer and Vendor. It deals with all the requirements to manage a mall which consists of billing, reports, creation of accounts for admin, vendor and customers. It also provides ledger and other handy stuff to make it their go to app for all the requirements. It also provides dashboard for all the statistic analysis.",
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
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: v1malls,
    source_code_link: "https://admin.v1malls.com/login",
  },
];

export { services, technologies, experiences, testimonials, projects };
