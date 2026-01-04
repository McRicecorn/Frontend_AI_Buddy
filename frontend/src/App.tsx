import { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Login } from './Pages/Login';
import Classroom from './Pages/Classroom';
import type { ChatMessage } from './Interfaces';

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
  const [username, setUsername] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)
  const [messages, setMessages] = useState<ChatMessage[]>([
    { from: 'ai', text: 'Hallo! Ich bin dein AI Buddy.' },
  ])

  const handleLogin = (name: string, pw: string) => {
    setUsername(name)
    setPassword(pw)
  }

  const handleSend = (text: string) => {
    const newMessage: ChatMessage = { from: 'user', text }
    setMessages([...messages, newMessage])
  }

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
