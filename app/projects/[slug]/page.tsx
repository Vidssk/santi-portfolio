import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '@styles/projects.css';
import { getProject, projects } from '../projects';

interface ProjectInfoSectionProps {
  title: string;
  items: string[];
}

const ProjectInfoSection: React.FC<ProjectInfoSectionProps> = ({
  title,
  items,
}) => (
  <div className="project-detail__section">
    <h3 className="project-detail__section-title">{title}</h3>
    <ul className="project-detail__list">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

const Page = ({ params }: ProjectPageProps) => {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  const heroObjectFit =
    project.hero.backgroundSize === 'cover' ? 'cover' : 'contain';
  const showVideo =
    !!project.hero.video && project.hero.media !== 'image';

  return (
    <article className="project-detail">
      <div className="project-detail__inner">
        <Link href="/projects" className="project-detail__back">
          ← All Projects
        </Link>

        <header className="project-detail__hero">
          <div
            className="project-detail__hero-media"
            style={
              project.hero.backgroundColor
                ? { backgroundColor: project.hero.backgroundColor }
                : undefined
            }
          >
            {showVideo ? (
              <video
                src={project.hero.video}
                className="project-detail__hero-video"
                autoPlay
                loop
                muted
                playsInline
                style={{ objectFit: heroObjectFit }}
              />
            ) : (
              <img
                src={project.hero.image}
                alt={project.title}
                className="project-detail__hero-img"
                style={{ objectFit: heroObjectFit }}
              />
            )}
          </div>
          <h1 className="project-detail__title">{project.title}</h1>
        </header>

        <section className="project-detail__intro">
          <h2 className="project-detail__intro-label">Overview</h2>
          <p>{project.description}</p>
        </section>

        {(project.notableFeatures?.length ||
          project.lessonsLearned?.length ||
          project.projectDifficulties?.length) && (
          <div className="project-detail__sections">
            {project.notableFeatures && project.notableFeatures.length > 0 && (
              <ProjectInfoSection
                title="Notable Features"
                items={project.notableFeatures}
              />
            )}

            {project.lessonsLearned && project.lessonsLearned.length > 0 && (
              <ProjectInfoSection
                title="Lessons Learned"
                items={project.lessonsLearned}
              />
            )}

            {project.projectDifficulties &&
              project.projectDifficulties.length > 0 && (
                <ProjectInfoSection
                  title="Project Difficulties"
                  items={project.projectDifficulties}
                />
              )}
          </div>
        )}

        <div className="project-detail__actions">
          {project.websiteUrl && (
            <a
              className="project-detail__btn"
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Website
            </a>
          )}
          <a
            className="project-detail__btn project-detail__btn--ghost"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className="project-detail__github-icon" />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
};

export default Page;
