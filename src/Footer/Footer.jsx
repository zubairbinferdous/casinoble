/* eslint-disable no-unused-vars */
import React from "react";
import Casinobles_logo from "../assets/Casinobles-Goal-and-Mission.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="footer-data">
                <div className="footer-img">
                  <img src={Casinobles_logo} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-item">
                <h4 className="roboto-medium">Casino Pages</h4>
                <ul>
                  <li>
                    <a className="" href="#">
                      Mobile Casino
                    </a>
                  </li>
                  <li>
                    <a className="" href="#">
                      New Casino 2024
                    </a>
                  </li>
                  <li>
                    <a className="" href="#">
                      Best Online Casino{" "}
                    </a>
                  </li>
                  <li>
                    <a className="" href="#">
                      Best Payout Online Casino{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-item">
                <h4 className="roboto-medium">Betting Pages</h4>
                <ul>
                  <li>
                    <a className="" href="#">
                      Sports Betting Sites
                    </a>
                  </li>
                  <li>
                    <a className="" href="#">
                      eSports Betting Sites
                    </a>
                  </li>
                  <li>
                    <a className="" href="#">
                      Free Sports Bet
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-item">
                <h4 className="roboto-medium">Games Pages</h4>
                <ul>
                  <li>
                    <a className="" href="#">
                      Baccarat
                    </a>
                  </li>
                  <li>
                    <a className="" href="#">
                      Black Jack
                    </a>
                  </li>
                  <li>
                    <a className="" href="#">
                      Slots
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-item">
                <h4 className="roboto-medium">Banking Pages</h4>
                <ul>
                  <li>
                    <a className="" href="#">
                      Interac
                    </a>
                  </li>
                  <li>
                    <a className="" href="#">
                      Apply Pay
                    </a>
                  </li>
                  <li>
                    <a className="" href="#">
                      Google Pay
                    </a>
                  </li>
                  <li>
                    <a className="" href="#">
                      Mastercard
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-item">
                <h4 className="roboto-medium">Bonuses Pages</h4>
                <ul>
                  <li>
                    <a className="" href="#">
                      Cashback
                    </a>
                  </li>
                  <li>
                    <a className="" href="#">
                      Free spins
                    </a>
                  </li>
                  <li>
                    <a className="" href="#">
                      No Deposit Bonuses
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
