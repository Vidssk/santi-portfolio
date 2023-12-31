import React from 'react';
import '../../../App.css'
import { Link } from 'react-router-dom';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function PaintingPicker() {
    return (
        <div className="projectPage">
           <div className="piture_wrap">
               <h1 className="painting_picker_img"> VR Painting</h1>
            </div>
            <section className="aboutProject">
               <h2>Project Information</h2>
               <p className='projectInfo'>Virtual Reality Painting game built using Unreal Engine. 
               Create new canvas to paint, save, and select through a VR 3D User Interface.</p>
               <h3>Notable Features</h3>
               <ul className='projectInfoList'>
                   <li>Canvas: Create New, Save, Load, and Select</li>
                   <li>3D models: Made utilizing Blender</li>
                   <li>Painting: Through the use of Static Mesh instances</li>
               </ul>
               <h3>Lessons Learned</h3>
                <ul className='projectInfoList'>
                    <li>Ergonomics of VR UI.</li>
                    <li>Utilizing Figma for UI design.</li>
                   <li>Unreal Motion Graphics (UMG) for UI Design.</li>
                    <li>FrameRate in VR.</li>
                    <li>Handling Performance Bottlenecks.</li>
                </ul>
               <h3>Project Dificulties</h3>
                <ul className='projectInfoList'>
                    <li>Draw calls causing FrameRate to drop dues to spline meshes.</li>
                    <li>Creating unique ID's for each save slot.</li>
                </ul>
                <h4>
               <Link className="social-icon-link github"
                to={{ pathname: "https://github.com/Vidssk/LightPainter"}}
                target="_blank"
                aria-label='GitHub'
                >
                <FontAwesomeIcon icon={faGithub}/>
                </Link>  GitHub
                </h4>
            </section>
        </div>
    )
}
