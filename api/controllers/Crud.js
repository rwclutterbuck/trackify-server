const Habits = require("../models/habits")


//list habits

async function showHabits(req, res){
    try {
        const userHabits2 = await Habits.all;
        res.status(200).send(userHabits2)
    }
    catch (err){
        res.status(404).send({err})
    }
}

// list specific habits
async function specificHabit(req,res) {
    try{
        const a = await Habits.specificHabits(req.params.frequency,req.params.habit);
        res.status(200).send(a)
    }
    catch(err){
        res.status(404).send(err)
    }
}

// async function showOne(req, res) {
//     try {
//         const habit = await Habits.findById(req.params.habit)
//         res.status(200).send(habit)
//     } catch (err) {
//         res.status(404).send({err})
//     }
// }

//create a habit

async function createHabit(req,res){
    try{
        const newData = {
            UserId: req.params.UserId,
            habit: req.params.habit,
            frequency: req.params.frequency,
            streak: req.params.streak,
            goal:req.params.goal,
        }
        const newData2 = await Habits.createHabit(newData);
        res.status(201).json(newData2);
             
        } catch(err){
            res.status(404).send(err);

        }
    }


//update habits
async function update(req, res) {
    try {
        const habit = await Habits.specificHabit(req.params.id)
        const updatedStreak = await habit.update()
        res.json({streak: updatedStreak})
    } catch (err) {
        res.status(500).send({err})
    }
}

//delete habits
async function destroyOne(req, res) {
     try {
        const habit = await Habits.findById(req.params.id);
        await habit.delete();
        res.status(204).json('Habit was deleted')
    } catch (err) {
        res.status(500).json({err})
    }
    
}

async function destroyAll (req, res) {
  
    try {
       const habits = await Habits.all;
       await habits.destroy();
       res.status(204).json('Habits were deleted')
   } catch (err) {
       res.status(500).json({err})
   }
   
}

module.exports = { destroyOne, destroyAll, showHabits, update, specificHabit, createHabit, showOne }
