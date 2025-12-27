import React from 'react';
import Box from '@mui/material/Box';
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
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        minWidth: '100vw',
        minHeight: '100vh',
        maxWidth: '100vw',
        maxHeight: '100vh',
        display: 'flex',
        background: 'linear-gradient(to bottom, #f0e6d2 70%, #c2a96b 30%)',
        overflow: 'hidden',
      }}
      >
      <Character />
      <StatusBar username={username} />
      <Box
        sx={{
          flex: '2',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          padding: '5%',
          gap: '10px',
        }}
        >
        <ChatBoard messages={messages} />
        <InputBox onSend={onSend} />
    
      </Box>
    </Box>
  );
};

export default Classroom;
