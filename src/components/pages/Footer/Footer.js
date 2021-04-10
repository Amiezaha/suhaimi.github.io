import React from "react";
import { FaEllo, FaFacebook } from "react-icons/fa";
import { SiGmail,SiWhatsapp } from "react-icons/si";

import { Link } from "react-router-dom";
import "./Footer.css"

function Footer() {
  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper text-center">
          <div className="footer-link-items">
            <Link to="/educations">My Education</Link>
    
          </div>
          <div className="footer-link-items">
            <Link to="/skills">My Skills</Link>
          </div>
          <div className="footer-link-items">
            <Link to="/working-experiences">My Working Experiences</Link>
          </div>
        </div>
  
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
          <Link to="/" className="navibar-logo">
            <FaEllo className="navibar-icon"> </FaEllo>
            Suhaimi PortFolio
          </Link>
          </div>
          <small className="website-rights mb-0"> Suhaimi PortFolio © 2021</small>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to={{pathname:'https://www.facebook.com/amie.zaha'}}
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
          </div>
          <div className="social-icons">
            <Mailto
              className="social-icon-link"
              email="amiezaha@gmail.com" subject="Looking for a web developer" body="Write your email.."
            >
              <SiGmail />
            </Mailto>
          </div>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to={{pathname:"https://wa.link/d3wn1g"}}
              target="_blank"
              aria-label="Whatsapp"
            >
              <SiWhatsapp />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
