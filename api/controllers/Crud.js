const Habits = require("../models/habits")


//list habits

async function showHabits(req,res){
    try{
        const userHabits2 = await Habits.findById(req.params.habit);
        //const userHabits2 = await Habits.findById;
        res.status(200).json(userHabits2)
    }
    catch (err){
        res.status(404).send(err)
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
        const newData2 = await Habits.createHabit(data);
        res.status(201).json(newData2);
             
        } catch(err){
            res.status(404).send(err);

        }}
  





//update habits






//delete habits





module.exports = {showHabits , specificHabit,createHabit} ;
