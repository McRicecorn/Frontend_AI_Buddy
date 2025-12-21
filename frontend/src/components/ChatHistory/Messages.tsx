import React from 'react';
import type { ChatMessage } from '../../Interfaces';
import './Messages.css';

interface MessageProps {
  message: ChatMessage;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  return (
    <div className={message.from === 'ai' ? 'ai-message' : 'user-message'}>
      <strong>{message.from}:</strong> {message.text} 
    </div>
  );
};

export default Message;
