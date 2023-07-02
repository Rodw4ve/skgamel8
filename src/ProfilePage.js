import React from 'react';
import './ProfilePage.css';

function ProfilePage() {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-picture">
          <img
            className="profile-picture-img"
            src="path/to/profile-picture.jpg"
            alt="Profile Picture"
          />
          <div className="profile-picture-overlay">
            {/* Add upload/remove functionality */}
            <span className="upload-icon">+</span>
            <span className="remove-icon">x</span>
          </div>
        </div>
        <div className="profile-info">
          <div className="profile-name">
            John Doe
          </div>
          <button className="share-button">Share</button>
        </div>
      </div>

      <div className="profile-navigation">
        <button className="nav-button">Overview</button>
        <button className="nav-button">Stats</button>
        <button className="nav-button">Posts</button>
        <button className="nav-button">Videos</button>
        <button className="nav-button">Friends</button>
        <button className="nav-button">Following</button>
      </div>

      <div className="profile-stats">
        <div className="stats-item">
          <span className="stats-label">Games Played:</span>
          <span className="stats-value">123</span>
        </div>
      </div>

      <div className="profile-data">
        <div className="data-item">
          <button className="data-title">Rankings</button>
          <div className="data-card">
            {/* Add content for Rankings card */}
          </div>
        </div>
        <div className="data-item">
          <button className="data-title">Winrate</button>
          <div className="data-card">
            {/* Add content for Winrate card */}
          </div>
        </div>
        <div className="data-item">
          <button className="data-title">Matches</button>
          <div className="data-card">
            {/* Add content for Matches card */}
          </div>
        </div>
        <div className="data-item">
          <button className="data-title">Recent Results</button>
          <div className="data-card">
            {/* Add content for Recent Results card */}
          </div>
        </div>
      </div>

      <div className="show-all-games">
        <select className="games-dropdown">
          {/* Add options for the dropdown */}
        </select>
      </div>

      <div className="profile-bottom">
        <div className="bottom-item">
          <button className="bottom-title">About</button>
          <div className="bottom-card">
            {/* Add content for About card */}
          </div>
        </div>
        <div className="bottom-item">
          <button className="bottom-title">Socials</button>
          <div className="bottom-card">
            {/* Add content for Socials card */}
          </div>
        </div>
        <div className="bottom-item">
          <button className="bottom-title">Feed</button>
          <div className="bottom-card">
            {/* Add content for Feed card */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
