import React from "react";

import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitterSquare,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <section className="footer-section">
        <div className="footer-cards grid-container">
          {/* >>=========== right card ===========<< */}
          <div className="footer-card-right">
            <h3>Information</h3>
            <a href="#" style={{ textDecoration: "none" }}>
              <h4>About Us</h4>
            </a>
            <a href="#">
              <h4>Contact Us</h4>
            </a>
            <a href="#">
              <h4>Privacy Policy</h4>
            </a>
            <a href="#">
              <h4>Blog</h4>
            </a>
          </div>

          {/* >>=========== middle card ===========<< */}

          <div className="footer-card-middle">
            <h3>Why Buy From Us</h3>
            <a href="#">
              <h4>Shipping & Delivery</h4>
            </a>
            <a href="#">
              <h4>Secure payment</h4>
            </a>
            <a href="#">
              <h4>FAQ</h4>
            </a>
            <a href="#">
              <h4>Terms & Conditions</h4>
            </a>
          </div>

          {/* >>=========== left card ===========<< */}

          <div className="footer-card-right">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <FontAwesomeIcon className="icon" icon={faMobileAlt} />
                <h4 className="phone">(123)456-7890</h4>{" "}
              </li>

              <li>
                <FontAwesomeIcon className="icon" icon={faLocationDot} />
                <h4 className="location">
                  E-Comm, 4578
                  <br />
                  Marmora Road,
                  <br />
                  Glasgow D04 89GR
                </h4>
              </li>
            </ul>
          </div>

          {/* >>=========== follow us ===========<< */}

          <div className="follow-us">
            <h3 className="follow-us">Follow Us</h3>

            <FontAwesomeIcon
              className="icon facebook-icon"
              icon={faFacebookSquare}
            />

            <FontAwesomeIcon
              className="icon twitter-icon"
              icon={faTwitterSquare}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
