import React, { useState } from 'react';
import './VoiceButton.css';

interface VoiceButtonProps {
  onToggle?: (active: boolean) => void; 
}

const VoiceButton: React.FC<VoiceButtonProps> = ({ onToggle }) => {
  const [isListening, setIsListening] = useState<boolean>(false);

  const handleClick = () => {
    const newState = !isListening;
    setIsListening(newState);

    if (onToggle) {
      onToggle(newState);
    }
  };

  return (
    <button
      className={`voice-button ${isListening ? 'active' : ''}`}
      onClick={handleClick}
      title="Spracheingabe"
    >
      🎤
    </button>
  );
};

export default VoiceButton;
