/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import {
  BarChart2,
  Home,
  Settings,
  HelpCircle,
  LogOut,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Sidebar({ activeTab, setActiveTab }) {
  const { darkMode, toggleDarkMode } = useTheme(); 
  return (
    <aside
      className={`w-64 ${darkMode ? "bg-gray-800" : "bg-white"} shadow-md`}
    >
      <div className="p-4">
        <div className="flex items-center mb-6">
          <BarChart2
            className={`h-6 w-6 mr-2 ${
              darkMode ? "text-yellow-400" : "text-purple-600"
            }`}
          />
          <span
            className={`font-bold text-xl ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            TicketMaster
          </span>
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
          <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <Sun className="mr-2 h-4 w-4" />
          ) : (
            <Moon className="mr-2 h-4 w-4" />
          )}
          {darkMode ? "Light Mode" : "Dark Mode"}
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
