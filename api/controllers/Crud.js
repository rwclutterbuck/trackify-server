const Habits = require("../models/habits")

//create a habit

async function showHabits(req,res){
    try{
        const userHabits1 = await Habits.allHabits;
        res.status(200).json(userHabits1)
    }
    catch (err){
        res.status(404).json(err)
    }
    }



//list habits






//update habits






//delete habits





module.exports = {showHabits} ;
