const Habits = require("../models/habits")


//list habits

async function showHabits(req,res){
    try{
        const userHabits2 = await Habits.findById(req.params.UserId);
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
        const a = await Habits.specificHabits(req.params.UserId,req.params.habit);
        res.status(200).json(a)
    }
    catch(err){
        res.status(404).send(err)
    }
}

//create a habit

async function createHabit(req,res){
    try{
        /*const newData = {
            UserId:req.params.UserId,
            ...req.body
        }
        const newData2 = await Habits.createHabit(newData);
        res.status(201).json(newData2);*/
        const newResult = await Habits.createHabit(req.body)
        res.status(201).json(newResult)
        
             
        } catch(err){
            res.status(404).send(err);

        }}
  





//update habits






//delete habits





module.exports = {showHabits , specificHabit,createHabit} ;
