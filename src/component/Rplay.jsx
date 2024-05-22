/* eslint-disable no-unused-vars */
import React from "react";
import interac from "../assets/2d7eafbe877d314a75223ab1703ec9db6040ddc504396-1.svg";
import playfina from "../assets/484bac531ca2ff0ac0b056f99b42238b.svg";
import master from "../assets/Frame-13.svg";
import google from "../assets/google-pay-payment.svg";
import apple from "../assets/Group-1.svg";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
/* eslint-disable no-unused-vars */

// import oneX from "../assets/1xbet-casino-logo-transparent-160x38.png.webp";
// import Roll from "../assets/2.svg";
// import twoBit from "../assets/20bet-casino-logo-160x76.png";
// import interac from "../assets/2d7eafbe877d314a75223ab1703ec9db6040ddc504396-1.svg";
// import betbest from "../assets/betbeast-casino.svg";
// import master from "../assets/Frame-13.svg";
// import gg from '../assets/ggbet-casino-logo-1.svg';
// import google from "../assets/google-pay-payment.svg";
// import grand from "../assets/grandwin-casino-logo.svg";
// import apple from "../assets/Group-1.svg";
// import BetPlays from '../assets/logo-6.svg';
// import lucky from '../assets/lucky141x80.png';
// import Playzilla from "../assets/playzilla-casino-logo-1-160x22.png.webp";

