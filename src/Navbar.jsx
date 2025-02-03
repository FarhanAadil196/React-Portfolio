import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .navbar-container {
    display: flex;
    background-color: #ccc;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    position: relative;
    border-radius:40px;
  }

  .navbar-menu {
    display: flex;
    list-style: none;
    gap: 1.3rem;
  }

  .navbar-item {
    margin: 0.5rem 0;
  }

  .navbar-link {
    text-decoration: none;
    color: #000;
  }

  .sm {
    display: flex;
    gap: 10px;
  }

  button {
    height: 30px;
    border: none;
    border-radius: 10px;
    width: 50px;
    padding: 5px;
    overflow: hidden;
    }
    
    button:hover img {
      transition:transform .6s ease-in-out;
    transform: scale(1.4);
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  .hamburger-lines {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
  }

  .line {
    background-color: black;
    height: 2px;
    width: 25px;
    transition: all 0.3s ease;
  }
  @media (max-width: 768px) {
    .hamburger-lines {
      display: flex;
    }

    .navbar-menu {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
      background-color: #ccc;
      padding: 1rem;
    }

    .navbar-menu.open {
      display: flex;
    }
  }
`;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Wrapper>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="hamburger-lines" onClick={toggleMenu}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>

          <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
              <a href="#home" className="navbar-link">
            <li className="navbar-item">
                Home
            </li>
              </a>
            <li className="navbar-item">
              <a href="#about" className="navbar-link">
                About
              </a>
            </li>
            <li className="navbar-item">
              <a href="#projects" className="navbar-link">
                Projects
              </a>
            </li>
            <li className="navbar-item">
              <a href="#contact" className="navbar-link">
                Contact
              </a>
            </li>
          </ul>

          <div className="sm">
            <button className="btn">
              <img src="./github.svg" alt="Github" />
            </button>
            <button className="btn">
              <img src="./linkedin.svg" alt="Linkedin" />
            </button>
            <button className="btn">
              <img src="./whatsapp.svg" alt="Whatsapp" />
            </button>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
}

export default Navbar;
