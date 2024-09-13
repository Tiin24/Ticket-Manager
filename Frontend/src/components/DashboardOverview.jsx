import { useTheme } from "../context/ThemeContext";
import useTicketStore from "../store/useTickets";

function DashboardOverview() {
  const { darkMode } = useTheme();
  const { tickets } = useTicketStore();

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 `}>
      <div className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-lg shadow-md`}>
        <h2 className="text-xl font-semibold mb-4">Total Tickets</h2>
        <p className="text-3xl font-bold">{tickets.length}</p>
      </div>
      <div className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-lg shadow-md`}>
        <h2 className="text-xl font-semibold mb-4">Open Tickets</h2>
        <p className="text-3xl font-bold">
          {tickets.filter((t) => t.status === "open").length}
        </p>
      </div>
      <div className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-lg shadow-md`}>
        <h2 className="text-xl font-semibold mb-4">Closed Tickets</h2>
        <p className="text-3xl font-bold">
          {tickets.filter((t) => t.status === "closed").length}
        </p>
      </div>
      <div className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-lg shadow-md`}>
        <h2 className="text-xl font-semibold mb-4">In Progress Tickets</h2>
        <p className="text-3xl font-bold">
          {tickets.filter((t) => t.status === "in_progres").length}
        </p>
      </div>
    </div>
  );
}

export default DashboardOverview;
