import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import PlayPage from './PlayPage';
import ProfilePage from './ProfilePage';
import SupportPage from './SupportPage';
import TeamPage from './TeamPage';
import ShopPage from './ShopPage';

function Home() {
  const [showOnlineFriends, setShowOnlineFriends] = useState(false);
  const [showFeedForums, setShowFeedForums] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleOnlineFriends = () => {
    setShowOnlineFriends(!showOnlineFriends);
  };

  const toggleFeedForums = () => {
    setShowFeedForums(!showFeedForums);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="App">
      <div className="content-wrapper">
        <div className="column-block" onClick={toggleOnlineFriends}>
          <h2>Online Friends</h2>
          {showOnlineFriends && (
            <div className="dropdown-content">
              {/* Additional information for Online Friends */}
              you have no friends.
            </div>
          )}
        </div>
        <div className="column-block" onClick={toggleFeedForums}>
          <h2>Feed Forum's</h2>
          {showFeedForums && (
            <div className="dropdown-content">
              {/* Additional information for Feed Forum's */}
              no one likes your shitty posts.
            </div>
          )}
        </div>
        <div className="column-block" onClick={toggleNotifications}>
          <h2>Notifications</h2>
          {showNotifications && (
            <div className="dropdown-content">
              {/* Additional information for Notifications */}
              drier than the Sahara.
            </div>
          )}
        </div>
      </div>
      <button className="anti-cheat-button">Anti Cheat &lt;3</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play/*" element={<PlayPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/teams" element={<TeamPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
