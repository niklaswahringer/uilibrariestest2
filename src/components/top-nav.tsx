import { MainNav } from "@/components/main-nav"
import { Search } from "@/components/search"
import TeamSwitcher from "@/components/team-switcher"
import { UserNav } from "@/components/user-nav"

interface TopNavProps { }

const TopNav: React.FC<TopNavProps> = ({ }) => {

  return (
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
  )
} 
export default TopNav;