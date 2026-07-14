'use client';
import React, { useEffect, useId, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '@utils/Navbar.css';

function Navbar({ logoClassName = '', overlay = false }) {
  const pathname = usePathname();
  const checkboxRef = useRef(null);
  const reactId = useId();
  const toggleId = `nav-menu-toggle-${reactId.replace(/:/g, '')}`;

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  }, [pathname]);

  const closeMobileMenu = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };

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

        <input
          ref={checkboxRef}
          id={toggleId}
          type="checkbox"
          className="menu-toggle-checkbox"
          aria-controls="nav-menu"
          suppressHydrationWarning
        />
        <label htmlFor={toggleId} className="menu-toggle">
          <span className="sr-only">Toggle main menu</span>
          <svg
            className="menu-toggle-icon menu-toggle-icon--open"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            className="menu-toggle-icon menu-toggle-icon--close"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </label>

        <ul id="nav-menu" className="nav-menu">
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
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
