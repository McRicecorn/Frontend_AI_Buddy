import { useState } from 'react';
import { Login } from './Pages/Login';
import Classroom from './Pages/Classroom';
import type { ChatMessage } from './Interfaces';

function App() {
  const [username, setUsername] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { from: 'ai', text: 'Hallo! Ich bin dein AI Buddy.' },
  ]);

  const handleLogin = (name: string) => {
    setUsername(name);
  };

  const handleSend = (text: string) => {
    const newMessage: ChatMessage = { from: 'user', text };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="app-container">
      {!username ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Classroom username={username} messages={messages} onSend={handleSend} />
      )}
    </div>
  );
}

export default App;
