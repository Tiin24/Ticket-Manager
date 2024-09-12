/* eslint-disable react/prop-types */
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TicketDialog from "./TicketDialog";
import DeleteDialog from "./DeleteDialog";

const statusColors = {
  open: "red",
  in_progress: "yellow",
  closed: "green",
};

function TicketTable({ tickets, onViewDetails }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Difficulty</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Actions</TableHead>
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
                  className={`bg-${statusColors[ticket.status]}-100 text-${
                    statusColors[ticket.status]
                  }-800 border-${statusColors[ticket.status]}-300`}
                >
                  {ticket.status.replace("_", " ")}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1 text-center">
                  <img src={ticket.gifturl} width={40} height={40}/>
                  {ticket.difficulty}</div>
              </TableCell>
              <TableCell>{ticket.createdAt}</TableCell>
              <TableCell>
                <TicketDialog ticket={ticket} onViewDetails={onViewDetails} />
              </TableCell>
              <TableCell>
                <DeleteDialog />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default TicketTable;
