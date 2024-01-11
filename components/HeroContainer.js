
import React from 'react'
import MyButton from './MyButton'
const HeroContainer = () => {
  return (
    <section className="hero-container">
        <video src={require('../public/videos/video.mp4')} autoPlay muted loop className="backgroundVideo" />
        <h1>RELENTLESS</h1>
        <p>C++ Software Developer</p> 
        <p>Utilizing Unreal engine for VR and gaming applications.</p>
        <button>Hello World</button>
        <MyButton  />
  </section>
  )
}

export default HeroContainer;