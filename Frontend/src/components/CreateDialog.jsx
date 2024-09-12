import { Plus } from "lucide-react";
import { useState } from "react";
import useStore from "../store/useTickets"; // Importa tu store
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

function CreateDialog() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [difficultyLevel, setDifficultyLevel] = useState("");
  const addTicket = useStore((state) => state.addTicket); // Obtén la función addTicket de la store

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !difficultyLevel) {
      alert("Por favor completa todos los campos");
      return;
    }
    const newTicket = { title, description, difficultyLevel };
    console.log("soy new ticket", newTicket);
    await addTicket(newTicket);
    setOpen(false); // Cierra el diálogo después de añadir el ticket
    // Resetea los campos del formulario
    setTitle("");
    setDescription("");
    setDifficultyLevel("");
    console.log(addTicket);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          Add Task
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Agregar Tarea</DialogTitle>
          <DialogDescription>
            Completa la información de la tarea a continuación.
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
          <DialogFooter>
            <Button type="submit">Guardar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default CreateDialog;
