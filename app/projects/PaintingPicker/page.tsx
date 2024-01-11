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
        <h1 className="painting_picker_img"> VR Painting</h1>
      </div>
      <section className="aboutProject">
        <div className="projectInfo">
        <h2>Project Information</h2>
          <p>Virtual Reality Painting game built using Unreal Engine. 
          </p>
        </div>
        <div className="infoSection">

        <ProjectInfoSection
          title="Notable Features"
          items={[
            'Canvas: Create New, Save, Load, and Select.',
            '3D models: Made utilizing Blender.',
            'Painting: Through the use of Static Mesh instances.'
          ]}
          />

        <ProjectInfoSection
          title="Lessons Learned"
          items={[
            'Ergonomics of VR UI.',
            'Utilizing Figma for UI design.',
            'Unreal Motion Graphics (UMG) for UI Design.',
            'FrameRate in VR.',
            'Handling Performance Bottlenecks.',
          ]}
          />

        <ProjectInfoSection
          title="Project Difficulties"
          items={[
            'Draw calls causing FrameRate to drop dues to spline meshes.',
            'Creating unique ID\'s for each save slot.'
          ]}
          />

        </div>
        <div className="code-section">

        <Link className="social-icon-link"
            href={{ pathname: "https://github.com/Vidssk/LightPainter"}}
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
