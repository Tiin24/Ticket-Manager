import { Router } from "express";
import {
  createTicket,
  deleteTicket,
  getTickets,
  updateTicket,
} from "../controllers/ticketController.js";

const router = Router();

router.post("/", createTicket);
router.get("/", getTickets);
router.put("/:id", updateTicket);
router.delete("/:id", deleteTicket);

export default router;