const Rplay = () => {
  return (
    <div>
      <Header></Header>
      <div className="container-fluid bg-blue">
        <div className="container">
          <div className="row ">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-5">
                  <div className="PlayfinaImg">
                    <div className="casino-img">
                      <img src={playfina} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="Playfina-area">
                    <div className="PlayfinaData">
                      <h1>Playfina</h1>
                      <p>Welcome bonus</p>
                      <h3>up to 1350 CAD + 200 FS</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="Playfina-area-button">
                <div className="PlayfinaDataButton">
                  <button>
                    <a href="https://playfina.com/">Visit Casino</a>
                  </button>
                  <p>18 + | New customers only | T&C apply</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col"></div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
        <div className="col-md-4">
          <div className="general">
            <h3>General information</h3>
            <div className="row bb-review">
              <div className="col-md-6 data-review">
                <p className="general_p">Website :</p>
              </div>
              <div className="col-md-6 data-review">
                <p>www.playfina.com</p>
              </div>
            </div>
            <div className="row bb-review">
              <div className="col-md-6 data-review">
                <p className="general_p">Year Founded :</p>
              </div>
              <div className="col-md-6 data-review">
                <p>2022</p>
              </div>
            </div>
            <div className="row bb-review">
              <div className="col-md-6 data-review">
                <p className="general_p">Owner :</p>
              </div>
              <div className="col-md-6 data-review">
                <p>DAMA N.V. Casinos</p>
              </div>
            </div>
            <div className="row bb-review">
              <div className="col-md-6 data-review">
                <p className="general_p"> Licenses :</p>
              </div>
              <div className="col-md-6 data-review">
                <p>Curacao</p>
              </div>
            </div>
            <div className="row bb-review">
              <div className="col-md-6 data-review">
                <p className="general_p"> Casino Type :</p>
              </div>
              <div className="col-md-6 data-review">
                <p>Best Bonus Casino</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="casino-into">
            <h2>Introduction</h2>
            <p>lorem</p>
          </div>
        </div>
        </div>
      </div>
      <div className="container deposit">
        <h2 className="text-center">Deposit & Withdrawals</h2>
        <div className="row Deposit_bg ptd">
          <div className="col-md-3">
          <div className="general">
            <div className="row bb-review2">
              <div className="col-md-6 data-review">
                <p className="general_p">Minimum deposit :</p>
              </div>
              <div className="col-md-6 data-review">
                <p>ca$25</p>
              </div>
            </div>
            <div className="row bb-review2">
              <div className="col-md-6 data-review">
                <p className="general_p">Minimum withdrawal :</p>
              </div>
              <div className="col-md-6 data-review">
                <p>ca$25</p>
              </div>
            </div>
            <div className="row bb-review2">
              <div className="col-md-6 data-review">
                <p className="general_p">Maximum withdrawal
 :</p>
              </div>
              <div className="col-md-6 data-review">
                <p>CA$40000</p>
              </div>
            </div>
            <div className="row bb-review2">
              <div className="col-md-6 data-review">
                <p className="general_p"> Withdrawal time :</p>
              </div>
              <div className="col-md-6 data-review">
                <p>0-24 hours</p>
              </div>
            </div>
        
          </div>
          </div>
          <div className="col-md-5">
            <p className="bonus">Best Bonus Casino</p>
            <div className="currencies-span">
              <span>aud</span>
              <span>cad</span>
              <span>eur</span>
              <span>inr</span>
              <span>nzd</span>
              <span>pln</span>
              <span>usd</span>
            </div>
          </div>
          <div className="col-md-4">
          <p className="bonus2">Payment Methods</p>
            <div className="payment">
            <img src={google} alt="" />
<img src={master} alt="" />
 <img src={apple} alt="" />
<img src={interac} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container withdrawal">
        <h2 className="text-center">Support</h2>
        <div className="row Deposit_bg ptd">
          <div className="col-md-3">
          <p className="bonus3">Phone support</p>
            <div className="currencies">
              <p>No</p>
            </div>
          </div>
          <div className="col-md-3">
            <p className="bonus3">Email support</p>
            <div className="currencies">
              <p>support@playfina.com</p>
            </div>
          </div>
          <div className="col-md-3">
            <p className="bonus3">Live chat</p>
            <div className="currencies">
            <p>Yes</p>
            </div>
          </div>
          <div className="col-md-3">
          <p className="bonus3">Working hours</p>
            <div className="currencies">
              <p>24/7</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container Review_area">
        <div className="row">
          <h3>Review About Playfina</h3>
          <p>
            Playfina is a rising star in the Canadian online casino scene. With
            its user-friendly interface and a plethora of gaming options, its
            quickly becoming a favorite among Canadian players.
          </p>
          <h3>Bonuses at Playfina:</h3>
          <h4>Welcome Bonus:</h4>
          <p>
            Playfina welcomes its Canadian players with an enticing offer of CAD
            1460 + 200 Free Spins. Remember, when you re playing from Canada,
            youll be dealing in CAD, ensuring you get the best value for your
            money.
          </p>
          <h4> Reload Bonus:</h4>
          <p>
            For those looking to reload their accounts, Playfina offers a reload
            bonus of CAD 730. Its a great way to get more out of your deposits
            and extend your gameplay.
          </p>
          <h4>VIP Programs:</h4>
          <p>
            Playfina values its loyal players with an exclusive VIP program.
            While specific details about the program aren provided, loyal
            players can expect exclusive perks and benefits tailored for them.
          </p>
          <h4>Free Spins:</h4>
          <p>
            On top of the welcome bonus, Playfina offers 200 Free Spins to its
            new players, enhancing their chances of striking it big.
          </p>
          <h4>Tournaments:</h4>
          <p>
            Playfina hosts exciting tournaments for its players. Details about
            the current tournaments can be found on their website, ensuring
            players have ample opportunities to win big.
          </p>
          <h3>Payments at Playfina:</h3>
          <h4>Payment Methods:</h4>
          <p>
            Playfina supports a variety of deposit and withdrawal methods
            tailored for Canadian players. Some of the notable ones include:
          </p>
          <ul>
            <li>Mastercard</li>
            <li>Visa</li>
            <li>Neteller</li>
            <li>Skrill</li>
            <li>Bitcoin</li>
            <li>Ethereum</li>
            <li>Litecoin</li>
            <li>Ripple</li>
            <li>Bank Transfer</li>
            <li>PayPal</li>
          </ul>
          <h4>Processing Times:</h4>
          <p>
            Card Payments: 2-5 days <br /> <br />
            Bank Transfers: 2-5 days
            <br /> <br />
            Pending Time: 0-24 hours <br /> <br />
          </p>
          <h4>Fees:</h4>
          <p>
            There are no fees at Playfina for transactions, ensuring players get
            the most out of their winnings in CAD.
          </p>
          <h4>Security:</h4>
          <p>
            Playfina employs advanced security systems, including SSL
            encryption, to ensure players payment details and personal
            information remain protected.
          </p>
          <h4>Ease of Use:</h4>
          <p>
            Based on the available information, the overall user experience at
            Playfina is positive. Players find it easy to deposit and withdraw
            funds, and the interface is intuitive and user-friendly.
          </p>
          <h4>Limits:</h4>
          <p>
            At Playfina, players should be aware of certain transactional
            limits:
          </p>
          <p>
            Minimum Deposit: CAD 15 <br /> <br />
            Maximum Deposit: Varies based on payment method and player status.{" "}
            <br /> <br />
            Minimum Withdrawal: CAD 22 .<br /> <br />
            Maximum Withdrawal: Varies, depending on the players VIP status and
            the chosen withdrawal method.
            <br /> <br />
          </p>
          <h4>Currencies:</h4>
          <p>
            Playfina supports a variety of currencies tailored for a global
            audience:
          </p>
          <p>
            CAD (Canadian Dollar) <br /> <br />
            USD (US Dollar) <br /> <br />
            EUR (Euro) <br /> <br />
            GBP (British Pound Sterling) <br /> <br />
            AUD (Australian Dollar) <br /> <br />
            NZD (New Zealand Dollar) <br /> <br />
            CHF (Swiss Franc) <br /> <br />
            JPY (Japanese Yen) <br /> <br />
            CNY (Chinese Yuan) <br /> <br />
            INR (Indian Rupee) <br /> <br />
          </p>
          <h4>Support at Playfina:</h4>
          <p>
            Playfina offers robust customer support to its players. You can
            reach out to them via E-mail and Live Chat. The support team is
            available 24/7, ensuring players get timely assistance whenever they
            need it.
          </p>
          <h4>Customer Issues:</h4>
          <p>
            Specific customer issues arent mentioned in the source. However,
            with 24/7 customer support, players can expect their concerns to be
            addressed promptly.
          </p>
          <h4>Problem Resolutions Rate:</h4>
          <p>
            Considering factors such as 24/7 customer support availability,
            multiple channels of communication (email and live chat), and
            Playfinas evident commitment to player satisfaction, we can presume
            that Playfina likely has a high problem resolution rate. Players can
            expect timely and effective responses to their concerns.
          </p>
          <h4>Experience at Playfina:</h4>
          <p>
            The overall user experience at Playfina is positive. The website is
            designed for easy navigation, ensuring players can find their
            favorite games or access different sections of the site without any
            hassle. Additionally, Playfina is mobile-compatible, allowing
            players to enjoy their favorite games on the go.
          </p>
          <h4>Playfina Casino App:</h4>
          <p>
            While Playfina doesn have a dedicated mobile app, the casinos
            website is mobile-friendly. Players can access the site and play
            their favorite games using their mobile browsers.
          </p>
          <h4>Features at Playfina:</h4>
          <p>
            Playfina stands out for its vast game selection, generous bonuses,
            and a dedicated VIP program for its loyal players.
          </p>
          <h4>Playfina Reputation:</h4>
          <p>
            Customer Feedback: <br /> <br />
            Positive Feedback:
          </p>
          <p>
            Extensive game selection. <br /> <br />
            Generous bonuses and promotions. <br /> <br />
            24/7 customer support. <br /> <br />
          </p>
          <h4>Negative Feedback:</h4>
          Specific details about the VIP program aren't provided. Withdrawal
          limits aren't explicitly mentioned. No dedicated mobile app.
          <h3>Games at Playfina Casino:</h3>
          <h4>Table Games:</h4>
          <p>
            For those who enjoy classic casino games, Playfina offers a diverse
            range of table games. Some of the most popular ones include:
          </p>
          <p>
            Atlantic City Blackjack <br /> <br />
            American Blackjack <br /> <br />
            Baccarat <br /> <br />
            Casino Hold’Em <br /> <br />
            Dragon Tiger <br /> <br />
            Caribbean Beach Poker <br /> <br />
            Three Card Poker <br /> <br />
            American Roulette <br /> <br />
            European Roulette <br /> <br />
            Aces and Faces <br /> <br />
          </p>
          <h4>Live Dealer Games:</h4>
          <p>
            Experience the thrill of a real casino from the comfort of your home
            with Playfina's live dealer games. Some of the top live dealer games
            include:
          </p>
          <p>
            Live Blackjack <br /> <br />
            Live Roulette <br /> <br />
            Live Baccarat <br /> <br />
            Live Casino Hold'em <br /> <br />
            Live Dragon Tiger <br /> <br />
            Live Caribbean Stud Poker <br /> <br />
            Live Three Card Poker <br /> <br />
            Live Monopoly <br /> <br />
            Live Dream Catcher <br /> <br />
            Live Deal or No Deal <br /> <br />
          </p>
          <h4>Slot Games:</h4>
          <p>
            Slot enthusiasts will be delighted with the vast selection of slot
            titles available at Playfina. Some of the most sought-after slot
            games include:
          </p>
          <p>
            Book of Dead <br /> <br />
            Fire Joker <br /> <br />
            The Dog House Megaways <br /> <br />
            Divine Fortune Megaways <br /> <br />
            Great Rhino Megaways <br /> <br />
            Animal Madness <br /> <br />
            Fire Hopper <br /> <br />
            Wild Cauldron <br /> <br />
            Inferno Star <br /> <br />
            Magic Maid Cafe
          </p>
          <h3>Softwares at Playfina Casino:</h3>
          <p>
            Playfina is powered by a range of top-tier software providers,
            ensuring players have access to high-quality games with excellent
            graphics and gameplay features. Some of the leading software
            suppliers include:
          </p>
          <p>
            NetEnt <br /> <br />
            Microgaming <br /> <br />
            Play'n GO <br /> <br />
            Pragmatic Play <br /> <br />
            Yggdrasil Gaming <br /> <br />
            Quickspin <br /> <br />
            Red Tiger Gaming <br /> <br />
            Evolution Gaming <br /> <br />
            ELK Studios <br /> <br />
            Thunderkick <br /> <br />
          </p>
          <h4>About Playfina:</h4>
          <p>
            Playfina has been a significant player in the online gaming industry
            for several years. The casino is licensed by the Malta Gaming
            Authority, ensuring a safe and fair gaming environment for its
            players.
          </p>
          <h4>Playfina Conclusion:</h4>
          <p>
            In conclusion, Playfina offers a comprehensive gaming experience for
            its players. With a vast game selection, generous bonuses, and
            top-notch customer support, it's a must-visit for casino enthusiasts
            in Canada.
          </p>
          <h4>Playfina FAQ:</h4>
          <p>
            Is Playfina Casino tailored for Canadian players? Yes, Playfina
            Casino offers a gaming experience specifically designed for Canadian
            players, including bonuses in CAD.
          </p>
          <p>
            What kind of bonuses does Playfina offer? Playfina offers a generous
            welcome bonus, free spins, a reload bonus, and an exclusive VIP
            program for loyal players.
          </p>
          <p>
            Is there a mobile app for Playfina Casino? No, Playfina does not
            have a specific mobile app. However, their website is
            mobile-friendly.
          </p>
          <p>
            What currencies does Playfina support? Playfina primarily supports
            CAD, but also accepts a variety of other currencies tailored for a
            global audience.
          </p>
          <p>
            Is Playfina Casino safe? Yes, Playfina is licensed by the Malta
            Gaming Authority and employs top-notch security measures to ensure
            player safety.
          </p>
        </div>
      </div>
      <div className="container-fluid gambling-bg">
        <div className="container">
          <div className="row">
            <div className="gambling-data text-center">
              <h2 className="roboto-black">We value responsible gambling</h2>
              <p className="roboto-light">
                Remember to be careful when gamble online. Never bet money that
                you can not afford to lose. Always make a budget for each
                gambling session so you know when to walk away. Do not drink
                alcohol when betting online. Online gambling can be very
                addictive. Do you have a problem quitting or if your behaviour
                affects your family. Seek help with these organisations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Rplay;
