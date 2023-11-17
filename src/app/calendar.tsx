import { Metadata } from "next"
import Image from "next/image"
import { MainNav } from "@/components/main-nav"
import { Search } from "@/components/search"
import TeamSwitcher from "@/components/team-switcher"
import { UserNav } from "@/components/user-nav"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard Page - handle operator",
}

interface CalendarProps { }

const Calendar: React.FC<CalendarProps> = ({ }) => {
  return (
    <div className="bg-white w-full rounded-l-lg">
      <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
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
            <h2 className="text-3xl font-bold tracking-tight">Calendar</h2>
          </div>
        </div>
      </div>
    </div>
  )
} 
export default Calendar;