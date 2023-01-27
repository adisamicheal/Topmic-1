import React from "react";

const Footer = () => (
  <div id="footer">
    <div className="footer">
      <div className="wrapper">
        <div className="column">
          <img
            className="footer-logo"
            src="./images/logo.jpg"
            alt="Winsome Footer logo"
          />
          <p className="footer-info">
            Phone: +234706863131
          </p>
          <p className="footer-info">Email: topmic.schools@yahoo.com</p>
          <p className="footer-info">
            Address: Block 9, Adenowo Mabadeje Drive, Valley View Estate,
            Off Ebute-Igbogbo Road, Ikorodu. Lagos State
          </p>
        </div>
        <div className="column-text">
          <h4 className="footer-buttons">OUR SCHOOL</h4>
          <h4 className="footer-buttons">KG/PREP</h4>
          <h4 className="footer-buttons">NURSERY</h4>
          <h4 className="footer-buttons">PRIMARY</h4>
          <h4 className="footer-buttons">COLLEGE</h4>

        </div>
        <div className="column-text">
          <h4 className="footer-buttons">ADMISSIONS</h4>
          <h4 className="footer-buttons">NEWS/EVENTS</h4>
        </div>
        <div className="clear" />
      </div>
    </div>
    <div className="footer-description">
      <div className="wrapper">
        <div className="social-icons">
          <a
            href="https://facebook.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-facebook-square" />
          </a>
          <a
            href="https://instagram.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="https://twitter.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-twitter-square" />
          </a>
          <a
            href="https://google.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-google-plus-square" />
          </a>
        </div>
        <div className="copyright-text">
          <p>
            Copyright © 2022 Topmic International Group of Schools. All Rights
            Reserved
          </p>
        </div>
        <div className="clear" />
      </div>
    </div>
  </div>
);

export default Footer;
