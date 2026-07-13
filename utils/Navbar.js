'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import '@utils/Navbar.css';

function MenuIcon({ open }) {
  if (open) {
    return (
      <svg
        className="menu-toggle-icon"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    );
  }

  return (
    <svg
      className="menu-toggle-icon"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function Navbar({ logoClassName = '', overlay = false }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const navbarClassName = overlay ? 'navbar navbar--overlay' : 'navbar';

  return (
    <nav className={navbarClassName}>
      <div className="navbar-container">
        <Link
          href="/"
          className={`navbar-logo ${logoClassName}`.trim()}
          onClick={closeMobileMenu}
        >
          SH
        </Link>

        <button
          type="button"
          className="menu-toggle"
          onClick={handleClick}
          aria-label={click ? 'Close main menu' : 'Open main menu'}
          aria-expanded={click}
          aria-controls="nav-menu"
        >
          <MenuIcon open={click} />
        </button>

        <ul
          id="nav-menu"
          className={click ? 'nav-menu active' : 'nav-menu'}
        >
          <li className="nav-item">
            <Link href="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/projects" className="nav-links" onClick={closeMobileMenu}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
