const ProjectItem = ({ name, linkPage, linkGit, image, description }) => {
  return (
    <li>
      {image && (
        <div className="image-container">
          <a href={linkPage} target="_blank" rel="noopener noreferrer">
            <img src={image} alt={name} />
          </a>
        </div>
      )}
      <h3>{name}</h3>
      <p>
        <a href={linkPage} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </p>
      <p>
        <a href={linkGit} target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </p>
      <p className="text">{description}</p>
    </li>
  );
};

export default ProjectItem;
