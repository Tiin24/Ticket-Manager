/* eslint-disable no-unused-vars */
import FilterBar from "./FilterBar";
import { useEffect, useState } from "react";
import TicketTable from "./TicketTable";
import useTicketStore from "../store/useTickets";
import { useTheme } from "../context/ThemeContext";
import Pagination from "./Pagination";

function TicketManagement() {
  const { darkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [order, setOrder] = useState("ASC");

  const { tickets, fetchTickets } = useTicketStore();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    const status = statusFilter === "all" ? "" : statusFilter;
    const difficulty = difficultyFilter === "all" ? "" : difficultyFilter;

    fetchTickets(order, status, difficulty);
  }, [fetchTickets, statusFilter, difficultyFilter, order]);

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(itemsPerPage);
  const [selectedTicket, setSelectedTicket] = useState(null); // Define setSelectedTicket

  const filteredTickets = tickets.filter(
    (ticket) =>
      ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (statusFilter === "all" || ticket.status === statusFilter)
  );

  const totalItems = filteredTickets.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    // Update the filtered tickets when the page changes
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    setStartIndex(startIndex);
    setEndIndex(endIndex);
  }, [currentPage, totalItems, itemsPerPage]);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <>
      <div
        className={`flex gap-4 mb-6 ${darkMode ? "bg-gray-900" : "bg-white"}`}
      >
        <FilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          difficultyFilter={difficultyFilter}
          setDifficultyFilter={setDifficultyFilter}
          order={order}
          setOrder={setOrder}
        />
      </div>
      <TicketTable
        tickets={filteredTickets.slice(startIndex, endIndex)}
        onViewDetails={setSelectedTicket} // Pass setSelectedTicket here
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        goToPage={goToPage}
        startIndex={startIndex}
        endIndex={endIndex}
        totalItems={totalItems}
      />
    </>
  );
}

export default TicketManagement;
