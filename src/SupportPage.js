import React from 'react';
import './SupportPage.css';

function SupportPage() {
  return (
    <div className="support-page">
      <h1>Support Page</h1>
      <div className="support-content">
        <div className="support-header">
          <h2>How can we help?</h2>
          <input type="text" placeholder="Search" />
        </div>
        <div className="support-buttons">
          <div className="support-row">
            <button>Account Management</button>
            <button>Game Registration</button>
            <button>Anti Cheat</button>
          </div>
          <div className="support-row">
            <button>Technical Issues</button>
            <button>Community Moderation</button>
            <button>Subscription + Shop</button>
          </div>
        </div>
        <div className="support-footer">
          <div className="contact-info">Contact Information</div>
          <div className="promoted-articles">Promoted Articles / News</div>
        </div>
      </div>
    </div>
  );
}

export default SupportPage;
