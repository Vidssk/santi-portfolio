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
        <h1 className="statistics_site_img"> CyberWear</h1>
      </div>
      <section className="aboutProject">
        <div className="projectInfo">
        <h2>Project Information</h2>
          <p>
        An e-commerce website specializing in 3D printed bracelets, utilizing the power of Next.js for the frontend and Flask for the backend. Integrated with mysql database to manage products, user accounts, and orders. 
          </p>
        </div>
        <div className="infoSection">

        <ProjectInfoSection
          title="Notable Features"
          items={['User Authentication and Authorization',
          'Product Management System',
          'Shopping Cart and Checkout Process',
          'Responsive Design',
          'Admin Dashboard',]}
          />

        <ProjectInfoSection
          title="Lessons Learned"
          items={['Full-Stack Development',
          'Database Management',
          'API Development',
          'E-commerce Best Practices',
          'Team Collaboration',
          ]}
          />

        <ProjectInfoSection
          title="Project Difficulties"
          items={['Having enough models to 3D print the bracelets',
          'Integrating frontend and backend seamlessly',
          'Ensuring data security and user privacy','deciding on the payment api to use',]}
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
