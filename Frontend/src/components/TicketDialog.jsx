/* eslint-disable react/prop-types */
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";


function TicketDialog({ ticket, onViewDetails }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" onClick={() => onViewDetails(ticket)}>
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detalles del Ticket</DialogTitle>
          <DialogDescription>
            Consulta la información del ticket a continuación.
          </DialogDescription>
        </DialogHeader>

        {ticket && (
          <div className="space-y-4">
            <div>
              <Label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Título
              </Label>
              <Input
                id="title"
                value={ticket.title}
                className="focus:outline-none focus:ring-0 focus:border-gray-300"
                readOnly
              />
            </div>

            <div>
              <Label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700"
              >
                Estado
              </Label>
              <Input
                id="status"
                value={ticket.status.replace("_", " ")}
                className="focus:outline-none focus:ring-0 focus:border-gray-300"
                readOnly
              />
            </div>

            <div>
              <Label
                htmlFor="priority"
                className="block text-sm font-medium text-gray-700"
              >
                Nivel de Dificultad
              </Label>
              <Input
                id="priority"
                value={ticket.difficultyLevel}
                className="focus:outline-none focus:ring-0 focus:border-gray-300"
                readOnly
              />
            </div>

            <div>
              <Label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Descripción
              </Label>
              <Textarea
                id="description"
                value={ticket.description}
                className="focus:outline-none focus:ring-0 focus:border-gray-300"
                readOnly
              />
            </div>

            <div>
              <Label
                htmlFor="created"
                className="block text-sm font-medium text-gray-700"
              >
                Creado el
              </Label>
              <Input
                id="created"
                value={ticket.createdAt}
                className="focus:outline-none focus:ring-0 focus:border-gray-300"
                readOnly
              />
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default TicketDialog;
