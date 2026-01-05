import "./LogoutButton.css";

export const LogoutButton = ({ onClick }) => {
  return (
    <button className="logout-button" onClick={onClick}>
      Logout
    </button>
  );
};
