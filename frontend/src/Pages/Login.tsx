import React, { useState } from 'react';
import './Login.css';

interface LoginProps {
  onLogin: (username: string) => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() !== '') {
      onLogin(username.trim());
    } else {
      alert('Bitte gib deinen Namen ein!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>AI Buddy</h1>
        <p>Dein interaktiver Lernbegleiter</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Dein Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit">Ins Klassenzimmer</button>
        </form>

        <small>Demo-Version – kein echter Login</small>
      </div>
    </div>
  );
};

