import { Metadata } from "next"
import { MainNav } from "@/components/main-nav"
import { Search } from "@/components/search"
import TeamSwitcher from "@/components/team-switcher"
import { UserNav } from "@/components/user-nav"
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell, 
  getKeyValue
} from "@nextui-org/table";
import { Button } from "@/components/ui/button"
import demoCustomers, { customerTableColumns, ICustomer } from "@/interfaces/CustomerInterface"
import { Card } from "@/components/ui/card"
import { useCallback, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar, faFile, faStar } from "@fortawesome/free-solid-svg-icons"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
export const metadata: Metadata = {
  title: "Customer",
  description: "Customer Page - handle operator",
}

interface TeamProps { }

const Customer: React.FC<TeamProps> = ({ }) => {
  const [selectedKeys, setSelectedKeys] = useState(new Set());

  const renderCell = useCallback((user: ICustomer, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof ICustomer];

    if (cellValue instanceof Object && 'country' in cellValue) {
      return `${cellValue.streetNumber} ${cellValue.street}, ${cellValue.postal} ${cellValue.city}, ${cellValue.country}`;
    }else if (cellValue instanceof Date) {
      const today = new Date();
      const birthDate = cellValue;

      let age = today.getFullYear() - birthDate.getFullYear();

      if (
        today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }

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

      default:
        return cellValue;
    }
  }, []);

  return (
    <div className="bg-white w-full rounded-l-lg">
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
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
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
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