import CardItem from '@components/CardItem.js';
import '@styles/projects-page.css';
import { getListedProjects } from './projects';

const Page = () => {
  const listedProjects = getListedProjects();
  const featuredProject = listedProjects.find((project) => project.featured);
  const regularProjects = listedProjects.filter((project) => !project.featured);

  return (
    <div className="project_cards_container">
      <div className="cards">
        <div className="cards_container">
          <div className="cards__wrapper">
            {featuredProject && (
              <ul className="showcase_card">
                <CardItem
                  src={featuredProject.card.icon}
                  text={featuredProject.card.text}
                  label={featuredProject.card.label}
                  path={`/projects/${featuredProject.slug}`}
                />
              </ul>
            )}
            {regularProjects.map((project, index) => (
              <ul className="cards__items" key={project.slug}>
                {index % 2 === 0 && (
                  <CardItem
                    src={regularProjects[index].card.icon}
                    text={regularProjects[index].card.text}
                    label={regularProjects[index].card.label}
                    path={`/projects/${regularProjects[index].slug}`}
                  />
                )}
                {index + 1 < regularProjects.length && index % 2 === 0 && (
                  <CardItem
                    src={regularProjects[index + 1].card.icon}
                    text={regularProjects[index + 1].card.text}
                    label={regularProjects[index + 1].card.label}
                    path={`/projects/${regularProjects[index + 1].slug}`}
                  />
                )}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
