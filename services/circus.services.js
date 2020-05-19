const TicketSchema = require("../models/circus.model");

const createTicket = async (reqBody) => {
  const ticket = await TicketSchema.create(reqBody);
  return ticket;
};

const getTickets = async () => {
  const ticket = await TicketSchema.find();
  return ticket;
};

const getTicketById = async (ticketId) => {
  const ticket = await TicketSchema.findById(ticketId);
  if (!ticket) {
    throw new Error("Not found");
  }
  return ticket;
};

const deleteTicket = async (ticketId) => {
  const ticket = await getTicketById(ticketId);
  await ticket.remove();
  return ticket;
};

const updateTicket = async (ticketId, updateParam) => {
  const ticket = await getTicketById(ticketId);
  Object.assign(ticket, updateParam);
  ticket.save();
  return ticket;
};

module.exports = {
  createTicket,
  getTickets,
  getTicketById,
  deleteTicket,
  updateTicket,
};
