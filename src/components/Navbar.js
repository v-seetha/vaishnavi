import React from 'react';
import { scroller } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  // Function to navigate to home and then scroll to the section
  const handleNavigation = (section) => {
    navigate('/'); // First, navigate to the home route
    setTimeout(() => {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
      });
    }, 100); // Delay to ensure routing completes before scrolling
  };

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <button className="nav-button" onClick={() => handleNavigation('home')}>🏠 Home</button>
        </li>
        <li>
          <button className="nav-button" onClick={() => handleNavigation('about')}>👩‍💻 About Me</button>
        </li>
        <li>
          <button className="nav-button" onClick={() => handleNavigation('experience')}>💻 Experience</button>
        </li>
        <li>
          <button className="nav-button" onClick={() => handleNavigation('projects')}>🚧 Projects</button>
        </li>
        <li>
          <button className="nav-button" onClick={() => handleNavigation('contact')}>🤙 Contact Me</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
