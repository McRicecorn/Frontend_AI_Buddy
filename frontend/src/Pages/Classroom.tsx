import React from 'react';
import Character from '../components/Character/Character';
import { ChatBoard } from '../components/Chatboard/Chatboard';
import InputBox from '../components/InputBox/InputBox';
import type { ChatMessage } from '../Interfaces';
import StatusBar from '../components/Status/StatusBar';

interface ClassroomProps {
  username: string;
  messages: ChatMessage[];
  onSend: (text: string) => void;
}

const Classroom: React.FC<ClassroomProps> = ({ username, messages, onSend }) => {
  return (
    <div className="classroom-container">
      <Character />
      <StatusBar username={username} />
      <div className="right-side">
        <ChatBoard messages={messages} />
        <InputBox onSend={onSend} />
    
      </div>
    </div>
  );
};

export default Classroom;
