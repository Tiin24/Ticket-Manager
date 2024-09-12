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

function DeleteDialog() {
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    setOpen(false); // Cierra el diálogo después de eliminar
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="hover:bg-red-100">
          <Trash2 color="red" />
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
          <Button
            variant="outline"
            onClick={() => {
              handleDelete();
            }}
          >
            Cancelar
          </Button>
          <Button
            variant="destructive"
            onClick={() => {
              handleDelete();
            }}
          >
            Eliminar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteDialog;
