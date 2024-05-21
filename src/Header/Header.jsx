/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/LOGO.svg';

const Header = () => {
  return (
    <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="/"><img src={logo} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Casino
          </a>
          
          <ul className="dropdown-menu">
            <li> <Link className="dropdown-item" to="/Mobile">Mobile Casino</Link> </li>
            <li> <Link className="dropdown-item" to="/NewCasino">New Casino </Link> </li>
            <li> <Link className="dropdown-item" to="/BestOnline">Best Online Casino</Link> </li>
            <li> <Link className="dropdown-item" to="/BestPayout">Best Payout Casino</Link> </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Betting
          </a>
          <ul className="dropdown-menu">
          
            <li> <Link className="dropdown-item" to="/Sports">Sports Betting Sites</Link> </li>
            <li> <Link className="dropdown-item" to="/eSports">eSports Betting Sites </Link> </li>
            <li> <Link className="dropdown-item" to="/FreeSports">Free Sports Be</Link> </li>
           
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Games
          </a>
          <ul className="dropdown-menu">

            <li> <Link className="dropdown-item" to="/Baccarat">Baccarat</Link> </li>
            <li> <Link className="dropdown-item" to="/BlackJack">Black Jack </Link> </li>
            <li> <Link className="dropdown-item" to="/Slots">Slots</Link> </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Banking
          </a>
          <ul className="dropdown-menu">

            <li> <Link className="dropdown-item" to="/Interac">Interac</Link> </li>
            <li> <Link className="dropdown-item" to="/ApplyPay">Apply Pay </Link> </li>
            <li> <Link className="dropdown-item" to="/GooglePay">Google Pay</Link> </li>
            <li> <Link className="dropdown-item" to="/Mastercard">Mastercard</Link> </li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Bonuses
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Cashback</a></li>
            <li><a className="dropdown-item" href="#">Free spins</a></li>
            <li><a className="dropdown-item" href="#">No Deposit Bonuses</a></li>
          </ul>
        </li>
    
      </ul>
   
    </div>
  </div>
</nav>
</>
  );
};

export default Header;
