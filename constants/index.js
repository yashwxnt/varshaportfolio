import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Backend Developer",
    icon: <BackendIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Leadership",
    icon: <LeaderShipIcon />,
  },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
   
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    }
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    {
      name: "Styled-Components",
      icon: "/assets/tech/styled-components.png",
      link: "https://styled-components.com/",
    },
    {
      name: "Framer-motion",
      icon: "/assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },
    {
      name: "NextAuth.js",
      icon: "/assets/tech/nextauthjs.png",
      link: "https://next-auth.js.org/",
    }
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    }
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
  ],
};

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Think AI Labs",
    icon: "/assets/company/think-ai-labs.svg",
    iconBg: "#E6DEDD",
    date: "June 2022 - August 2022",
    points: [
      "Developed an automated web form generator with dynamic webpages, utilizing image processing techniques with OpenCV and Tesseract for data extraction.",
      "Simultaneously pursued a Machine Learning course, expanding knowledge in key algorithms and data handling techniques.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "The Sparks Foundation",
    icon: "/assets/company/sparks-foundation.svg",
    iconBg: "#E6DEDD",
    date: "July 2021 - August 2021",
    points: [
      "Created a web page with payment gateway integration using JavaScript, HTML, and CSS, providing seamless user experiences for online payments.",
      "Implemented MongoDB for stateless data storage and utilized Postman for API testing and server communication.",
    ],
  },
  {
    title: "Secretary",
    company_name: "Engineers Without Borders (EWB) - GITAM",
    icon: "/assets/company/ewb-gitam.svg",
    iconBg: "#E6DEDD",
    date: "June 2019 - June 2022",
    points: [
      "Led a project to design and implement a water distribution system for a rural community in Warangal, conducting site visits and collaborating with local engineers.",
      "Coordinated EWB awareness events on campus to promote the organization’s mission, effectively attracting and onboarding new members.",
    ],
  },
  {
    title: "Leadership Fellow",
    company_name: "KECTIL Leadership Program",
    icon: "/assets/company/kectil.svg",
    iconBg: "#E6DEDD",
    date: "February 2023 - Present",
    points: [
      "Selected as one of 200 global fellows, participating in leadership training focused on social rights and cultural improvement.",
      "Conducted extensive research on Indian social rights and proposed actionable measures to enhance community welfare.",
    ],
  },
  {
    title: "Campus Ambassador",
    company_name: "Indian School of Business",
    icon: "/assets/company/isb.svg",
    iconBg: "#E6DEDD",
    date: "January 2023 - March 2023",
    points: [
      "Represented the ISB Young Leaders Program, highlighting program benefits and providing guidance on admissions.",
      "Successfully assisted in the enrollment of 27 students, demonstrating effective outreach and promotional skills.",
    ],
  },
  {
    title: "Environmental Volunteer",
    company_name: "Local Environmental Initiatives",
    icon: "/assets/company/environmental-initiative.svg",
    iconBg: "#E6DEDD",
    date: "June 2021 - January 2022",
    points: [
      "Engaged in park clean-up efforts and maintenance, including litter collection and landscaping tasks.",
      "Participated in tree-planting activities, contributing to local environmental improvement and sustainability.",
    ],
  },
  {
    title: "Participant",
    company_name: "Accenture Innovation Challenge",
    icon: "/assets/company/accenture.svg",
    iconBg: "#E6DEDD",
    date: "June 2021 - November 2021",
    points: [
      "Competed as an individual contestant, reaching the semi-finals with a project proposal for a 'SMART SEWAGE SYSTEM.'",
      "Received a special mention for the project's ideation and gained an opportunity to interview at Accenture.",
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
    name: "Rubik’s Cube Solver",
    description:
      "A Python-based project that uses image processing and the Kociemba algorithm to solve a Rubik’s Cube by detecting colors and providing optimized moves. Developed with libraries like NumPy, Pandas, and OpenCV for preprocessing and solution generation.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "NumPy", color: "green-text-gradient" },
      { name: "Pandas", color: "pink-text-gradient" },
      { name: "OpenCV", color: "orange-text-gradient" },
      { name: "Kociemba Algorithm", color: "yellow-text-gradient" },
    ],
    image: "/assets/projects/rubiks-cube-solver.png",
    source_code_link: "https://github.com/yourusername/rubiks-cube-solver",
    deployed_link: "",
  },
  {
    name: "Intrusion Detection System",
    description:
      "An intrusion detection system developed using weighted classifiers and selection algorithms. This project classifies attack types based on user inputs and integrates a user interface. Built with Python, it utilizes the CFS DE-algorithm and classifiers like SVM, Random Forest, KNN, and MLP.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "CFS DE-algorithm", color: "green-text-gradient" },
      { name: "SVM", color: "pink-text-gradient" },
      { name: "Random Forest", color: "orange-text-gradient" },
      { name: "KNN", color: "yellow-text-gradient" },
      { name: "MLP", color: "purple-text-gradient" },
    ],
    image: "/assets/projects/intrusion-detection-system.png",
    source_code_link: "https://github.com/yourusername/intrusion-detection-system",
    deployed_link: "",
  },
  {
    name: "Mall Customer Segmentation",
    description:
      "A customer segmentation project aimed at identifying distinct customer groups within a supermarket environment. Utilized Python and clustering algorithms to analyze customer data and produce actionable insights for targeted marketing.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Clustering", color: "green-text-gradient" },
      { name: "Data Analysis", color: "pink-text-gradient" },
    ],
    image: "/assets/projects/mall-customer-segmentation.png",
    source_code_link: "https://github.com/yourusername/mall-customer-segmentation",
    deployed_link: "",
  },
  {
    name: "FinancialXplore",
    description:
      "A web-based platform for financial education that provides interactive tools and resources, including quizzes and personalized dashboards, to enhance user learning and engagement. Built using Angular, Node.js, Express.js, and MongoDB.",
    tags: [
      { name: "Angular", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Express.js", color: "pink-text-gradient" },
      { name: "MongoDB", color: "orange-text-gradient" },
    ],
    image: "/assets/projects/financialxplore.png",
    source_code_link: "https://github.com/yourusername/financialxplore",
    deployed_link: "",
  },
  {
    name: "Music Streaming Website - Melody Master",
    description:
      "A music streaming platform developed with Angular, featuring integration with the Spotify API. This platform includes personalized features like playlist creation and tailored music recommendations for users.",
    tags: [
      { name: "Angular", color: "blue-text-gradient" },
      { name: "Spotify API", color: "green-text-gradient" },
      { name: "Web Development", color: "pink-text-gradient" },
    ],
    image: "/assets/projects/melody-master.png",
    source_code_link: "https://github.com/yourusername/melody-master",
    deployed_link: "",
  },
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://twitter.com/",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/",
  },
];

const heroTexts = [
  "React/Next.js developer",
  500,
  "Freelancer",
  500,
  "Full-Stack developer",
  500,
  "Frontend developer",
  500,
  "Backend developer",
  500,
  "Tech Team Lead at GDSC MVJCE",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
