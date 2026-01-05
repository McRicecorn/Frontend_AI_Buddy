import { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Login } from './Pages/Login';
import Classroom from './Pages/Classroom';
import type { IChatMessage } from './Interfaces/IChatMessage';

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  palette: { // bei Bedarf anpassen
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
    background: {
      default: '#f0f8ff',
    },
  },
});

function App() {
<<<<<<< HEAD

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
=======
  const [username, setUsername] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)
  const [messages, setMessages] = useState<ChatMessage[]>([
    { from: 'ai', text: 'Hallo! Ich bin dein AI Buddy.' },
  ])
>>>>>>> 8913e80eb60641a300f32158834439ba0248b080

  const handleLogin = (name: string, pw: string) => {
    setUsername(name)
    setPassword(pw)
  }

<<<<<<< HEAD
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

=======
  const handleSend = (text: string) => {
    const newMessage: ChatMessage = { from: 'user', text }
    setMessages([...messages, newMessage])
  }
>>>>>>> 8913e80eb60641a300f32158834439ba0248b080

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme/>
      <div className="app-container">
        {!username || !password ? (
          <Login onLogin={handleLogin} />
        ) : (
          <Classroom username={username} messages={messages} onSend={handleSend} />
        )}
      </div>
    </ThemeProvider>
  )
}

export default App;
