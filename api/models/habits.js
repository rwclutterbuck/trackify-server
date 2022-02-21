const { init } = require("../initdb");
const { ObjectId } = require("mongodb")


class Habits {
    constructor(data) {
        this.name = data.name;
    }
    //list all habits of user and add id as a param
    static get allHabits(){
        return new Promise(async (resolve,reject) => {
            try {
                const db = await init();
                const Userhabits2 = await db.collection("habits").find().toArray()
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
