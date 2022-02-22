const express = require("express")
const router = express.Router()
const habitsController = require("../controllers/Crud")






//get habits

router.get('/:UserId', habitsController.showHabits);
router.get("/:UserId/:habit", habitsController.specificHabit)
//create a habit (post)
router.post("/", habitsController.createHabit );






//update a habit(put)





//delete a habit(destroy)








module.exports = router;
