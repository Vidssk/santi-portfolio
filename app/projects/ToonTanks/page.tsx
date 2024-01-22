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
        <h1 className="toon_tanks_img"> Toon Tanks</h1>
      </div>
      <section className="aboutProject">
        <div className="projectInfo">
        <h2>Project Information</h2>
        <p>3rd-Person Tank game. The objective is to destroy all enemy turrets before 
          your tank&apos;s destroyed.</p>
        </div>
        <div className="infoSection">

        <ProjectInfoSection
          title="Notable Features"
          items={[
            'modular setup to create multiple levels based off healt and number of enemy AI.'
          ]}
          />

        <ProjectInfoSection
          title="Lessons Learned"
          items={[
            'Creating Actor class to be used as a projectile base class.',
            'Creating GameMode classes.',
            'Creating Health Component.',
            'Creating Widget Blueprints.',
            'Spawning Actors at runtime.',
            'Spawning Particle System.',
            'Understanding UPROPERTY Specifiers.',
            'Using Dynamic Delegates.',
            'Using Timers for events based on elapsed time.',
            'Utilizing the Reflection System in Unreal for Casting.',
          ]}
          />

        <ProjectInfoSection
          title="Project Difficulties"
          items={['Draw calls causing FrameRate to drop dues to spline meshes.',
        'Creating unique ID\'s for each save slot.']}
          />

        </div>
        <div className="code-section">

        <Link className="social-icon-link"
            href={{ pathname: "https://github.com/Vidssk/ToonTanks.git"}}
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
