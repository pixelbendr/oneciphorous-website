import React from 'react';
import '../static/css/landing.css';
import goldbarLogo from '../static/images/goldbarLogo.png';
import oneciphorousLogo from '../static/images/oneciphorousLogoNew.png';

class Landing extends React.Component {
  render() {
    return (
      <div className="topBand">
        <div className="landingContainer">
          <img className="oneciphorousLogo" src={oneciphorousLogo} alt="oneciphorousLogo"/>
          <p className="landingDescription">
            We are a games and apps development company focused on creating
            innovative mobile products geared towards advancing lifestyle and
            addressing up to date real life needs.
          </p>
          <p className="landingDescriptionLicense">
            Check out our first licensed game.
          </p>
          <a href="http://goldbargame.com/" target="_blank" rel="noopener noreferrer">
            <img className="goldbarLogo" src={goldbarLogo} alt="goldbarLogo"/>
          </a>

          <h3>GoldBar Game</h3>
          <div className="contactus">
            <h1>Contact Us</h1>
            <ul>
              <li>160 Tuscany Ravine HTS NW.</li>
              <li>T3L 0C2</li>
              <li>ALBERTA, CALGARY</li>
              <li>+14033832644</li>
            </ul>
          </div>
          <div className="footer">
            &copy; {new Date().getFullYear()}
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
