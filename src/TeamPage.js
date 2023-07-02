import React, { useState } from 'react';
import './TeamPage.css';

function TeamPage() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  return (
    <div className="team-page">
      <div className="team-section">
        <h2 className="section-title">Your Organization T1 - T2</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="#" alt="Member 1" className="member-avatar" />
            <span className="member-name">Member 1</span>
          </div>
          <div className="team-member">
            <img src="#" alt="Member 2" className="member-avatar" />
            <span className="member-name">Member 2</span>
          </div>
          <div className="team-member">
            <img src="#" alt="Member 3" className="member-avatar" />
            <span className="member-name">Member 3</span>
          </div>
          <div className="team-member">
            <img src="#" alt="Member 4" className="member-avatar" />
            <span className="member-name">Member 4</span>
          </div>
          <div className="team-member">
            <img src="#" alt="Member 5" className="member-avatar" />
            <span className="member-name">Member 5</span>
          </div>
        </div>
      </div>

      <div className="team-section">
        <h2 className="section-title">Team Chat</h2>
        <div className="team-chat">
          <div className="message-inbox">
            {messages.map((msg, index) => (
              <div key={index} className="message">
                {msg}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="message-form">
            <input
              type="text"
              value={message}
              onChange={handleChange}
              placeholder="Type your message..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      <div className="team-section">
        <h2 className="section-title">Team Announcement</h2>
        <div className="team-announcement">
          {/* Render the team announcements */}
          {/* ... */}
        </div>
      </div>

      <div className="team-section team-scheduler">
        <h2 className="section-title">Scheduler</h2>
        <div className="team-calendar">
          {/* Render the scheduler/calendar */}
          {/* Placeholder: Add your scheduler/calendar component here */}
        </div>
      </div>

      <div className="team-section">
        <h2 className="section-title">Reviews</h2>
        <div className="team-reviews">
          {/* Render the team reviews */}
          {/* ... */}
        </div>
      </div>

      <div className="team-section">
        <h2 className="section-title">Highlights</h2>
        <div className="team-highlights">
          {/* Render the team highlights */}
          {/* ... */}
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
