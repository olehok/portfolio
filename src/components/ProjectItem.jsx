const ProjectItem = ({ name, linkPage, linkGit, image, description }) => {
  return (
    <li>
      {image && (
        <div className="image-container">
          <img src={image} alt={name} />
        </div>
      )}
      <h3>
        <a href={linkPage} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </h3>
      <a href={linkGit} target="_blank" rel="noopener noreferrer">
        Github
      </a>
      <p className="text">{description}</p>
    </li>
  );
};

export default ProjectItem;
