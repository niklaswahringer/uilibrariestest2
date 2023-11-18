import { IAddress } from '@/interfaces/IAddress';
import { faCalendar, faFile, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface CustomerTableCellProps {
  columnKey: string;
  cellValue: string | number | boolean | IAddress | Date;
}

const CustomerTableCell: React.FC<CustomerTableCellProps> = ({ columnKey, cellValue }) => {

    if (cellValue instanceof Object && 'country' in cellValue) {
        return <p>`${cellValue.streetNumber} ${cellValue.street}, ${cellValue.postal} ${cellValue.city}, ${cellValue.country}`</p>;
    } else if (cellValue instanceof Date) {
        const today = new Date();
        const birthDate = cellValue;
  
        let age = today.getFullYear() - birthDate.getFullYear();
  
        if ( today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate()) )
          age--;
  
        return <p>{age}</p>;
    }

  switch (columnKey) {
    case "name":
      return (
          <p className="text-bold text-small capitalize text-gray-800 font-bold">{typeof cellValue !== "string" ? "test" : cellValue}</p>
      );
      case "hasActiveAppointment":
        return (
          <p className={`text-bold text-small capitalize ${cellValue ? 'text-gray-800' : 'text-gray-400'} text-center`}>
            <FontAwesomeIcon icon={faCalendar}/>
          </p>
        );
      case "hasNotes":
        return (
          <p className={`text-bold text-small capitalize ${cellValue ? 'text-gray-800' : 'text-gray-400'} text-center`}>
            <FontAwesomeIcon icon={faFile}/>
          </p>
        );
      case "isFavourite":
        return (
          <p className={`text-bold text-small capitalize ${cellValue ? 'text-gray-800' : 'text-gray-400'} text-center`}>
            <FontAwesomeIcon icon={faStar}/>
          </p>
        );
      case "appointmentAmount":
        return (
          <p className={`text-bold text-small capitalize text-center`}>
            {cellValue}
          </p>
        );

    default:
      return <p>{cellValue}</p>;
  }
};

export default CustomerTableCell;
