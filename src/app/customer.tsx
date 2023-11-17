import { Metadata } from "next"
import Image from "next/image"
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
import demoCustomers, { customerTableColumns } from "@/interfaces/CustomerInterface"

export const metadata: Metadata = {
  title: "Customer",
  description: "Customer Page - handle operator",
}

interface TeamProps { }

const Customer: React.FC<TeamProps> = ({ }) => {
  return (
    <div className="bg-white w-full rounded-l-lg">
      <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Customer"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Customer"
          className="hidden dark:block"
        />
      </div>
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
          <Table aria-label="Example table with dynamic content">
            <TableHeader columns={customerTableColumns}>
              {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={demoCustomers}>
              {(item) => (
                <TableRow key={item.id}>
                  {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
} 
export default Customer;