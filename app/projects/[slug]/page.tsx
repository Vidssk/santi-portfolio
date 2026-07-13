import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Button } from '@chakra-ui/react';
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
  <>
    <h3 className="projectSubjectList">{title}</h3>
    <ul className="projectInfoList">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </>
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

  return (
    <div className="projectPage">
      <div className="piture_wrap">
        <h1
          className="project_hero"
          style={{
            backgroundImage: `url('${project.hero.image}')`,
            color: project.hero.textColor ?? '#fff',
            backgroundSize: project.hero.backgroundSize ?? 'cover',
            backgroundColor: project.hero.backgroundColor,
            fontSize: project.hero.fontSize,
          }}
        >
          {project.title}
        </h1>
      </div>
      <section className="aboutProject">
        <div className="projectInfo">
          <h2>Project Information</h2>
          <p>{project.description}</p>
        </div>
        <div className="infoSection">
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

          {project.websiteUrl && (
            <Link
              className="social-icon-link"
              target="_blank"
              aria-label="Website"
              href={{ pathname: project.websiteUrl }}
            >
              <Button
                marginTop="20px"
                backgroundColor="var(--secondaryColor)"
                padding="10px"
                borderRadius="10px"
                border="2px solid rgba(255, 255, 255, 0.039)"
                boxShadow="0 0 10px rgba(0, 0, 0, 0.5)"
                color="var(--secondaryTextColor)"
              >
                Website
              </Button>
            </Link>
          )}
        </div>
        <div className="code-section">
          <Link
            className="social-icon-link"
            href={{ pathname: project.githubUrl }}
            target="_blank"
            aria-label="GitHub"
          >
            <FontAwesomeIcon
              className="github-icon"
              style={{
                width: '40px',
                height: 'fit-content',
                color: 'white',
              }}
              icon={faGithub}
            />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Page;
