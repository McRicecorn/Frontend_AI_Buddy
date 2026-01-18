import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

interface AppLayoutProps {
  username: string
  onLogout: () => void
}

const AppLayout: React.FC<AppLayoutProps> = ({ username, onLogout }) => {
  return (
    <>
        <NavBar username={username} onLogout={onLogout} />
        <Outlet />
    </>
  );
};

export default AppLayout;
