const { init } = require("../initdb");
const { ObjectId } = require("mongodb")


class Habits {
    constructor(data) {
        this.UserId = data.UserId;
        this.habit = data.habit;
        this.frequency = data.frequency;
        this.streak = data.streak;
        //this.habit.history = data.habit.history;
        this.goal = data.goal;
    }
    //list all habits of user with id as a params
    static findById(a){
        return new Promise(async (resolve,reject) => {
            try {
                const db = await init();
                const Userhabits = await db.collection("habits").find({habit:a} ).toArray()
                //const Userhabits1 = Userhabits.map(habit => new Habits({...habit, id: habit._id}))
                resolve(Userhabits)
            }
            catch(err){
                reject("Error retrieving User's habits")
            }
        })}
    //get specific habits    
    static specificHabits(a,specHabit) {
        return new Promise(async(resolve,reject) => {
            try{
                const db = await init();
                const specHab = awaitdb.collection("habits").find({
                    frequency:{$eq:a},
                    habit:{$eq:specHabit} //needs working on
                }).toArray();
                const specHab1 = specHab.map(habit => new Habits({...habit, id: habit._id}))
            }

            catch(err){
                reject("Error retrieving habit")
            }
        })}


    //create a habit
    static createHabit(data){
        return new Promise(async(resolve,reject) => {
            try {
                const db = await init;
                const { UserId , habit, frequency, streak, goal} = data
                const result = await db.collection("habits").findOneAndUpdate({
                    UserId: UserId},
                    {$setOnInsert:{
                    UserId: UserId,
                    habit: habit,
                    frequency: frequency,
                    streak:streak,
                    goal: goal,
                    }},
                    {upsert:true}
                )
                const newHabit = new Habits({...result.value})
                resolve(newHabit)
            }
            catch(err){
                reject("Error creating habit")
            }
        })
    }




    //update a habit (streak)




    //delete a habit





    //delete everything


    
    }




module.exports = Habits;
