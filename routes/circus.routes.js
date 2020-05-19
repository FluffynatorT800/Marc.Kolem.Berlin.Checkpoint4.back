const express = require("express");
const router = express.Router();
const circusController = require("../controllers/circus.controller");

router.post("/", circusController.createTicket);
router.get("/", circusController.getTickets);
//router.get("/:id", circusController.getTicketbyId);
router.delete("/:id", circusController.deleteTicket);
router.patch("/:id", circusController.updateTicket);

module.exports = router;
