const express = require("express");
const router = express.Router();
const habitsController = require("../controllers/habits");
const verifyToken = require("../middleware/auth");

router.use(verifyToken);

//get habits
router.get("/:UserId", habitsController.showHabits);

// needs refactoring
router.get("/:UserId/:habit", habitsController.specificHabit);

//create a habit (post)
router.post("/", habitsController.createHabit);

//update a habit(put)
router.patch("/:UserId/:habit", habitsController.updateStreak);

//delete a habit(destroy)
router.delete("/:UserId/:habit", habitsController.destroy);

// router.delete('/', habitsController.destroyAll)
module.exports = router;
