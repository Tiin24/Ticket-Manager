import { Ticket } from "../models/Ticket.js";
import { getGifForDifficulty } from "../services/giphyService.js";

export const createTicket = async (req, res) => {
  try {
    const { title, description, difficultyLevel, status } = req.body;

    if (!title || !description || !difficultyLevel) {
      return res
        .status(400)
        .json({ error: "Todos los campos son obligatorios" });
    }

    const gifUrl = await getGifForDifficulty(difficultyLevel);

    const ticket = await Ticket.create({
      title,
      description,
      difficultyLevel,
      gifUrl,
      status,
    });

    console.log("Ticket creado:", ticket);

    res.status(201).json(ticket);
  } catch (error) {
    console.error("Error al crear el ticket:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

export const getTickets = async (req, res) => {
  try {
    const { order, status, difficultyLevel } = req.query;
    let filters = {};

    if (status) {
      filters.status = status;
    }

    if (difficultyLevel) {
      filters.difficultyLevel = difficultyLevel;
    }

    const sortOrder = order === "DESC" ? "DESC" : "ASC";
    const tickets = await Ticket.findAll({
      where: filters,
      order: [["createdAt", sortOrder]],
    });

    res.status(200).json(tickets);
  } catch (error) {
    console.error("Error al obtener los tickets:", error);
    res
      .status(500)
      .json({ error: "Error del servidor al obtener los tickets" });
  }
};
