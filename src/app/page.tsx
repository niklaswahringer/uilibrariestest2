'use client'
import { useState } from 'react';
import dynamic from 'next/dynamic';
import DashboardPage from './dashboard';
import { NextUIProvider } from '@nextui-org/system';
import Register from './auth/register';
import OperatorWrapper from './auth/components/dashboardWrapper';
import TeamPage from './team';
import CustomerPage from './customer';
import CalendarPage from './calendar';
import BillingPage from './billing';
import ServicesPage from './services';

const Login = dynamic(() => import('../app/auth/login'));

const Home: React.FC = () => {
  const [user, setUser] = useState<string | null>();
  const [isLogin, setIsLogin] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  const handleLogin = (username: string) => {
    setUser(username);
  };

  const getComponentByPage = (page: string): React.ReactNode => {
    switch (page) {
      case "team":
        return <TeamPage />;
      case "home":
        return <DashboardPage />;
      case "calendar":
        return <CalendarPage />
      case "customer":
        return <CustomerPage />
      case "billing":
        return <BillingPage />
      case "services":
        return <ServicesPage />

      default:
        return null;
    }
  };

  return (
    <NextUIProvider>
      {user ? (
        <OperatorWrapper currentPage={currentPage} setCurrentPage={setCurrentPage}>
            {getComponentByPage(currentPage)}
        </OperatorWrapper>
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
