'use client'
import { useState } from 'react';
import dynamic from 'next/dynamic';
import DashboardPage from './dashboard';

const Login = dynamic(() => import('../app/auth/login'));

const Home: React.FC = () => {
  const [user, setUser] = useState<string | null>(null);

  const handleLogin = (username: string) => {
    setUser(username);
  };

  return (
    <>
      {user ? (
        <DashboardPage />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
};

export default Home;
