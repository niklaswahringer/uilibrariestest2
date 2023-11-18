import { Metadata } from "next"
import Image from "next/image"
import TopNav from "@/components/top-nav"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard Page - handle operator",
}

interface BillingPageProps { }

const BillingPage: React.FC<BillingPageProps> = ({ }) => {
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
      <div className="flex flex-col">
        <TopNav />

        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Billing/Invoices</h2>
          </div>
        </div>
      </div>
    </div>
  )
} 
export default BillingPage;