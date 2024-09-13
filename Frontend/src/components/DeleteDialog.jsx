/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import useTicketStore from "../store/useTickets";
import toast from "react-hot-toast";

function DeleteDialog({ ticketId }) {
  const [open, setOpen] = useState(false);
  const deleteTicket = useTicketStore((state) => state.deleteTicket);

  const handleDelete = async () => {
    try {
      await deleteTicket(ticketId);

      toast.success("elemento eliminado");
      setOpen(false);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Trash2 color="red" size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Eliminar Tarea</DialogTitle>
          <DialogDescription>
            ¿Estás seguro de que quieres eliminar esta tarea?
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button variant="destructive" onClick={handleDelete}>
            Eliminar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteDialog;
