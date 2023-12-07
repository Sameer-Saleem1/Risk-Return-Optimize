import React from "react";
import people from "../assets/img/people.png";
import client from "../assets/img/client.png";
import asset from "../assets/img/asset.png";
import pioneer from "../assets/img/pioneer.png";
import { Card } from "react-bootstrap";
import tech from "../assets/img/tech.png";
import team from "../assets/img/team.png";
import data from "../assets/img/data.png";
import alpha from "../assets/img/alpha.png";
import alphaA from "../assets/img/alpha-a.png";
import alphaB from "../assets/img/alpha-b.png";
import alphaC from "../assets/img/alpha-c.png";
import graph from "../assets/img/graph.png";
import redTick from "../assets/img/redTick.png";
import cagr from "../assets/img/cagr.png";
import zero from "../assets/img/zero.png";
import no from "../assets/img/no.png";
import man from "../assets/img/man.png";

export default function HeroSection() {
  return (
    <div id="HeroSection">
      <div className="empower">
        <h1>Empowering your portfolio through quant investment</h1>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo
          tempor incididunt .
        </h6>
        <button>Get a demo</button>
      </div>

      <div className="investment">
        <img src={people} alt="people" />
      </div>
      <div className="container">
        <div className="left">
          <div className="left-element">
            <div>
              <img src={client} alt="" />
            </div>
            <div>
              <h3>8000+</h3>
              <h6>Trusted by 8000+ Clients</h6>
            </div>
          </div>
          <div className="left-element">
            <div>
              <img src={asset} alt="" />
            </div>
            <div>
              <h3>1500+ Cr</h3>
              <h6>Assets under management</h6>
            </div>
          </div>
          <div className="left-element">
            <div>
              <img src={pioneer} alt="" />
            </div>
            <div>
              <h3>Pioneers</h3>
              <h6>Quant Investment in India</h6>
            </div>
          </div>
        </div>
        <div className="right">
          <Card style={{ width: "18rem" }} className="card">
            <Card.Body>
              <Card.Title className="card-title">
                <h2>Looking for Investment Solutions?</h2>
              </Card.Title>
              <Card.Text>
                <div className="card-container">
                  <div className="container-element">
                    <div>
                      Name{" "}
                      <span style={{ color: "#4040DA" }}>
                        * <br />
                      </span>
                      <input placeholder="John" className="input"></input>
                    </div>
                  </div>
                  <div className="container-element ">
                    Email{" "}
                    <span style={{ color: "#4040DA" }}>
                      * <br />
                    </span>
                    <input
                      placeholder="john@email.com"
                      className="input"
                    ></input>
                  </div>
                  <div className="container-element">
                    <div>
                      Mobile No.{" "}
                      <span style={{ color: "#4040DA" }}>
                        * <br />
                      </span>
                      <input
                        placeholder="00 (123) 456 78 90"
                        className="input"
                      ></input>
                    </div>
                  </div>
                  <div className="container-element ">
                    Looking to invest (In Rs.)
                    <br />
                    <input placeholder="Select" className="input"></input>
                  </div>
                </div>
              </Card.Text>
              <div className="authorize">
                <input type="checkbox" className="check" />I authorize Estee
                Advisors Pvt. Ltd. to contact me. This will override registry on
                the NDNC. As per SEBI guide Lines, minimum investment required
                is of ₹50 Lakhs.
              </div>
              <button className="callback-btn">Request callback</button>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="alpha">
        <h1>
          Adding Alpha through{" "}
          <span style={{ color: "#333399" }}>
            Estee’s 3 fundamental advantages
          </span>
        </h1>
        <div className="alpha-container">
          <div className="alpha-container-element">
            <img src={tech} alt="" />
          </div>
          <div className="alpha-container-element">
            <img src={team} alt="" />
          </div>
          <div className="alpha-container-element">
            <img src={data} alt="" />
          </div>
        </div>
      </div>

      <div className="Long-alpha">
        <div className="Long-alpha-container">
          <div>
            <h1>
              Long <span style={{ color: "#4040DA" }}>Alpha</span>
            </h1>
            <h6>
              Long Alpha is a multi-factor equity quant PMS launched in 2018
              that aims to consistently outperform the benchmark equity index
              while maintaining low volatility.
            </h6>
            <div className="inner-container">
              <div>
                <img src={alphaA} alt="" />
                <h3>~31.5%</h3>
                <h6>
                  Long Alpha vs ~15.5% <br />
                  BSE 500*
                </h6>
              </div>
              <div>
                <img src={alphaB} alt="" /> <h3>80+</h3>
                <h6>
                  Quant and Tech <br />
                  Professionals
                </h6>
              </div>
              <div>
                <img src={alphaC} alt="" /> <h3>500 BSE</h3>
                <h6>
                  Lower Volatility than <br />
                  BSE Index
                </h6>
              </div>
            </div>

            <div className="revamp">
              {" "}
              Since revamp 2019 <span style={{ color: "#A73A3A" }}>*</span>
            </div>

            <button className="factsheet-btn">Download FactSheet</button>
          </div>
          <div>
            <img src={alpha} alt="" className="alpha-img" />
          </div>
        </div>
      </div>
      <div className="graph">
        <div className="graph-container">
          <div>
            <img src={graph} alt="" />
          </div>
          <div>
            <h1>
              Long Alpha-
              <span style={{ color: "#4040DA" }}>
                BSE <br />
                Return Comparisons
              </span>
            </h1>
            <h6>
              Long Alpha is quantitatively managed strategy that implements a
              rule-based trading model to remove human subjectivity. It is a
              flexi cap fund that allocates amongst Large Cap, Mid Cap and Small
              Cap from the BSE 500 Investible universe. The quant strategy
              offers the following that differentiates itself.
            </h6>
            <div className="graph-inner-container">
              <div>
                <img src={redTick} alt="" />
                <span>Free from human bias</span>
              </div>
              <div>
                <img src={redTick} alt="" />
                <span>
                  Covers and processes wide breadth of data to construct
                  portfolio.
                </span>
              </div>
              <div>
                <img src={redTick} alt="" />
                <span>
                  Uses 130+ micro strategies to create the model portfolio.
                </span>
              </div>
              <div>
                <img src={redTick} alt="" />
                <span>No Exit Load and No Entry Load- Exit when you want!</span>
              </div>
            </div>
            <button className="factsheet-btn">Download FactSheet</button>
          </div>
        </div>
      </div>

      <div className="Long-alpha">
        <div className="Long-alpha-container">
          <div>
            <h1>
              I <span style={{ color: "#4040DA" }}>Alpha</span>
            </h1>
            <h6 style={{ fontSize: "14px" }}>
              I-Alpha is Estee’s Market Neutral Arbitrage product which aims to
              deliver consistent returns while maintaining nearly zero market
              exposure.
            </h6>
            <h6 style={{ fontSize: "14px" }}>
              Estee’s algorithm identifies mispricing between various market
              instruments at any given point of time and takes hedged positions
              to capture the pricing differences. The strategy generates stable
              and consistent returns without taking any directional bets. Estee
              employs a 3 tier risk management system at a Fund level, Strategy
              Level and Operational level.
            </h6>
            <div className="inner-container">
              <div>
                <img src={cagr} alt="" />
                <h3>~11.7%</h3>
                <h6>CAGR</h6>
              </div>
              <div>
                <img src={zero} alt="" /> <h3>ZERO</h3>
                <h6>
                  Negative months since <br />
                  Inception
                </h6>
              </div>
              <div>
                <img src={no} alt="" /> <h3>NO</h3>
                <h6>Entry Load or Exit Load</h6>
              </div>
            </div>
          </div>
          <div>
            <img src={alpha} alt="" className="alpha-img" />
          </div>
        </div>
      </div>

      <div className="why">
        <div className="why-container">
          <div>
            <img src={man} alt="" className="man" />
          </div>
          <div style={{ paddingTop: "3rem" }}>
            <h1>
              Why <span style={{ color: "#4040DA" }}>Estee?</span>
            </h1>
            <p>
              Estee is a quant and analytics driven firm that was founded in
              2008 when algorithmic trading was permitted by SEBI in India.
              <br />
              <br />
              Estee mastered the art of applying quant to investment approach
              and pioneered algorithmic investment products.
            </p>
            <div className="graph-inner-container">
              <div>
                <img src={redTick} alt="" className="redTick" />
                <span>Pioneers in quant investing in India</span>
              </div>
              <div>
                <img src={redTick} alt="" className="redTick" />
                <span>Strong performance track record</span>
              </div>
              <div>
                <img src={redTick} alt="" className="redTick" />
                <span>
                  Trusted by 2000+ Clients-(PMS & Investment advisory)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
