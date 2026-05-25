
import React from 'react'
import MyButton from './MyButton'
const HeroContainer = () => {
  return (
    <section className="hero-container">
        {/* <video src={require('../public/videos/backgroundVideo.mp4')} autoPlay muted loop className="backgroundVideo" /> */}
        <h1>RELENTLESS</h1>
        <p>Software Engineer</p> 
        <p>Converting complexity into simplicity through software engineering.</p>
        {/* <button>Hello World</button> */}
        <MyButton  />
  </section>
  )
}

export default HeroContainer;