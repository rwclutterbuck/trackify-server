const express = require("express")
const router = express.Router()
const habitsController = require("../controllers/Crud")






//get habits

router.get('/habits', habitsController.showHabits);
router.get("/specifichabit", habitsController.specificHabit)
//create a habit (post)
router.post("/habits", )






//update a habit(put)





//delete a habit(destroy)








module.exports = router;
