import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <p>Question? Please call +977 014527347</p>
      <div className="footer-cols">
        <ul>
          <li>
            <a href="question">FAQ</a>
          </li>
          <li>
            <a href="investors">Investor Relations</a>
          </li>
          <li>
            <a href="originals">Netflix Originals</a>
          </li>
          <li>
            <a href="watch">Ways to watch.</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Terms of use</a>
          </li>
          <li>
            <a href="#">Contact Us!</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
