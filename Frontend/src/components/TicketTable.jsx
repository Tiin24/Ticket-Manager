/* eslint-disable react/prop-types */
import { Badge } from "./ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import TicketDialog from "./TicketDialog";
import DeleteDialog from "./DeleteDialog";
import { useTheme } from "../context/ThemeContext";
import EditDialog from "./EditDialog";

const statusClasses = {
  open: "bg-green-100 text-green-800 border-green-300",
  in_progres: "bg-yellow-100 text-yellow-800 border-yellow-300",
  closed: "bg-red-100 text-red-800 border-red-300",
};

function TicketTable({ tickets, onViewDetails }) {
  const { darkMode } = useTheme();
  return (
    <div
      className={`shadow-md rounded-lg overflow-hidden ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Difficulty</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Edit</TableHead>
            <TableHead></TableHead>
            <TableHead>Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tickets.map((ticket) => (
            <TableRow key={ticket.id}>
              <TableCell>{ticket.id}</TableCell>
              <TableCell>{ticket.title}</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={statusClasses[ticket.status]}
                >
                  {ticket.status.replace("_", " ")}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1 text-center">
                  <img src={ticket.gifUrl} width={50} height={50} />
                  {ticket.difficultyLevel}
                </div>
              </TableCell>
              <TableCell>{ticket.createdAt}</TableCell>
              <TableCell>
                <TicketDialog ticket={ticket} onViewDetails={onViewDetails} />
              </TableCell>
              <TableCell>
                <EditDialog ticketId={ticket.id} />
              </TableCell>
              <TableCell>
                <DeleteDialog ticketId={ticket.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default TicketTable;
