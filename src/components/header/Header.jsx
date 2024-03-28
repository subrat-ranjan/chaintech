import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="containerr">
      <nav>
        <div className=" logo ">
          <img src="images/img_group.svg" alt="image" className="" />
          <img src="images/menu-btn.png" alt="" className="menu-btn" onClick={handleMenuClick}></img>
        </div>

        <div className={`links  ${isMobileMenuOpen && "active"}`}>
          <a className="active" href="Company" target="_blank" rel="noreferrer">
            Company
          </a>
          <a href="Services" target="_blank" rel="noreferrer">
            Services
          </a>
          <a href="Blogs" target="_blank" rel="noreferrer">
            Business Models
          </a>
          <a href="Blogs" target="_blank" rel="noreferrer">
            Blogs
          </a>
          <a href="#">Contact Us</a>
        </div>
        <div className="horizontal"></div>
      </nav>

      <header>
        <h1>WELCOME</h1>
        <h1 align="center">
          TO <span className="grident">CHAINTECH</span>
        </h1>
        <article>
          <p>
            From square one to engineering excellence! PixelPlex assists in full-cycle software <br />
            development, jumps in to take it over, or brings dedicated top-demanded skills.
          </p>
        </article>
        <div className="btn">
          <button>
            Get Started{" "}
            <div className="arrow">
              <img className="arr" src="images/img_arrowright.svg" alt="" />
            </div>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
