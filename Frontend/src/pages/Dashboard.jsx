import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TicketManagement from "../components/TicketManager";
import { useTheme } from "../context/ThemeContext";
import { Toaster } from "react-hot-toast";
import DashboardOverview from "../components/DashboardOverview";
function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const { darkMode } = useTheme();
  return (
    <div
      className={`flex h-screen bg-gray-100 ${
        darkMode ? "bg-gray-900" : "bg-slate-100"
      }`}
    >
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-8 overflow-auto">
        <Toaster />
        <h1 className="text-2xl font-bold mb-6">
          {activeTab === "dashboard" && "Dashboard Overview"}
          {activeTab === "tickets" && "Ticket Management"}
          {activeTab === "settings" && "Settings"}
          {activeTab === "help" && "Help & Support"}
        </h1>

        {activeTab === "dashboard" && <DashboardOverview />}
        {activeTab === "tickets" && <TicketManagement />}
      </main>
    </div>
  );
}

export default Dashboard;
