
import React from 'react'
import MyButton from './MyButton'
const HeroContainer = () => {
  return (
    <section className="hero-container">
        {/* <video src={require('../public/videos/backgroundVideo.mp4')} autoPlay muted loop className="backgroundVideo" /> */}
        <h1>RELENTLESS</h1>
        <p>Senior Software Engineering Student</p> 
        <p>Utilizing Unreal engine for VR and gaming applications.</p>
        {/* <button>Hello World</button> */}
        <MyButton  />
  </section>
  )
}

export default HeroContainer;