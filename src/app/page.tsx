'use client'
import { useState } from 'react';
import dynamic from 'next/dynamic';
import DashboardPage from './dashboard';
import { NextUIProvider } from '@nextui-org/system';
import Register from './auth/register';
import DashboardWrapper from './auth/components/dashboardWrapper';

const Login = dynamic(() => import('../app/auth/login'));

const Home: React.FC = () => {
  const [user, setUser] = useState<string | null>("asd");
  const [isLogin, setIsLogin] = useState(false);
  
  const handleLogin = (username: string) => {
    setUser(username);
  };

  return (
    <NextUIProvider>
      {user ? (
        <DashboardWrapper>
          <DashboardPage />
        </DashboardWrapper>
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
