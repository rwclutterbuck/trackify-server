const { init } = require('../dbConfig/initdb')
const { ObjectId } = require('mongodb')

class Habits {
    constructor(data) {
        this.id = data.id,
        this.habit.name = data.habit.name;
        this.habit.frequency = data.habit.frequency;
        this.habit.streak = data.habit.streak;
        this.habit.history = data.habit.history;
        this.habit.goal = data.habit.goal;
    }
    //list all habits






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
