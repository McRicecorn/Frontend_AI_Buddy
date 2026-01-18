import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { Login } from './Pages/Login'
import SubjectSelection from './Pages/SubjectSelection'
import type { IChatMessage } from './Interfaces/IChatMessage'
import { Subject } from '../src/classes/Subject'
import NotFound from './Pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import SubjectRoute from './components/SubjectRoute/SubjectRoute'
import AppLayout from './components/AppLayout/AppLayout'

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

  const AI_Response: string[] = [
    'Interessante Frage!',
    'Darüber können wir sprechen 🙂',
    'Gute Beobachtung.',
    'Lass uns das gemeinsam anschauen.',
  ]


  
  const [username, setUsername] = useState<string | null>(() => {
    return sessionStorage.getItem("username") // nur für Demo
  })
  const [password, setPassword] = useState<string | null>(() => {
  return sessionStorage.getItem("password") // nur für Demo
  })
  const [messages, setMessages] = useState<IChatMessage[]>([
    { id: '1', sender: 'ai', text: 'hi', timestamp: new Date() },
  ])
  const [subjects, setSubjects] = useState<Subject[] | null>([
    new Subject("Deutsch"),
    new Subject("Englisch"),
    new Subject("Französisch"),
    new Subject("Latein"),
    new Subject("Mathematik"),
    new Subject("Physik", 2),
    new Subject("Informatik"),
    new Subject("Biologie"),
    new Subject("Chemie"),
    new Subject("Geographie"),
    new Subject("Kunst"),
    new Subject("Musik", 1),
    new Subject("Sport"),
  ])

  const handleLogin = (name: string, pw: string) => {
    setUsername(name)
    setPassword(pw)

    sessionStorage.setItem("username", name) // nur für Demo
    sessionStorage.setItem("password", pw) // nur für Demo
  }

  const handleLogout = () => {
    setUsername(null)
    setPassword(null)

    sessionStorage.removeItem("username") // nur für Demo
    sessionStorage.removeItem("password") // nur für Demo
  }

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
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme/>
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/" element={<ProtectedRoute condition={!!username && !!password}><AppLayout username={username!} onLogout={handleLogout} /></ProtectedRoute>} >
            <Route index element={<ProtectedRoute condition={!!username && !!password}><SubjectSelection username={username!} subjects={subjects} /></ProtectedRoute>} />
            <Route path="classroom/:subject" element={<ProtectedRoute condition={!!username && !!password}><SubjectRoute subjects={subjects} username={username!} messages={messages} onSend={handleSend} /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;
