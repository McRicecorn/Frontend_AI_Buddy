import React from 'react';
import './Character.css';

const Character: React.FC = () => {
  return (
    <div className="character-container">
      <div className="character-avatar">
        🤖
      </div>
      <div className="character-name">
        AI Buddy
      </div>
    </div>
  );
};

export default Character;
