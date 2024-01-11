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
        <h1 className="simple_shooter_img"> Simple Shooter </h1>
      </div>
      <section className="aboutProject">
        <div className="projectInfo">
        <h2>Project Information</h2>
        <p>3rd-Person Shooter game build using Unreal Engine.  
               Enemy AI will chase you down, take them out to win.</p>
        </div>
        <div className="infoSection">

        <ProjectInfoSection
          title="Lessons Learned"
          items={[
            'Skeletal Animations.',
            'Using Animation Blueprints.',
            'Connecting Animations to gameplay.',
            'Using sockets to interact with meshes.',
            'Making Gun Actors.',
            'Spawning Particle Effects.',
            'Using Behaviour Trees to create smart AI.'
          ]}
          />

        <ProjectInfoSection
          title="Project Difficulties"
          items={['Figuring out how Behaviour Trees and Blackboards worked.']}
          />

        </div>
        <div className="code-section">

        <Link className="social-icon-link"
            href={{ pathname: "https://github.com/Vidssk/SimpleShoter.git"}}
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
