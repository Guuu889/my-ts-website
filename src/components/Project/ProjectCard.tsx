import ScrollAnimation from "react-animate-on-scroll";
import { ButtonLink } from "../Contact/styles";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  technologies: string[];
  url: string;
}

export function ProjectCard({
  imageSrc,
  title,
  description,
  technologies,
  url,
}: ProjectCardProps) {
  return (
    <ScrollAnimation animateIn="flipInX">
      <div className="project">
        <div className="gambar">
          <img src={imageSrc} alt={title} />
        </div>
        <div className="body">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <footer>
          <ul className="tech-list">
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </footer>
        <ButtonLink href={url}
          target="_blank"
          rel="noopener noreferrer">
          View Detail
        </ButtonLink>
        
      </div>
    </ScrollAnimation>
  );
}
