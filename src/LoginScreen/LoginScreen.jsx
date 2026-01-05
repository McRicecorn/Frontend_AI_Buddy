import { useState } from "react";
import { Login } from "./Login";
import { LoginButton } from "./LoginButton";
import { RegisterButton } from "./RegisterButton";
import { RegisterForm } from "./RegisterForm";

export const LoginScreen = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  if (showRegister) {
    return <RegisterForm/>;
  }

  if (showLogin) {
    return <Login />;
  }


  return (
    <div className="login-screen">
      <h1>Willkommen zum Klassenzimmer</h1>
      <p>Möchtest du dich einloggen?</p>

      <LoginButton onClick={() => setShowLogin(true)} />

      <p>Oder neu registrieren?</p>
      <RegisterButton onClick={() => setShowRegister(true)} />
    </div>
  );
};
