const Habits = require("../models/habits")

//create a habit




//list habits

async function showHabits(req,res){
    try{
        const userHabits2 = await Habits.allHabits;
        res.status(200).send(userHabits2)
    }
    catch (err){
        res.status(404).send(err)
    }
    }





//update habits






//delete habits





module.exports = {showHabits} ;
