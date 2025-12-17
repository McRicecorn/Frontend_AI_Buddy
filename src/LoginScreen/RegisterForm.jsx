import { useState } from "react";
import { Login } from "./Login";
import { LoginScreen } from "./LoginScreen";
export const RegisterForm = () => {
    const [Name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [registered, setRegistered] = useState(false);
    const handleSubmit = (e) => {
    
   
    e.preventDefault();
    if (confirmEmail !== email) {
    alert("E-Mail stimmt nicht überein");
        return;
    }
    if (Name === "" || password === "" || email === "") {
    alert("Bitte alle Felder ausfüllen");
        return;
    }
    else {
    alert("Registrierung erfolgreich!");
    setRegistered(true);
    
    }



    }

    if (registered) {
    return <LoginScreen />;
    }

    return (
    <form onSubmit={handleSubmit}>
    <input 
    type="text" 
    placeholder="Name" 
    value={Name} 
    onChange={(e) => setName(e.target.value)} />
    <br />
    <input 
    type="password" 
    placeholder="Passwort" 
    value={password} 
    onChange={(e) => setPassword(e.target.value)} />

    <input 
    type="email" 
    placeholder="E-Mail" 
    value={email} 
    onChange={(e) => setEmail(e.target.value)} />
    <br />
    <input 
    type="email" 
    placeholder="E-Mail bestätigen" 
    value={confirmEmail} 
    onChange={(e) => setConfirmEmail(e.target.value)} />
    <br />
    <button type="submit">Registrieren</button>
    </form>
    )
    };