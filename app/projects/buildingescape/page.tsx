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
        <h1 className="building_escape_img"> Architecture Explorer</h1>
      </div>
      <section className="aboutProject">
        <div className="projectInfo">
        <h2>Project Information</h2>
          <p> Building Escape is a first person escape room game built using Unreal Engine.
          </p>
        </div>
        <div className="infoSection">



        <ProjectInfoSection
          title="Lessons Learned"
          items={[
            'Utilizing Trigger Volumes.',
          ]}
          />

        <ProjectInfoSection
          title="Project Difficulties"
          items={['VR Headset movement causing collider problems.']}
          />

        </div>
        <div className="code-section">

        <Link className="social-icon-link"
            href={{ pathname: "https://github.com/Vidssk/BuildingEscapeGame.git"}}
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
