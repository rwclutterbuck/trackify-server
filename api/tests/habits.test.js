const Habits = require("../models/Habit")
const { init } = require("../../api/initdb")
jest.mock("mongodb")
const db = require("../../")

describe("Habit", () => {
    let connection;
    let db;

    beforeAll(async () => {
        connection = await init();
        db = connection.db(process.env.DB_NAME);
    });
    afterAll(async () => {
        await connection.close();
    })
    beforeEach(async () => {
        await init();
    })
    
    describe("findByUserId", () => {
        it("finds data of userid after succesful query", async () => {
            const habit1 = await Habits.findByUserId(1)
            expect(habits).toEqual(objectContaining({
                UserId: "1",
                habit: "water",
                frequency: "daily",
                streak: 1,
                //history: "monday",
                goal: "do this for a year",
            }))
            })
    describe("specificHabits", () => {
        it("find specific habit of a user", async()=> {
            const habit1 = await Habits.specificHabits(1,water)
            expect(habit1).toBeInstanceOf(Habits)       
        });
    });
    describe("create a habit", () => {
        it("creates a new habit for an existing user", async () => {
        const data ={
            UserId: 10,
            habit: "test", 
            frequency: "daily",
            streak: 1,
            goal: "testing"}
        const newHabit = await Habits.createHabit(data);
        expect(newHabit).toEqual(objectContaining({
            "UserId":10,
            "habit":"test", 
            "frequency":"daily",
            "streak":1,
            "goal":"testing"})
        )
        })

    describe("update streak", () => {
        it("updates streak in db", async() => {
            const oldHabit = {
            UserId: 10,
            habit: "test", 
            frequency: "daily",
            streak: 1,
            goal: "testing"
            }
            const updatedHabit = await Habits.updateStreak()
            expect(updatedHabit).toEqual(objectContaining({
            "UserId":10,
            "habit":"test", 
            "frequency":"daily",
            "streak":2,
            "goal":"testing"}))
    describe("delete", () => {
        it("deletes habit entry from db", async() => {
            const data ={
                UserId: 10,
                habit: "test", 
                frequency: "daily",
                streak: 1,
                goal: "testing"}
            const deleted = await Habits.delete(data)
            expect(deleted).toEqual(objectContaining({
                //empty
            }))
        })
    })
    });
    })
