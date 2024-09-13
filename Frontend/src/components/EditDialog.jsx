/* eslint-disable react/prop-types */
import { Pen } from "lucide-react";
import { useState, useEffect } from "react";
import useStore from "../store/useTickets";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import toast from "react-hot-toast";

function EditDialog({ ticketId }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [difficultyLevel, setDifficultyLevel] = useState("");
  const [status, setStatus] = useState("");
  const tickets = useStore((state) => state.tickets);
  const updateTicket = useStore((state) => state.updateTicket);

  useEffect(() => {
    const ticket = tickets.find((t) => t.id === ticketId);
    if (ticket) {
      setTitle(ticket.title);
      setDescription(ticket.description);
      setDifficultyLevel(ticket.difficultyLevel);
      setStatus(ticket.status);
    }
  }, [ticketId, tickets]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !difficultyLevel || !status) {
      toast.error("Por favor completa todos los campos");
    }

    const updatedTicket = {
      id: ticketId,
      title,
      description,
      difficultyLevel,
      status,
    };
    try {
      await updateTicket(updatedTicket);
      setOpen(false);
      toast.success("Ticket Modificado Correctamente");
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Pen size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Modificar Tarea</DialogTitle>
          <DialogDescription>
            Modifica la información de la tarea a continuación.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="ticketTitle"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre del Ticket
            </label>
            <Input
              id="ticketTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Escribe el nombre del ticket"
              className="focus:outline-none focus:ring-0 focus:border-gray-300"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Descripción
            </label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe la tarea"
              className="focus:outline-none focus:ring-0 focus:border-gray-300"
            />
          </div>
          <div>
            <label
              htmlFor="difficulty"
              className="block text-sm font-medium text-gray-700"
            >
              Nivel de Dificultad
            </label>
            <Select
              value={difficultyLevel}
              onValueChange={(value) => setDifficultyLevel(value)}
            >
              <SelectTrigger className="focus:outline-none focus:ring-0 focus:border-gray-300">
                <SelectValue placeholder="Selecciona un nivel" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="facil">Fácil</SelectItem>
                <SelectItem value="medio">Medio</SelectItem>
                <SelectItem value="dificil">Difícil</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700"
            >
              Estado
            </label>
            <Select value={status} onValueChange={(value) => setStatus(value)}>
              <SelectTrigger className="focus:outline-none focus:ring-0 focus:border-gray-300">
                <SelectValue placeholder="Selecciona un estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="in_progres">In Progres</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button type="submit">Guardar Cambios</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EditDialog;
