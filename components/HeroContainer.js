import React from 'react'

const HeroContainer = () => {
  return (
    <section className="hero-container">
        <video src={require('../public/videos/video.mp4')} autoPlay muted loop className="backgroundVideo" />
        <h1>RELENTLESS</h1>
        <p>C++ Software Developer</p> 
        <p>Utilizing Unreal engine for VR and gaming applications.</p>
  </section>
  )
}

export default HeroContainer;