import React, { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCartShopping, faUsers, faCalendar, faGear, faDollarSign } from '@fortawesome/free-solid-svg-icons';

interface DashboardWrapperProps {
  children: ReactNode;
}

const DashboardWrapper: React.FC<DashboardWrapperProps> = ({ children }) => {
  return (
    <div className="border p-1 min-h-screen  w-full flex bg-red-300">

        <div className="mr-4 pl-3 py-8 pr-2 flex flex-col h-auto items-center text-center justify-between">
            <div className="flex flex-col items-center justify-center w-full">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
                >
                    <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                </svg>
            </div>

            <div className='w-full h-auto flex flex-col mt-24 gap-12 items-center text-white'>
                <div className='bg-white p-4 rounded-full h-16 w-16'>
                    <FontAwesomeIcon icon={faHome} className="h-auto w-auto text-red-300"/>
                </div>
                <FontAwesomeIcon icon={faCalendar} className="h-8 w-8"/>
                <FontAwesomeIcon icon={faUsers} className="h-8 w-8"/>
                <FontAwesomeIcon icon={faCartShopping} className="h-8 w-8"/>
                <FontAwesomeIcon icon={faUser} className="h-8 w-8"/>
                <FontAwesomeIcon icon={faDollarSign} className="h-8 w-8"/>
            </div>

            <FontAwesomeIcon icon={faGear} className="h-8 w-8 text-white mt-4"/>
        </div>

      {children}
    </div>
  );
};

export default DashboardWrapper;
