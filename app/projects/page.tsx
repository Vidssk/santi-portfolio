import Link from 'next/link';
import '@styles/projects-page.css';
import { getListedProjects } from './projects';

const Page = () => {
  const listedProjects = getListedProjects();
  const featuredProject = listedProjects.find((project) => project.featured);
  const regularProjects = listedProjects.filter((project) => !project.featured);

  return (
    <div className="projects-page">
      <div className="projects-page__inner">
        <header className="projects-header">
          <p className="projects-eyebrow">Selected Work</p>
          <h1 className="projects-title">Projects</h1>
          <p className="projects-subtitle">
            A collection of software, games, and experiments built with purpose.
          </p>
        </header>

        {featuredProject && (
          <Link
            href={`/projects/${featuredProject.slug}`}
            className="project-card project-card--featured"
          >
            <div className="project-card__media">
              <img
                src={featuredProject.card.icon}
                alt={featuredProject.card.label}
                className="project-card__img"
              />
              <span className="project-card__chip">{featuredProject.card.label}</span>
            </div>
            <div className="project-card__body">
              <span className="project-card__tag">Featured</span>
              <h2 className="project-card__title">{featuredProject.title}</h2>
              <p className="project-card__text">{featuredProject.card.text}</p>
              <span className="project-card__cta">View project</span>
            </div>
          </Link>
        )}

        <div className="projects-grid">
          {regularProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="project-card"
            >
              <div className="project-card__media">
                <img
                  src={project.card.icon}
                  alt={project.card.label}
                  className="project-card__img"
                />
                <span className="project-card__chip">{project.card.label}</span>
              </div>
              <div className="project-card__body">
                <h2 className="project-card__title">{project.title}</h2>
                <p className="project-card__text">{project.card.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
