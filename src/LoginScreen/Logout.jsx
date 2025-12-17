import { useState } from "react";

import { Login } from "./Login";

export const Logout = () => {

    const [isLoggedOut, setIsLoggedOut] = useState(false);


    const handleLogout = () => {
        setIsLoggedOut(true);
        alert("Ich hoffe wir sehen und bald wieder!");

    }
    

    return <button onClick={handleLogout}>Logout</button>;
}