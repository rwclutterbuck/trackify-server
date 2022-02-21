const express = require("express")
const router = express.Router();
const habitsController = require("../controllers/Crud")






//get habits





//create a habit (post)






//update a habit(put)





//delete a habit(destroy)
router.delete('/:id', habitsController.destroy)
// router.delete('/', habitsController.destroy)







module.exports = router;
