import React, { useState } from 'react';
import './InputBox.css';
import VoiceButton from '../VoiceButton/VoiceButton';

interface InputBoxProps {
  onSend: (message: string) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ onSend }) => {
  const [input, setInput] = useState<string>(''); 

  const handleSend = () => {
    if (input.trim() !== '') {
      onSend(input);   
      setInput('');   
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="input-box">
      <input
        type="text"
        placeholder="Schreibe eine Nachricht..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <VoiceButton />
      <button onClick={handleSend}>Senden</button>
    </div>
  );
};

export default InputBox;
