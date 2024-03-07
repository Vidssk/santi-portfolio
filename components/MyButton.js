

import React from 'react'
import "@styles/Button.css"
import Resume from '@public/Santiagos_Resume.pdf'

function MyButton() {
  return (
    // <a href={Resume} className="my-resume" download="Santiagos_Resume.pdf"> Download Resume </a>
    <a href="https://drive.google.com/file/d/1FCYsMyaj3Aj_Tmz_N1qYx30GY-beGB37/view?usp=sharing" 
    className="my-button" target="_blank" rel="noopener noreferrer" ><button>Download Resume</button></a>
    )
}

export default MyButton