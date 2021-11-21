import React from 'react';
import githubLogo from './assets/github-logo.svg';
import './App.css';

// Constants
const GITHUB_USERNAME = 'olumide95';
const GITHUB_LINK = `https://github.com/${GITHUB_USERNAME}`;

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">👽 GIF Portal</p>
          <p className="sub-text">
            View your favourite GIF collection in the metaverse 🚀
          </p>
        </div>
        <div className="footer-container">
          <img alt="Github Logo" className="github-logo" src={githubLogo} />
          <a
            className="footer-text"
            href={GITHUB_LINK}
            target="_blank"
            rel="noreferrer"
          >{`@${GITHUB_USERNAME}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
