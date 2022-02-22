const express = require("express")
const router = express.Router();
const habitsController = require("../controllers/Crud")


//get habits

router.get('/habits', habitsController.showHabits);
router.get('/habits/:id', habitsController.showOne)



// HAMZA ROUTES
// router.get('/:habit', habitsController.showHabits);
// router.get("/:frequency/:habit", habitsController.specificHabit)


//create a habit (post)
// router.post("/", habitsController.createHabit )






//update a habit(put)
router.patch('/habits/:id', habitsController.update)


//delete a habit(destroy)
router.delete('/habits/:id', habitsController.destroyOne)
router.delete('/habits', habitsController.destroyAll)

module.exports = router;
