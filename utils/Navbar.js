'use client';
import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import '@utils/Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'




function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    

    const showButton = () => {
        if(window.innerWidth <= 960 ){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(()=> {
        showButton();

        const handleResize = () => {
            showButton();
        }
        // Check if window is defined before adding event listener
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
          }
      
          // Cleanup: Remove event listener when component unmounts
          return () => {
            if (typeof window !== 'undefined') {
              window.removeEventListener('resize', handleResize);
            }
          };
    }, []);
    
    
    return (
        <>
            <nav className= "navbar">

                <div className="navbar-container">
                    <Link href="/" className="navbar-logo" onClick={closeMobileMenu}>
                         SH
                        {/*
                         <img src={SHLogo} alt="Portfolio Logo"/>
                             <FontAwesomeIcon icon={faCoffee}/>*/}
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <FontAwesomeIcon icon={click ? faTimes : faBars}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link href ='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href ='/projects' className='nav-links' onClick={closeMobileMenu}>
                            Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href ='/about' className='nav-links' onClick={closeMobileMenu}>
                            About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href ='/contact' className='nav-links' onClick={closeMobileMenu}>
                            Contact
                            </Link>
                        </li>
                        <li>
                        </li>
                    </ul>
                        {/*{button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                            <Link to ='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                            </Link>
                        */}
                    
                </div>
        
            </nav>
        </>
    )
}

export default Navbar
