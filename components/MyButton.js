

import React from 'react'
import "@styles/Button.css"
import Resume from '@public/Santiagos_Resume.pdf'

function MyButton() {
  return (
    // <a href={Resume} className="my-resume" download="Santiagos_Resume.pdf"> Download Resume </a>
    <a href="https://drive.google.com/file/d/1QkIsQTi8SQZBLPET4jaI_0xYYJjrlaey/view?usp=sharing" 
    className="my-button" target="_blank" rel="noopener noreferrer" ><button>Download Resume</button></a>
    )
}

export default MyButton