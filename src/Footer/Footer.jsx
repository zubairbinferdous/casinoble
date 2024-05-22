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
                    <a className="" href="/Mobile">
                      Mobile Casino
                    </a>
                  </li>
                  <li>
                    <a className="" href="/NewCasino">
                      New Casino 2024
                    </a>
                  </li>
                  <li>
                    <a className="" href="/BestOnline">
                      Best Online Casino{" "}
                    </a>
                  </li>
                  <li>
                    <a className="" href="/BestPayout">
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
                    <a className="" href="/Sports">
                      Sports Betting Sites
                    </a>
                  </li>
                  <li>
                    <a className="" href="/eSports">
                      eSports Betting Sites
                    </a>
                  </li>
                  <li>
                    <a className="" href="/FreeSports">
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
                    <a className="" href="/Baccarat">
                      Baccarat
                    </a>
                  </li>
                  <li>
                    <a className="" href="/Blackjack">
                      Black Jack
                    </a>
                  </li>
                  <li>
                    <a className="" href="/Slots">
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
                    <a className="" href="/Interac">
                      Interac
                    </a>
                  </li>
                  <li>
                    <a className="" href="/ApplePay">
                      Apply Pay
                    </a>
                  </li>
                  <li>
                    <a className="" href="/GooglePay">
                      Google Pay
                    </a>
                  </li>
                  <li>
                    <a className="" href="/Mastercard">
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
                    <a className="" href="/Cashback">
                      Cashback
                    </a>
                  </li>
                  <li>
                    <a className="" href="/Freespins">
                      Free spins
                    </a>
                  </li>
                  <li>
                    <a className="" href="/NoDeposit">
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