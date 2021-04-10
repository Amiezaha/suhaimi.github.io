import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes,FaEllo } from "react-icons/fa";
import "./Navbar.css"
import { IconContext } from "react-icons/lib";

function Navbar() {
  //set hooks
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>

      <div className="navibar">
        <div className="navibar-container cont">
          <Link to="/" className="navibar-logo" onClick={closeMobileMenu}>
            <FaEllo className="navibar-icon"> </FaEllo>
            Suhaimi PortFolio
          </Link>

          <div className="menu-navi-icon" onClick={handleClick}>
            {click ? <FaTimes /> :<FaBars />}
          </div>

          <ul className={click ? 'navi-menu active':'navi-menu'}>
              <li className="navi-item">
              <Link to="/" className="navi-links">Home</Link>
              </li>
              <li className="navi-item">
              <Link to="/educations" className="navi-links">Educations</Link>
              </li>
              <li className="navi-item">
              <Link to="/skills" className="navi-links">Skills</Link>
              </li>
              <li className="navi-item">
              <Link to="/working-experiences" className="navi-links">Work Experience</Link>
              </li>
              <li className="navi-item">
              <Link to="/work-gallery" className="navi-links">Work Gallery</Link>
              </li>
          </ul>
        </div>
      </div>
      </IconContext.Provider>

    </>
  );
}

export default Navbar;
