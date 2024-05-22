/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React from "react";

import logo from '../assets/LOGO.svg';

import { Link } from "react-router-dom";
import './Header.css';


const Header = () => {
  return (
    <>


<header className="header">
         <nav className="nav container">
            <div className="nav__data">
               <a href="/" className="nav__logo">
                 <img src={logo} alt="" />
               </a>
               
               <div className="nav__toggle" id="nav-toggle">
                  <i className="ri-menu-line nav__burger"></i>
                  <i className="ri-close-line nav__close"></i>
               </div>
            </div>

            {/* <!--=============== NAV MENU ===============--> */}
            <div className="nav__menu" id="nav-menu">
               <ul className="nav__list">
                
                  <li className="dropdown__item">
                     <div className="nav__link">
                     <i className="ri-bard-fill"></i> Casino <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                     </div>

                     <ul className="dropdown__menu">
                        <li>
                           <Link to="/Mobile" className="dropdown__link">
                              <i className="ri-pie-chart-line"></i>Mobile Casino
                           </Link>                          
                        </li>
                        <li>
                           <Link to="/NewCasino" className="dropdown__link">
                              <i className="ri-pie-chart-line"></i>New Casino
                           </Link>                          
                        </li>
                        <li>
                           <Link to="/BestOnline" className="dropdown__link">
                              <i className="ri-pie-chart-line"></i>Best Online Casino
                           </Link>                          
                        </li>
                        <li>
                           <Link to="/BestPayout" className="dropdown__link">
                              <i className="ri-pie-chart-line"></i>Best Payout Casino
                           </Link>                          
                        </li>

                     
                     </ul>
                  </li>
                  <li className="dropdown__item">
                     <div className="nav__link">
                     <i className="ri-criminal-line"></i> Betting <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                     </div>

                     <ul className="dropdown__menu">
                        <li>
                           <Link to="/Sports" className="dropdown__link">
                              <i className="ri-pie-chart-line"></i>Sports Betting Sites
                           </Link>                          
                        </li>
                        <li>
                           <Link to="/eSports" className="dropdown__link">
                              <i className="ri-pie-chart-line"></i>eSports Betting Sites
                           </Link>                          
                        </li>
                        <li>
                           <Link to="/FreeSports" className="dropdown__link">
                              <i className="ri-pie-chart-line"></i>Free Sports Bets
                           </Link>                          
                        </li>
                     
                     </ul>
                  </li>

                  <li className="dropdown__item">
                     <div className="nav__link">
                     <i className="ri-gamepad-line"></i>  Games <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                     </div>

                     <ul className="dropdown__menu">
                        <li>
                           <Link to="/Baccarat" className="dropdown__link">
                              <i className="ri-pie-chart-line"></i>Sports Betting Sites
                           </Link>                          
                        </li>
                        <li>
                           <Link to="/BlackJack" className="dropdown__link">
                              <i className="ri-pie-chart-line"></i>eSports Betting Sites
                           </Link>                          
                        </li>
                        <li>
                           <Link to="/BlackJack" className="dropdown__link">
                              <i className="ri-pie-chart-line"></i>Free Sports Bets
                           </Link>                          
                        </li>
                     
                     </ul>
                  </li>

                  <li className="dropdown__item">
                     <div className="nav__link">
                     <i className="ri-bank-line"></i>  Banking <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                     </div>

                     <ul className="dropdown__menu">
                        <li>
                           <Link to="/Interac" className="dropdown__link">
                              <i className="ri-pie-chart-line"></i>Interac
                           </Link>                          
                        </li>
                        <li>
                           <Link to="/ApplyPay" className="dropdown__link">
                              <i className="ri-pie-chart-line"></i>Apply Pay
                           </Link>                          
                        </li>
                        <li>
                           <Link to="/GooglePay" className="dropdown__link">
                              <i className="ri-pie-chart-line"></i>Google Pay
                           </Link>                          
                        </li>
                        <li>
                           <Link to="/Mastercard" className="dropdown__link">
                              <i className="ri-pie-chart-line"></i>Mastercard
                           </Link>                          
                        </li>
                     
                     </ul>
                  </li>

                  <li className="dropdown__item">
                     <div className="nav__link">
                     <i className="ri-wallet-line"></i>  Bonuses <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                     </div>

                     <ul className="dropdown__menu">
                        <li>
                           <Link to="/Interac" className="dropdown__link">
                              <i className="ri-pie-chart-line"></i>Cashback
                           </Link>                          
                        </li>
                        <li>
                           <Link to="/FreeSpins" className="dropdown__link">
                              <i className="ri-pie-chart-line"></i>Free spins 
                           </Link>                          
                        </li>
                        <li>
                           <Link to="/NoDeposit" className="dropdown__link">
                              <i className="ri-pie-chart-line"></i>No Deposit Bonuses
                           </Link>                          
                        </li>
                     </ul>
                  </li>


               </ul>
            </div>
         </nav>
</header>

</>
  );
};

export default Header;
