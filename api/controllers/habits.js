const Habits = require("../models/Habit");

//list habits

async function showHabits(req, res) {
  try {
    const userHabits2 = await Habits.findByUserId(req.params.UserId);
    //const userHabits2 = await Habits.findById;
    res.status(200).json(userHabits2);
  } catch (err) {
    res.status(404).send({ err });
  }
}

// list specific habits
async function specificHabit(req, res) {
  try {
    const a = await Habits.specificHabits(req.params.UserId, req.params.habit);
    res.status(200).json(a);
  } catch (err) {
    res.status(404).send(err);
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

async function createHabit(req, res) {
  try {
    /*const newData = {
            UserId:req.params.UserId,
            ...req.body
        }
        const newData2 = await Habits.createHabit(newData);
        res.status(201).json(newData2);*/
    const newResult = await Habits.createHabit(req.body);
    res.status(201).json(newResult);
  } catch (err) {
    res.status(404).send(err);
  }
}

//update habits
async function update(req, res) {
  try {
    const habit = await Habits.update(req.params.id, req.body);
    res.json(habit).status(204);
  } catch (err) {
    res.status(500).send({ err });
  }
}

async function updateStreak(req, res) {
  try {
    const thisHabit = await Habits.specificHabits(
      req.params.UserId,
      req.params.habit
    );
    console.log("habit contents");
    console.log(thisHabit);
    const habit = await thisHabit.updateStreak();
    console.log(habit);
    res.json(habit).status(204);
  } catch (err) {
    res.status(500).send({ err });
  }
}

//delete habits
async function destroy(req, res) {
  try {
    // const habit = await Habits.findById(req.params.id);
    const thisHabit = await Habits.specificHabits(
      req.params.UserId,
      req.params.habit
    );
    await thisHabit.delete();
    res.status(204).json("Habit was deleted");
  } catch (err) {
    res.status(500).json({ err });
  }
}

// async function destroyAll (req, res) {

//     try {
//        const habits = await Habits.all;
//        await habits.destroy();
//        res.status(204).json('Habits were deleted')
//    } catch (err) {
//        res.status(500).json({err})
//    }

// }

module.exports = {
  destroy,
  showHabits,
  update,
  specificHabit,
  createHabit,
  updateStreak,
};
