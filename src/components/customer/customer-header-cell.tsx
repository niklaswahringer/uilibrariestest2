import {  faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface CustomerHeaderCellProps {
  columnKey: string;
  label: string;
}

const CustomerHeaderCell: React.FC<CustomerHeaderCellProps> = ({ columnKey, label }) => {

    switch (columnKey) {
        case "hasActiveAppointment":
          return (
              <p className="text-bold text-small capitalize text-gray-800 font-bold text-center">AA</p>
          );
        case "hasNotes":
          return <p></p>
        case "appointmentAmount":
            return (
                <div className="flex flex-col items-center justify-center w-full pr-3">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-gray-800"
                    >
                        <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                    </svg>
                </div>
            );
        case "isFavourite":
          return (
            <p className={`text-bold text-small capitalize text-gray-800 text-center`}>
              <FontAwesomeIcon icon={faStar}/>
            </p>
          );
        default:
          return <p>{label}</p>;
      }
};

export default CustomerHeaderCell;
