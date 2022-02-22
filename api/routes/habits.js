const express = require("express");
const router = express.Router();
const habitsController = require("../controllers/Crud");

//get habits

router.get("/", habitsController.showHabits);

//create a habit (post)

//update a habit(put)

//delete a habit(destroy)

module.exports = router;
