/* eslint-disable no-unused-vars */
import React from "react";
import AllCasino from "./AllCasino";
import "./HomePage.css";
import "./MobileCasino.css";
const Baccarat = () => {
  return (
    <div>
      <div className="container-fluid home-area">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="home-data">
                <h1 className="roboto-black">Sports Betting</h1>
                <h2 className="roboto-light">
                  Compare the Best Sports Betting Sites in Canada
                </h2>
                <p className="roboto-medium">
                  Bet online for real money. Benefit from the best bonuses and
                  win big.
                </p>
              </div>
            </div>
            <div className="col-md-5"></div>
          </div>
        </div>
      </div>
      <AllCasino></AllCasino>
    </div>
  );
};

export default Baccarat;
