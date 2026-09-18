import royalCollection from "../assets/images/projects/royal-collection.jpg";
import virtualHerbalGarden from "../assets/images/projects/virtual-herbal-garden.jpg";
import weatherWidget from "../assets/images/projects/weather-widget.jpg";
import randomQuote from "../assets/images/projects/random-quote.jpg";
import randomUser from "../assets/images/projects/random-user.jpg";
import simonSays from "../assets/images/projects/simon-says.png";

const projects = [
  {
    title: "Royal Collection",
    category: "E-Commerce",
    description:
      "A modern men's e-commerce platform with product browsing, cart management, authentication, orders, and a responsive shopping experience.",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "Tailwind CSS",
      "React Router",
    ],
    image: royalCollection,
    github: "https://github.com/mdfahim10/e-commerce",
    live: "",
  },

  {
    title: "Virtual Herbal Garden",
    category: "Full-Stack Application",
    description:
      "A full-stack application for exploring medicinal plants, disease-wise herbal remedies, and AYUSH-based healthcare information.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "EJS",
      "Bootstrap",
    ],
    image: virtualHerbalGarden,
    github: "https://github.com/mdfahim10/virtual-herbal-garden",
    live: "https://virtual-herbal-garden-t92w.onrender.com/",
  },

  {
    title: "Weather Widget",
    category: "React Application",
    description:
      "A responsive weather application that provides real-time weather information for searched cities using the OpenWeather API.",
    technologies: [
      "React",
      "JavaScript",
      "Material UI",
      "OpenWeather API",
    ],
    image: weatherWidget,
    github: "https://github.com/mdfahim10/React-Weather-Mini-Project",
    live: "https://weather-widget-alex.netlify.app/",
  },

  {
    title: "Random Quote Generator",
    category: "JavaScript Application",
    description:
      "A simple web application that generates random quotes through API integration with a clean and responsive user interface.",
    technologies: [
      "React",
      "JavaScript",
      "API Integration",
      "CSS",
    ],
    image: randomQuote,
    github: "https://github.com/mdfahim10/Random-Quote-Generator",
    live: "https://random-quote-alex.netlify.app/",
  },

  {
    title: "Random User Generator",
    category: "React Application",
    description:
      "A React-based application that fetches and displays randomly generated user profiles using an external API.",
    technologies: [
      "React",
      "JavaScript",
      "API Integration",
      "CSS",
    ],
    image: randomUser,
    github: "https://github.com/mdfahim10/Random-User-Generator",
    live: "https://random-user-alex.netlify.app/",
  },

  {
    title: "Simon Says Game",
    category: "JavaScript Game",
    description:
      "A browser-based memory game featuring random sequence generation, user input validation, level progression, and visual feedback.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    image: simonSays,
    github: "#",
    live: "#",
  },
];

export default projects;