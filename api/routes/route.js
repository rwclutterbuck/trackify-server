const express = require("express")
const router = express.Router();
const habitsController = require("../controllers/Crud")






//get habits

router.get('/habits', habitsController.showHabits);



//create a habit (post)






//update a habit(put)





//delete a habit(destroy)

router.delete('/habits/:id', habitsController.destroyOne)
// router.delete('/habits', habitsController.destroyAll)







module.exports = router;
