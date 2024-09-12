// import tickets from "../utils/Tickets.json";
import FilterBar from "./FilterBar";
import { useEffect, useState } from "react";
import TicketTable from "./TicketTable";
import useTicketStore from '../store/useTickets'
import { useTheme } from "../context/ThemeContext";

function TicketManagement() {
  const { darkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const {tickets, fetchTickets} = useTicketStore();

  useEffect(() => {
    fetchTickets()
  },[fetchTickets])

  // eslint-disable-next-line no-unused-vars
  const [selectedTicket, setSelectedTicket] = useState(null);

  const filteredTickets = tickets.filter(
    (ticket) =>
      ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (statusFilter === "all" || ticket.status === statusFilter)
  );
  return (
    <>
      <div className={`flex gap-4 mb-6" ${darkMode ? "bg-gray-900" : "bg-white"}`}>
        <FilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />
      </div>
      <TicketTable
        tickets={filteredTickets}
        onViewDetails={setSelectedTicket}
      />
    </>
  );
}

export default TicketManagement;
