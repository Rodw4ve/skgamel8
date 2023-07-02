import React, { useState } from 'react';
import './PlayPage.css';

function PlayPage() {
  const [showGameList, setShowGameList] = useState(false);

  const toggleGameList = () => {
    setShowGameList(!showGameList);
  };

  return (
    <div className="play-page">
      <div className="sidebar">
        <ul className="sidebar-menu">
          <li className={`game-select ${showGameList ? 'active' : ''}`} onClick={toggleGameList}>
            Game Select
            <span className="arrow">&#9662;</span>
            {showGameList && (
              <ul className="game-list">
                <li>Game 1</li>
                <li>Game 2</li>
                <li>Game 3</li>
                {/* Add more game options */}
              </ul>
            )}
          </li>
          <li>Dashboard</li>
          <li>Matchmaking</li>
          <li>Tournaments</li>
          <li>Hubs</li>
          <li>Teams</li>
        </ul>
      </div>
      <div className="content">
        <ul className="sidebar-menu overview-menu">
          <li>Overview</li>
          <li>Competitions</li>
          <li>Matches</li>
          <li>Media</li>
          <li>Rankings</li>
        </ul>
        <div className="sidebar-bottom">
          <h3>Choose Gamemode:</h3>
          <ul className="gamemode-options">
            <li>5v5</li>
            <li>2v2</li>
            <li>1v1</li>
          </ul>
          <h3>Recommend Hubs:</h3>
          {/* Add your recommended hubs section */}
        </div>
        <div className="content">
          <h1>YOUR SHITTY STATS IN A GRAPH FORMAT BELOW </h1>
          {/* Add your content and components specific to the Play page */}
        </div>
      </div>
    </div>
  );
}

export default PlayPage;
