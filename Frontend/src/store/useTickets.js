import { create } from "zustand";

const url_base = import.meta.env.VITE_APP_API_URL;

const useTicketStore = create((set) => ({
  tickets: [],
  fetchTickets: async (order = "ASC", status = "", difficultyLevel = "") => {
    try {
      const queryParams = new URLSearchParams({
        order,
        status,
        difficultyLevel,
      }).toString();

      const response = await fetch(
        `${url_base}/tickets?${queryParams}`
      );
      const data = await response.json();

      set({ tickets: data });
    } catch (error) {
      console.log("Error fetching Tickets", error);
    }
  },

  addTicket: async (newTicket) => {
    try {
      const response = await fetch(`${url_base}/tickets`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTicket),
      });
      if (!response.ok) {
        throw new Error("Failed to add Ticket");
      }
      const addedTicket = await response.json();
      set((state) => ({
        tickets: [...state.tickets, addedTicket],
      }));
    } catch (error) {
      console.log(error);
    }
  },
  updateTicket: async (updatedTicket) => {
    try {
      const response = await fetch(
        `${url_base}/tickets/${updatedTicket.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedTicket),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update Ticket");
      }

      const newTicket = await response.json();

      set((state) => ({
        tickets: state.tickets.map((ticket) =>
          ticket.id === newTicket.id ? newTicket : ticket
        ),
      }));
    } catch (error) {
      console.log(error);
    }
  },
  deleteTicket: async(ticketId) => {
    try {
      const response = await fetch(`${url_base}/tickets/${ticketId}`,{
        method: "DELETE",
      })
      if (!response.ok) {
        throw new Error("Failed to delete Ticket");
      }

      set((state) => ({
        tickets: state.tickets.filter((ticket) => ticket.id !== ticketId),
      }));
    } catch (error) {
      console.log(error);
    }
  }
}));

export default useTicketStore;
