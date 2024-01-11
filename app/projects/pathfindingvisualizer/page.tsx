import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import '@styles/projects.css';





interface ProjectInfoSectionProps {
  title: string;
  items: string[];
}
const ProjectInfoSection: React.FC<ProjectInfoSectionProps> = ({ title, items }) => (
  <>
    <h3 className = "projectSubjectList">{title}</h3>
    <ul className="projectInfoList">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </>
);

const Page = () => {
  return (
    <div className="projectPage">
      <div className="piture_wrap">
        <h1 className="path_finding_img"> Path Finding Visualizer</h1>
      </div>
      <section className="aboutProject">
        <div className="projectInfo">
        <h2>Project Information</h2>
        <p>Creates a graph that calculates the shortest route between two points.</p>
        </div>
        <div className="infoSection">

        <ProjectInfoSection
          title="Notable Features"
          items={[
            'Pathfinding Visualizer is a React based web application.', 
            'Pathfinding Algorithm: A*Star.',
            'Walls: block out nodes.',

          ]}
          />

        <ProjectInfoSection
          title="Lessons Learned"
          items={[
            'Animating a graph based utilizing React and CSS.'
          ]}
          />

        <ProjectInfoSection
          title="Project Difficulties"
          items={['Resizing node graph to take into account different screen sizes.']}
          />

        </div>
        <div className="code-section">

        <Link className="social-icon-link"
            href={{ pathname: "https://github.com/Vidssk/Pathfind_Visualizer"}}
            target="_blank"
            aria-label='GitHub'
            >
            <FontAwesomeIcon className="github-icon" style={{width: '40px',height: 'fit-content',color: 'white'}} icon={faGithub}/>
        </Link>
          </div>
      </section>
    </div>
  );
};

export default Page;
