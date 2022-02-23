const express = require("express");
const router = express.Router();
const habitsController = require("../controllers/habits");

//get habits

router.get("/:UserId", habitsController.showHabits);

// needs refactoring
router.get("/:UserId/:habit", habitsController.specificHabit);

//create a habit (post)
router.post("/", habitsController.createHabit);
//update a habit(put)
router.patch("/:id", habitsController.update);

//delete a habit(destroy)
router.delete("/:id", habitsController.destroy);
// router.delete('/', habitsController.destroyAll)
module.exports = router;
