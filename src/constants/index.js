import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `At Hamro Tech, we’re not just developers—we're problem-solvers, creators, and collaborators. With a global team and a passion for innovation, we bring your vision to life through beautifully built, reliable, and scalable tech solutions. From startups to enterprises, we help businesses innovate, grow, and thrive through powerful technology and thoughtful design.`;

export const ABOUT_TEXT = `
Hamro Tech is a dynamic tech team consisting of five dedicated professionals—specialists in frontend, backend, mobile, and cloud development. Our diverse team hails from different parts of the world, including Nepal and Australia, combining global insight with local dedication. We work both remotely and on-site, adapting to what works best for you.


Customer satisfaction is at the core of everything we do. At Hamro Tech, we value craftsmanship over cost—we believe in delivering high-quality, tailored digital products that truly make a difference. Whether you’re a startup or a scaling business, we’re here to help you thrive.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    id:1,
    name: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    githubLink: "https://ecommerce-nu-olive-37.vercel.app/",
    livelink: "https:google.com",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "Nextjs"],
  },
  {
    id:2,
    name: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    githubLink: "https://github.com",
    livelink: "https:google.com",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    id:3,
    name: "CMovies",
    image: project3,
    description:
      "A website like Netflix where users can browse movies and add it to their favorite Collection",
    githubLink: "https://cmovies-sachin455s-projects.vercel.app/",
    livelink: "https:google.com",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    id:4,
    name: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    githubLink: "https://github.com",
    livelink: "https:google.com",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
