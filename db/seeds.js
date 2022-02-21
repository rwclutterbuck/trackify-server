db = connect("localhost:27017/habits")

db.habits.insertOne([
    {
        id: 1,
        habit: [{
            name: "water",
            frequency: daily ,
            streak: 1,
            history: "monday",
            goal: "do this for a year",
            //lastLog: 
        }]
 
    }
])
