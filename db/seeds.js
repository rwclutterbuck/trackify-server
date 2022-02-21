const db = connect("localhost:27017/habits")

db.habits.drop();

db.habits.insertOne(
    {
        UserId: 1,
        habit: "water",
        frequency: "daily" ,
        streak: 1,
        //history: "monday",
        goal: "do this for a year",
    } ,

    
)
