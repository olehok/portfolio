import ProjectItem from '../components/ProjectItem';

export default function Projects() {
  const projects = [
    {
      name: "Portfolio Website",
      linkPage: "#",
      linkGit: "#",
      image: "/portfolio/port.jpg",
      description:
        "This very website you are visiting right now. Built with React and SCSS.",
    },
    {
      name: "Hlegal Pages",
      linkPage: "https://olehok.github.io/hlegal-pages/",
      linkGit: "https://github.com/olehok/hlegal-pages/",
      image: "/portfolio/hlegal.jpg",
      description:
        "A responsive website on several pages. Built with HTML, SCSS on a pre-designed mockup.",
    },
    {
      name: "Weather Widget",
      linkPage: "https://olehok.github.io/weather-widget/",
      linkGit: "https://github.com/olehok/weather-widget",
      image: "/portfolio/weather.jpg",
      description:
        "Weather widget with changing background depending on temperature. Built with JS (localStorage, JSON, fetch, scheduling a call).",
    },
    {
      name: "Todo List",
      linkPage: "https://olehok.github.io/todo-list/",
      linkGit: "https://github.com/olehok/todo-list",
      image: "/portfolio/todo.jpg",
      description: "A simple todo-list built with JS (localStorage, JSON).",
    },
    {
      name: "Slider",
      linkPage: "https://olehok.github.io/column-slider/",
      linkGit: "https://github.com/olehok/column-slider",
      image: "/portfolio/slider.jpg",
      description: "A simple slider built with JS.",
    },
    {
      name: "Crypto page",
      linkPage: "https://olehok.github.io/crypto/",
      linkGit: "https://github.com/olehok/crypto",
      image: "/portfolio/cripto.jpg",
      description: "A landing page built with HTML, CSS.",
    },
    {
      name: "Furniture page",
      linkPage: "https://olehok.github.io/furniture/",
      linkGit: "https://github.com/olehok/furniture",
      image: "/portfolio/furn.jpg",
      description: "A landing page built with HTML, CSS (Grid).",
    },
    {
      name: "Britlex page",
      linkPage: "https://olehok.github.io/britlex/",
      linkGit: "https://github.com/olehok/britlex",
      image: "/portfolio/britlex.jpg",
      description: "A landing page built with HTML, SCSS.",
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
