import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

import ticketRoutes from "./routes/ticket.routes.js";


// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Routes
app.use('/tickets',ticketRoutes)

export default app;