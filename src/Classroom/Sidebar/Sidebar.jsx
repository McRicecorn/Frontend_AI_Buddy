import { useState } from "react";
import "./Sidebar.css";

export const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className={`sidebar ${open ? "open" : "closed"}`}>
      <button onClick={() => setOpen(!open)}>☰</button>

      {open && (
        <ul>
          <li>🏫 Klassenzimmer</li>
          <li>👤 Profil</li>
          <li>⚙️ Einstellungen</li>
          <li>🚪 Logout</li>
        </ul>
      )}
    </div>
  );
};
