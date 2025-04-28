import { Outlet } from "react-router-dom"
// import { MainNavigation } from "@/components/navigation/main-navigation"
import Footer from "./footer"
import Header from "./header"
// import { UpgradeNotice } from "@/components/upgrade-notice"

const PublicLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <MainNavigation /> */}
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* <UpgradeNotice /> */}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default PublicLayout