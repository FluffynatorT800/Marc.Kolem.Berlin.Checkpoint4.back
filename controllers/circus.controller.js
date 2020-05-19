const ticketService = require("../services/circus.services");

const createTicket = async (req, res, next) => {
  console.log("req", req.body);
  try {
    const ticket = await ticketService.createTicket({
      title: req.body.title,
      done: false,
    });
    res.status(200).json({ result: ticket });
  } catch (err) {
    next(err);
  }
};

const getTickets = async (req, res, next) => {
  try {
    const ticket = await ticketService.getTickets();
    res.status(200).json({ result: ticket });
  } catch (err) {
    next(err);
  }
};

const getTicketById = async (req, res, next) => {
  try {
    const ticket = await ticketService.getTicketById(req.params.id);
    res.status(200).json({ result: ticket });
  } catch (err) {
    next(err);
  }
};

const deleteTicket = async (req, res, next) => {
  try {
    const ticket = await ticketService.deleteTicket(req.params.id);
    res.status(200).json({ result: "done", deletedticket: ticket });
  } catch (err) {
    next(err);
  }
};

const updateTicket = async (req, res, next) => {
  try {
    const ticket = await ticketService.updateTicket(req.params.id, req.body);
    res.status(200).json({ result: "reserverd", updatedTicket: ticket });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createTicket,
  getTickets,
  getTicketById,
  deleteTicket,
  updateTicket,
};
