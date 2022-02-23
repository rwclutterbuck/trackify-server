const db = connect("localhost:27017/habits");

db.habits.drop();

db.habits.insertMany([
  {
    UserId: "1",
    habit: "water",
    frequency: "daily",
    streak: 1,
    //history: "monday",
    goal: "do this for a year",
  },
  {
    UserId: "2",
    habit: "gym",
    frequency: "daily",
    streak: 2,
    goal: "summer body",
  },
  {
    UserId: "3",
    habit: "diet",
    frequency: "daily",
    streak: 3,
    goal: "till the summer",
  },
  {
    UserId: "1",
    habit: "gym",
    frequency: "daily",
    streak: 2,
    goal: "lose 5kg",
  },
]);
//add username
