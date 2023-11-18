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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import TopNav from "@/components/top-nav"
import CustomerTableCell from "@/components/customer/customer-table-cell";
import CustomerHeaderCell from "@/components/customer/customer-header-cell";

export const metadata: Metadata = {
  title: "Customer",
  description: "Customer Page - handle operator",
}

interface CustomerPageProps { }

const Customer: React.FC<CustomerPageProps> = ({ }) => {
  const [selectedKeys, setSelectedKeys] = useState(new Set());

  const renderCustomerCell = useCallback((user: ICustomer, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof ICustomer];
    return <CustomerTableCell columnKey={columnKey as string} cellValue={cellValue} />;
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
              onSelectionChange={setSelectedKeys}
            >
              <TableHeader columns={customerTableColumns}>
                { (column) => 
                  <TableColumn key={column.key}>
                    <CustomerHeaderCell columnKey={column.key} label={column.label}/>
                  </TableColumn>
                }
              </TableHeader>
              <TableBody items={demoCustomers} emptyContent={"No customers found"}>
                {(item) => (
                  <TableRow key={item.key}>
                    {(columnKey) => <TableCell>{renderCustomerCell(item, columnKey)}</TableCell>}
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