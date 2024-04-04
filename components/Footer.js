import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const githubProfileLink = 'https://github.com/saranya-040';
  const linkedinProfileLink = 'https://www.linkedin.com/in/sai-lakshmi-saranya-marni-b42a6a252/';
  const email = 'marnisailakshmisaranya@gmail.com';

  return (
    <footer className="footer-container">
      <h2 className="contact-heading">Contact</h2>
      <p className="contact-text">Feel free to contact me for any questions. Send me an email at marnisailakshmisaranya@gmail.com</p>

      <div className="social-icons">
        <a href={githubProfileLink} target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href={linkedinProfileLink} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href={`mailto:${email}`}>
          <FaEnvelope className="icon" />
        </a>
      </div>

      <div className="line"></div>

      <p className="copyright-text">
        Copyright @ 2024, Sai Lakshmi Saranya Marni. All Rights Reserved<br />
        Designed and Developed by Sai Lakshmi Saranya
      </p>
    </footer>
  );
}

export default Footer;
