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
        <h1 className="statistics_site_img"> Statistiscs Website</h1>
      </div>
      <section className="aboutProject">
        <div className="projectInfo">
        <h2>Project Information</h2>
          <p>
A statistics website that accepts an array of user-input integers, processes them through statistical functions, and presents the data graphically.
          </p>
        </div>
        <div className="infoSection">

        <ProjectInfoSection
          title="Notable Features"
          items={['Project Manager for the Project.','A Next.js website integrated with a Python Flask backend for optimal performance and seamless functionality.']}
          />

        <ProjectInfoSection
          title="Lessons Learned"
          items={[
            'Utilizing flask to use python as the backend.',
            'Setting up the architecture for the team.',
            'Communicating with the team.',
            'Risk Analysis.',
            'The importance of splitting up work to accomplish tasks faster.',
          ]}
          />

        <ProjectInfoSection
          title="Project Difficulties"
          items={['Some team mates lacked communication.']}
          />
        <Link className="social-icon-link" target="_blank" aria-label="Website" href={{pathname: "https://statisticssite-ispmj5vhg-vidssks-projects.vercel.app/"}}>
        <Button
                    // variant="outline"
                    marginTop="20px"
                    backgroundColor="var(--secondaryColor)"
                    padding="10px"
                    borderRadius="10px"
                    border= "2px solid rgba(255, 255, 255, 0.039)" 
                    boxShadow= "0 0 10px rgba(0, 0, 0, 0.5)" 
                    color='var(--secondaryTextColor)'
                    >Website</Button>
           </Link>
        </div>
        <div className="code-section">

        <Link className="social-icon-link"
            href={{ pathname: "https://github.com/Vidssk/Project3.git"}}
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
