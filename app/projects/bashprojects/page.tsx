import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import '@styles/projects.css';
import { Button, background } from "@chakra-ui/react";

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
        <h1 className="statistics_site_img"> Bash Projects</h1>
      </div>
      <section className="aboutProject">
        <div className="projectInfo">
        <h2>Project Information</h2>
          <p>
        A collection of Bash scripts designed to automate various system administration tasks, enhance productivity, and streamline workflows.
          </p>
        </div>
        <div className="infoSection">

        <ProjectInfoSection
          title="Notable Features"
          items={['Automated Backup Scripts','job search automation','System Monitoring Tools','File Management Utilities','Customizable Workflows',]}
          />

        <ProjectInfoSection
          title="Lessons Learned"
          items={['Bash Scripting Fundamentals',
          'Automation Techniques',
          'System Administration',
          'Error Handling in Scripts',
          'Optimizing Script Performance',
          ]}
          />

        <ProjectInfoSection
          title="Project Difficulties"
          items={['Debugging complex scripts',
          'Handling user input and errors gracefully',]}
          />
        </div>
        <div className="code-section">

        <Link className="social-icon-link"
            href={{ pathname: "https://github.com/Vidssk/CyberWear"}}
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
