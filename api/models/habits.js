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
    //list all habits of user and add id as a param
    static get all(){
        return new Promise(async (resolve,reject) => {
            try {
                const db = await init();
                const Userhabits = await db.collection("habits").find().toArray()
                const Userhabits1 = Userhabits.map(habit => new Habits({...habit, id: habit._id}))
                resolve(Userhabits1)
            }
            catch(err){
                reject("Error retrieving User's habits")
            }
        })}

    //create a habit




    //update a habit (streak)
    



    //delete a habit

    delete(){
        return new Promise(async (resolve, reject) => {
            try {
                const db = await init();
                await db.collection('habits').deleteOne({ _id: ObjectId(this.id) })
                resolve('Habit was successfully deleted')
            } catch (err) {
                reject("Habit could not be deleted")
            }
        })
    }

    //delete everything
    destroy(){
        return new Promise(async (resolve, reject) => {
            try {
                const db = await init();
                await db.collection('habits').deleteMany({})
                resolve('Habits were successfully deleted')
            } catch (err) {
                reject("Habits could not be deleted")
            }
        })
    }

    
}

module.exports = Habits;
