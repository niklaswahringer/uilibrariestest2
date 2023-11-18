import { Metadata } from "next"
import TopNav from "@/components/top-nav"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard Page - handle operator",
}

interface TeamProps { }

const Team: React.FC<TeamProps> = ({ }) => {
  return (
    <div className="bg-white w-full rounded-l-lg">
      <div className="flex-col flex">
        <TopNav />
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Team</h2>
          </div>
        </div>
      </div>
    </div>
  )
} 
export default Team;