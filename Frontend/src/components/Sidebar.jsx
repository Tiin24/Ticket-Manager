import { Button } from "@/components/ui/button";
import { BarChart2, Home, Settings, HelpCircle, LogOut } from "lucide-react";

// eslint-disable-next-line react/prop-types
function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-4">
        <div className="flex items-center mb-6">
          <BarChart2 className="h-6 w-6 mr-2 text-purple-600" />
          <span className="font-bold text-xl">TicketMaster</span>
        </div>
        <nav>
          <Button
            variant={activeTab === "dashboard" ? "default" : "ghost"}
            className="w-full justify-start mb-2"
            onClick={() => setActiveTab("dashboard")}
          >
            <Home className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <Button
            variant={activeTab === "tickets" ? "default" : "ghost"}
            className="w-full justify-start mb-2"
            onClick={() => setActiveTab("tickets")}
          >
            <BarChart2 className="mr-2 h-4 w-4" />
            Tickets
          </Button>
          <Button
            variant={activeTab === "settings" ? "default" : "ghost"}
            className="w-full justify-start mb-2"
            onClick={() => setActiveTab("settings")}
          >
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Button
            variant={activeTab === "help" ? "default" : "ghost"}
            className="w-full justify-start mb-2"
            onClick={() => setActiveTab("help")}
          >
            <HelpCircle className="mr-2 h-4 w-4" />
            Help & Support
          </Button>
        </nav>
      </div>
      <div className="absolute bottom-4 left-4">
        <Button variant="ghost" className="w-full justify-start text-red-600">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </aside>
  );
}

export default Sidebar;
