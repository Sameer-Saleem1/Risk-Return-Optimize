import React from "react";
import footerlogo from "../assets/img/footerlogo.png";
import facebook from "../assets/img/facebook.png";
import insta from "../assets/img/insta.png";
import twitter from "../assets/img/twitter.png";
import LinkedIn from "../assets/img/LinkedIn.png";
import email from "../assets/img/email.png";
import call from "../assets/img/call.png";
import { Button } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <div className="blue">
        <div className="blue-container">
          <div>
            <h1>
              Empowering your <br /> portfolio through quant <br />
              investment
            </h1>
          </div>
          <div>
            <span className="email">
              <img src={email} alt="email" className="email-logo" />
              <span
                className="email-text"
                style={{ color: "white", fontSize: "20px" }}
              >
                PMS@esteeadvisors.com
              </span>
            </span>
            <span>
              <Button className="navbar-btn">
                <img src={call} alt="call" />
                <span
                  className="btn-text"
                  style={{
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  +91-8700913486
                </span>
              </Button>
            </span>
          </div>
        </div>
      </div>
      <div className="text-light p-3 footer">
        <img src={footerlogo} alt="logo" className="footer-img" />

        <span className="footer-center">
          Privacy policy
          <span className="vl"></span>
          Disclaimer & legal terms
          <span className="vl"></span>
          Disclosures
        </span>
        <span className="social">
          <img src={facebook} alt="" />
          <img src={insta} alt="" />
          <img src={twitter} alt="" />
          <img src={LinkedIn} alt="" />
        </span>
        <hr></hr>
        <div>
          <div></div>
          <h6 className="footer-left-end">
            Portfolio Manager : PMS vide SEBI Registration Number INP 000003146
            <span className="footer-right-end">
              Copyright © 2022 Estee advisors pvt. Ltd
            </span>
          </h6>
        </div>
      </div>
    </>
  );
}
