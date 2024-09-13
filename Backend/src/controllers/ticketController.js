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
    const { order = "ASC", status, difficultyLevel } = req.query;
    let filters = {};

    if (status) {
      filters.status = status;
    }

    if (difficultyLevel) {
      filters.difficultyLevel = difficultyLevel;
    }

    const tickets = await Ticket.findAll({
      where: filters,
      order: [["createdAt", order]],
    });

    res.status(200).json(tickets);
  } catch (error) {
    console.error("Error al obtener los tickets:", error);
    res
      .status(500)
      .json({ error: "Error del servidor al obtener los tickets" });
  }
};

export const updateTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, difficultyLevel, status } = req.body;

    const ticket = await Ticket.findByPk(id);
    if (!ticket) {
      return res.status(404).json({ error: "Ticket no encontrado" });
    }

    let gifUrl = ticket.gifUrl;
    if (difficultyLevel && difficultyLevel !== ticket.difficultyLevel) {
      gifUrl = await getGifForDifficulty(difficultyLevel);
    }

    await ticket.update({
      title: title || ticket.title,
      description: description || ticket.description,
      difficultyLevel: difficultyLevel || ticket.difficultyLevel,
      status: status || ticket.status,
      gifUrl,
    });

    console.log("Ticket actualizado:", ticket);

    res.status(200).json(ticket);
  } catch (error) {
    console.error("Error al actualizar el ticket:", error);
    res
      .status(500)
      .json({ error: "Error del servidor al actualizar el ticket" });
  }
};

export const deleteTicket = async (req, res) => {
  try {
    const { id } = req.params;

    const ticket = await Ticket.findByPk(id);
    if (!ticket) {
      return res.status(404).json({ error: "ticket no encontrado" });
    }

    await ticket.destroy();
    console.log("Ticket eliminado:", ticket);

    res.status(200).json({ message: "Ticket eliminado exitosamente", ticket });
  } catch (error) {
    res.status(500).json({ error: "Error del servidor al eliminar el ticket" });
  }
};
