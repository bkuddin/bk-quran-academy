import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>LEARN QURAN</h4>
            <h5 className="list-unstyled">
              <li>01923-806969</li>
              <li>Dhaka, Bangladesh</li>
              <li>324/5 Rayerbag</li>
            </h5>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Services</h4>
            <ui className="list-unstyled">
              <li>Learn Arabic</li>
              <li>Learn Tajweed</li>
              <li>Learn Quran</li>
              <li>Quran Meaning</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Social Links</h4>
            <ui className="list-unstyled">
              <li>
                <a
                  href="https://www.facebook.com/bakhtiar.uddins/"
                  target="_blank"
                >
                  Facebook
                </a>
              </li>
              <li>Twitter</li>
              <li>Linkedin</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} BK UDDIN | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
