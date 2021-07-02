var express = require('express');
var router = express.Router();
const reportController = require('../controllers/report.controller');


router.get('/', reportController.GetTickets);
router.put('/:id', reportController.UpdateTicket);


module.exports = router;
