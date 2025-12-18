import { useState } from "react";
import "./Login.css";
import { Classroom } from "../Classroom/Classroom";
import { ReturnButton } from "../Buttons/ReturnButton";
import { LoginScreen } from "./LoginScreen";
import "../Buttons/ReturnButton.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [goBack, setGoBack] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "student" && password === "password") {
      setIsLoggedIn(true);
    } else {
      alert("Falscher Benutzername oder Passwort");
    }
  };

  const returnToLoginScreen = () => {
    setGoBack(true);
  };

  if (goBack) {
    return <LoginScreen />;
  }
  


  if (isLoggedIn) {
    return <Classroom username={username} />;
  }

  
  
  return (
  <div className="login-wrapper"> 
    <ReturnButton onClick={returnToLoginScreen} />
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Passwort"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button type="submit">Login</button>
    </form>
    </div>
  );
};
