import { useState } from 'react';
import { Login } from './Pages/Login';
import Classroom from './Pages/Classroom';
import type { IChatMessage } from './Interfaces/IChatMessage';

function App() {

  const AI_Response: string[] = [
    'Interessante Frage!',
    'Darüber können wir sprechen 🙂',
    'Gute Beobachtung.',
    'Lass uns das gemeinsam anschauen.',
  ]


  const [username, setUsername] = useState<string | null>(null);
  const [messages, setMessages] = useState<IChatMessage[]>([
  { id: '1', sender: 'ai', text: 'Hallo! Ich bin dein AI Buddy.', timestamp: new Date() },
  ]);

  const handleLogin = (name: string) => {
    setUsername(name);
  };

   const handleSend = (message: IChatMessage) => {
  // User-Nachricht sofort hinzufügen
  setMessages((prev) => [...prev, message]);

  // Nach kurzer Zeit AI-Antwort simulieren
  setTimeout(() => {
    const randomText =
      AI_Response[Math.floor(Math.random() * AI_Response.length)];

    const aiMessage: IChatMessage = {
      id: Date.now().toString() + '-ai',
      sender: 'ai',
      text: randomText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, aiMessage]);
  }, 1000);
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
