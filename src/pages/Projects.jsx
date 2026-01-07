import ProjectItem from "../components/ProjectItem";

export default function Projects() {
  const projects = [
    {
      name: "Portfolio Website",
      linkPage: "https://olehok.github.io/portfolio/",
      linkGit: "https://github.com/olehok/portfolio",
      image: "/portfolio/port.jpg",
      description: `The portfolio website you are currently viewing, 
        built with React and Sass featuring client-side routing and a theme switcher.`,
    },
    {
      name: "Hlegal Pages",
      linkPage: "https://olehok.github.io/hlegal-pages/",
      linkGit: "https://github.com/olehok/hlegal-pages/",
      image: "/portfolio/hlegal.jpg",
      description:
        "A responsive multi-page website built with HTML and Sass, based on a given mockup.",
    },
    {
      name: "Weather Widget",
      linkPage: "https://olehok.github.io/weather-widget/",
      linkGit: "https://github.com/olehok/weather-widget",
      image: "/portfolio/weather.jpg",
      description: `A weather widget with a dynamic background based on temperature. 
        Built with JavaScript, using Fetch API, localStorage for persistence, and scheduled data updates.`,
    },
    {
      name: "Todo List",
      linkPage: "https://olehok.github.io/todo-list/",
      linkGit: "https://github.com/olehok/todo-list",
      image: "/portfolio/todo.jpg",
      description:
        "A simple todo-list built with JavaScript, using localStorage.",
    },
    {
      name: "Slider",
      linkPage: "https://olehok.github.io/column-slider/",
      linkGit: "https://github.com/olehok/column-slider",
      image: "/portfolio/slider.jpg",
      description: "A simple slider built with JavaScript.",
    },
    {
      name: "Crypto page",
      linkPage: "https://olehok.github.io/crypto/",
      linkGit: "https://github.com/olehok/crypto",
      image: "/portfolio/cripto.jpg",
      description:
        "A landing page built with HTML and CSS following a pre-designed layout.",
    },
    {
      name: "Furniture page",
      linkPage: "https://olehok.github.io/furniture/",
      linkGit: "https://github.com/olehok/furniture",
      image: "/portfolio/furn.jpg",
      description:
        "A landing page built with HTML and CSS Grid, based on a given layout.",
    },
    {
      name: "Britlex page",
      linkPage: "https://olehok.github.io/britlex/",
      linkGit: "https://github.com/olehok/britlex",
      image: "/portfolio/britlex.jpg",
      description:
        "A landing page built with HTML and Sass (modules), using CSS Grid, following a given layout.",
    },
  ];

  return (
    <div className="container">
      <ul className="projects-list">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            name={project.name}
            linkPage={project.linkPage}
            linkGit={project.linkGit}
            image={project.image}
            description={project.description}
          />
        ))}
      </ul>
    </div>
  );
}
