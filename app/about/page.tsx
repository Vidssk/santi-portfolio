import '@styles/About.css'
import ImageSlider from '@components/ImageSlider.js'
import { SliderData } from '@components/SliderData'
import portfolioImage from '../../public/pictures/ChicagoPhoto.png'
import Image from 'next/image';
const skill = 
['C++', 'Unreal Engine', 'Blender', 'Substance Painter', 
'JavaScript', 'React JS', 'Oral Presentations'];
const hobby = [
  'Cosplaying','Dancing','Piano','Rock Climbing'
]

const page = () => {
  return (
    <div className='About-page'>
    <div className="about-text-wrapper">
      {/* <h1 className="title">ABOUT ME</h1> */}
      <section className="about-information-text">
        <div className='About-wrapper'>
          <div className='About-info'>
          <h2>About Me</h2>
          <p>
            Self-taught Virtual Reality Developer in Houston pursuing an opportunity in XR Development.
          </p>
          </div>
        <div className='Abilities'>
          <div className='Skills-wrapper'>
            <h3>Skills</h3>
            <ul className='list'>
              {skill.map(skill => (
                <li key={skill}>{skill}</li>
                ))}
            </ul>
          </div>
          <div className='Hobbies-wrapper'>
            <h3>Hobbies</h3>
            <ul className='list'>
              {['Cosplaying', 'Dancing', 'Piano', 'Rock Climbing', 'CodeWars'].map(hobby => (
                <li key={hobby}>{hobby}</li>
                ))}
            </ul>
          </div>
        </div>
        </div>
      </section>
    </div>
    <div className="image-wrapper">
        {/* <ImageSlider slides={SliderData}/> */}
        <Image src={portfolioImage} alt='Picture of the author'/>

    </div>
  </div>
    // <div className='About-page'>
    //         <div className="image-wrapper">
    //             <ImageSlider slides={SliderData}/>
    //         </div>
    //         <div className="about-text-wrapper">
    //                 <h1 className="title">ABOUT ME</h1>
    //             <section className="about-information-text">
    //             <section className='About-wrapper'>
    //             <h2>About Me</h2>
    //             <p className='information'>
    //             Self-taught Virtual Reality Developer located in Houston pursuing an opportunity in XR Development.
    //             </p>
    //             </section>
    //             <section className='Abilities'>
    //             <section className='Skills-wrapper'>
    //             <h3>Skills</h3>
    //             <ul className='list'>
    //                 <li>C++</li>
    //                 <li>Unreal Engine</li>
    //                 <li>Blender</li>
    //                 <li>Substance Painter</li>
    //                 <li>JavaScript</li>
    //                 <li>React JS</li>
    //                 <li>Oral Presentations</li>
    //             </ul>
    //             </section>
    //             <section className='Hobbies-wrapper'>
    //             <h3>Hobbies</h3>
    //             <ul className='list'>
    //                 <li>Cosplaying</li>
    //                 <li>Dancing</li>
    //                 <li>Piano</li>
    //                 <li>Rock Climbing</li>
    //                 <li>CodeWars</li>
    //             </ul>
    //             </section>
    //             </section>
    //             </section>
    //         </div> 
        
    // </div>
  )
}

export default page