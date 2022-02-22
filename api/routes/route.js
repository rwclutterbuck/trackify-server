const express = require("express")
const router = express.Router();
const habitsController = require("../controllers/Crud")


//get habits

router.get('/habits', habitsController.showHabits);
router.get("/:frequency/:habit", habitsController.specificHabit)
// router.get('/habits/:id', habitsController.showOne)


//create a habit (post)

router.post("/", habitsController.createHabit );


//update a habit(put)

router.patch('/habits/:id', habitsController.update)


//delete a habit(destroy)

router.delete('/habits/:id', habitsController.destroyOne)
router.delete('/habits', habitsController.destroyAll)

module.exports = router;
