'use client'
import { useState } from 'react';
import dynamic from 'next/dynamic';
import DashboardPage from './dashboard';
import { NextUIProvider } from '@nextui-org/system';
import Register from './auth/register';

const Login = dynamic(() => import('../app/auth/login'));

const Home: React.FC = () => {
  const [user, setUser] = useState<string | null>(null);
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = (username: string) => {
    setUser(username);
  };

  return (
    <NextUIProvider>
      {user ? (
        <DashboardPage />
      ) : ( isLogin ? (
            <Login onLogin={handleLogin} />
        ) : (
          <Register onLogin={handleLogin} />
        )
      )}
    </NextUIProvider>
  );
};

export default Home;
