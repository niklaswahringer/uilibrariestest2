import { Metadata } from "next"
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell
} from "@nextui-org/table";
import { Button } from "@/components/ui/button"
import demoCustomers, { customerTableColumns, ICustomer } from "@/interfaces/CustomerInterface"
import { Card } from "@/components/ui/card"
import { useCallback, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar, faFile, faStar } from "@fortawesome/free-solid-svg-icons"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import TopNav from "@/components/top-nav"

export const metadata: Metadata = {
  title: "Customer",
  description: "Customer Page - handle operator",
}

interface CustomerPageProps { }

const Customer: React.FC<CustomerPageProps> = ({ }) => {
  const [selectedKeys, setSelectedKeys] = useState(new Set());

  const renderCell = useCallback((user: ICustomer, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof ICustomer];

    if (cellValue instanceof Object && 'country' in cellValue) {
      return `${cellValue.streetNumber} ${cellValue.street}, ${cellValue.postal} ${cellValue.city}, ${cellValue.country}`;
    }else if (cellValue instanceof Date) {
      const today = new Date();
      const birthDate = cellValue;

      let age = today.getFullYear() - birthDate.getFullYear();

      if ( today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate()) )
        age--;

      return age;
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
        return cellValue;
    }
  }, []);

  const renderHeaderColumn = useCallback((columnKey: string, label: string) => {
    
    switch (columnKey) {
      case "hasActiveAppointment":
        return (
            <p className="text-bold text-small capitalize text-gray-800 font-bold text-center">AA</p>
        );
      case "hasNotes":
        return ""
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
        return label;
    }
  }, []);

  return (
    <div className="bg-white w-full rounded-l-lg">
      <div className="flex flex-col">
        <TopNav />

        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
            <div className="flex items-center space-x-2">
              <Button>Add Customer</Button>
            </div>
          </div>
          <div className="flex items-start justify-between space-x-4">
            <Table aria-label="Example table with dynamic content"
              selectionMode="single"
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}>
              <TableHeader columns={customerTableColumns}>
                {(column) => <TableColumn key={column.key}>{renderHeaderColumn(column.key, column.label)}</TableColumn>}
              </TableHeader>
              <TableBody items={demoCustomers} emptyContent={"No customers found"}>
                {(item) => (
                  <TableRow key={item.key}>
                    {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                  </TableRow>
                )}
              </TableBody>
            </Table>
            {
              selectedKeys.size !== 0 && (
              <Card className="p-8 items-center flex flex-col w-1/3 space-y-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src="/avatars/01.png" alt="@handle" />
                  <AvatarFallback>C</AvatarFallback>
                </Avatar>
                <h3>Customer {selectedKeys}</h3>
                <p></p>
              </Card>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
} 
export default Customer;