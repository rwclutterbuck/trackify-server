const db = connect("localhost:27017/habits")

db.habits.insertOne(
    {
        userId: 1,
        name: "water",
        frequency: "daily" ,
        streak: 1,
        history: "monday",
        goal: "do this for a year",
        //lastLog

    }
)
