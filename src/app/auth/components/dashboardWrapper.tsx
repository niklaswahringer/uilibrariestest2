import React, { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCartShopping, faUsers, faCalendar, faGear, faDollarSign } from '@fortawesome/free-solid-svg-icons';

interface DashboardWrapperProps {
  children: ReactNode;
}

const DashboardWrapper: React.FC<DashboardWrapperProps> = ({ children }) => {
  return (
    <div className="border p-0 min-h-screen flex bg-gray-800">

        <div className="pl-3 py-8 flex flex-col h-auto items-center text-center justify-between">
            <div className="flex flex-col items-center justify-center w-full pr-3">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-white"
                >
                    <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                </svg>
            </div>

            <div className='w-full h-auto flex flex-col gap-12 items-center text-white'>
                <div className='bg-white rounded-l-full h-14 w-14 items-center justify-center flex -mb-4'>
                    <FontAwesomeIcon icon={faHome} className="h-6 w-6 text-gray-800 pl-2"/>
                </div>
                <FontAwesomeIcon icon={faCalendar} className="h-6 w-6 pr-4 pl-4"/>
                <FontAwesomeIcon icon={faUsers} className="h-6 w-6 pr-4 pl-4"/>
                <FontAwesomeIcon icon={faCartShopping} className="h-6 w-6 pr-4 pl-4"/>
                <FontAwesomeIcon icon={faUser} className="h-6 w-6 pr-4 pl-4"/>
                <FontAwesomeIcon icon={faDollarSign} className="h-6 w-6 pr-4 pl-4"/>
            </div>

            <FontAwesomeIcon icon={faGear} className="h-6 w-6 text-white mt-4 pr-3"/>
        </div>

      {children}
    </div>
  );
};

export default DashboardWrapper;
