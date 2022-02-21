const { init } = require("../initdb");
const { ObjectId } = require("mongodb")


class Habits {
    constructor(data) {
        this.id = data.id;
        this.habit = data.habit;
        this.habit.name = data.habit.name;
        this.habit.frequency = data.habit.frequency;
        this.habit.streak = data.habit.streak;
        this.habit.history = data.habit.history;
        this.habit.goal = data.habit.goal;
        
    }
    //list all habits of user and add id as a param
    static get allHabits(){
        return new Promise(async(resolve,reject) => {
            try{
                const db = await init();
                const Userhabits2 = await db.collections("habits")
                // const Users_habits = User_habits.map(habit => new Habits({...habit}))
                resolve(Userhabits2)
            }
            catch(err){
                reject("Error retrieving User's habits")
            }
        })}




    //create a habit





    //update a habit (streak)




    //delete a habit





    //delete everything


    
    }




module.exports = Habits;
