import tickets from "../utils/Tickets.json";
import FilterBar from "./FilterBar";
import { useState } from "react";
import TicketTable from "./TicketTable";

function TicketManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // eslint-disable-next-line no-unused-vars
  const [selectedTicket, setSelectedTicket] = useState(null);

  const filteredTickets = tickets.filter(
    (ticket) =>
      ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (statusFilter === "all" || ticket.status === statusFilter)
  );
  return (
    <>
      <div className="flex gap-4 mb-6">
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
