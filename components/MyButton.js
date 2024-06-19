

import React from 'react'
import "@styles/Button.css"
import Resume from '@public/Santiagos_Resume.pdf'
const link = "https://drive.google.com/file/d/1FmeUFhSFx6EGThUlvm8UUYMYFzXt2_mM/view?usp=sharing";
function MyButton() {
  return (
    // <a href={Resume} className="my-resume" download="Santiagos_Resume.pdf"> Download Resume </a>
    <a href={link}
    className="my-button" target="_blank" rel="noopener noreferrer" ><button>Download Resume</button></a>
    )
}

export default MyButton