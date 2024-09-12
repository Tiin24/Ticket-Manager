import { create } from 'zustand'

const useTicketStore = create((set) => ({
  tickets: [],
  fetchTickets: async () => {
    try {
      const response = await fetch("http://localhost:4000/tickets");
      const data = await response.json();
      set({ tickets: data });
    } catch (error) {
      console.log("Error feching Tickets", error);
    }
  },
  addTicket: async(newTicket)=>{
    try {
      const response = await fetch("http://localhost:4000/tickets", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTicket),
      });
      if (!response.ok) {
        throw new Error('Failed to add Ticket');
      }
      const addedTicket = await response.json();
      set((state) => ({
        tickets: [...state.tickets, addedTicket],
      }));
    } catch (error) {
      console.log(error)
    }
  }
}));

export default useTicketStore;
