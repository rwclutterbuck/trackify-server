const { init } = require("../initdb");
const { ObjectId, Db } = require("mongodb");

class Habits {
  constructor(data) {
    this.id = data.id;
    this.UserId = data.UserId;
    this.habit = data.habit;
    this.frequency = data.frequency;
    this.streak = data.streak;
    //this.habit.history = data.habit.history;
    this.goal = data.goal;
  }
  //list all habits of user and add id as a param
  static findByUserId(a) {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init();
        const Userhabits = await db
          .collection("habits")
          .find({ UserId: a })
          .toArray();
        const Userhabits1 = Userhabits.map(
          (habit) => new Habits({ ...habit, id: habit._id })
        );
        resolve(Userhabits1);
      } catch (err) {
        reject("Error retrieving User's habits");
      }
    });
  }

  //get specific habits
  static specificHabits(a, b) {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init();
        const specHab = await db
          .collection("habits")
          .findOne({ UserId: a, habit: b });
        //const specHab1 = specHab.map(habit => new Habits({...habit, id: habit._id}))
        const newHabit = new Habits({ ...specHab, id: specHab._id });
        resolve(newHabit);
      } catch (err) {
        reject("Error retrieving habit");
      }
    });
  }

  //create a habit
  static createHabit(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init();
        /*const { UserId , habit, frequency, streak, goal} = data
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
                const newHabit = new Habits({...result.value, id:ObjectId(result.value._id)})
                resolve(newHabit)*/
        let result = await db.collection("habits").insertOne(data);
        resolve(result);
      } catch (err) {
        reject("Error creating habit");
      }
    });
  }

  // static findById(id){
  //     return new Promise (async (resolve, reject) => {
  //         try {
  //             const db = await init();
  //             let habitsData = await db.collection('habits').find({ habit:id }).toArray()
  //             // let habits = new Habits(...habitsData[0], habitsData.habit)
  //             resolve(habitsData)
  //         } catch (err) {
  //             reject('Habit not found')
  //         }
  //     })
  // }

  //update a habit (streak)
  static update() {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init();
        let updatedStreakData = await db
          .collection("habits")
          .findOneAndUpdate(
            { _id: ObjectId(this.UserId) },
            { $inc: { streak: 1 } }
          );
        let updatedStreak = new Habits(updatedStreakData.value);
        resolve(updatedStreak);
      } catch (err) {
        reject("Unable to update streak");
      }
    });
  }
  // update streak
  updateStreak() {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init();
        const updateStreak = await db
          .collection("habits")
          .findOneAndUpdate(
            { _id: ObjectId(this.id) },
            { $inc: { streak: 1 } },
            { returnDocument: "after" }
          );
        console.log(updateStreak);
        resolve(updateStreak);
      } catch (err) {
        reject("Error updating User's streak");
        console.log(err);
      }
    });
  }

  //delete a habit
  delete() {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init();
        await db.collection("habits").deleteOne({ _id: ObjectId(this.id) });
        resolve("Habit was successfully deleted");
      } catch (err) {
        reject("Habit could not be deleted");
      }
    });
  }

  //delete everything
  // static destroy(){
  //     return new Promise(async (resolve, reject) => {
  //         try {
  //             const db = await init();
  //             await db.collection('habits').deleteMany({})
  //             resolve('Habits were successfully deleted')
  //         } catch (err) {
  //             reject("Habits could not be deleted")
  //         }
  //     })
  // }
}

module.exports = Habits;
