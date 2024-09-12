import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TicketManagement from "../components/TicketManager";
// import DashboardOverview from "./DashboardOverview";
// import SettingsSection from "./SettingsSection";
// import HelpSection from "./HelpSection";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-8 overflow-auto">
        <h1 className="text-2xl font-bold mb-6">
          {activeTab === "dashboard" && "Dashboard Overview"}
          {activeTab === "tickets" && "Ticket Management"}
          {activeTab === "settings" && "Settings"}
          {activeTab === "help" && "Help & Support"}
        </h1>

        {activeTab === "tickets" && <TicketManagement />}
        {/* {activeTab === "dashboard" && <DashboardOverview />}
        {activeTab === "settings" && <SettingsSection />}
        {activeTab === "help" && <HelpSection />} */}
      </main>
    </div>
  );
}

export default Dashboard;
