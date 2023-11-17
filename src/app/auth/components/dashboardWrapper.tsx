import React, { ReactNode, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCartShopping, faUsers, faCalendar, faGear, faDollarSign, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

interface DashboardWrapperProps {
  children: ReactNode;
}

interface MainNavItems {
    id: string;
    label: IconDefinition;
}

const DashboardWrapper: React.FC<DashboardWrapperProps> = ({ children }) => {

    const [selectedNavItem, setSelectedNavItem] = useState("home");

    const navItems: MainNavItems[] = [
        { id: "home", label: faHome },
        { id: "calender", label: faCalendar },
        { id: "team", label: faUsers },
        { id: "services", label: faCartShopping },
        { id: "customer", label: faUser },
        { id: "billing", label: faDollarSign },
    ];

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

                <div className='w-full h-auto flex flex-col items-center text-white'>
                    {navItems.map(navItem => (
                        <button className='relative p-5'
                            onClick={() => setSelectedNavItem(navItem.id)}
                            >
                            { selectedNavItem === navItem.id ? (
                                <motion.div 
                                    layoutId='nav-pill'
                                    transition={{ duration: .6 }}
                                    className="bg-gray-100 inset-0 absolute rounded-l-full items-center justify-center flex"
                                    >
                                </motion.div>
                            ) : null
                         }
                         <FontAwesomeIcon icon={navItem.label} className={`${ selectedNavItem === navItem.id ? "" : "hover:text-yellow-200"}
                            relative h-5 w-5 z-10 mix-blend-exclusion `}/>
                        </button>
                    ))}
                </div>

                <FontAwesomeIcon icon={faGear} className="h-6 w-6 text-white mt-4 pr-3" />
            </div>
        {children}
        </div>
    );
};

export default DashboardWrapper;
