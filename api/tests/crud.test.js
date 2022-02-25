const crudController = require('../controllers/habits')
const Habits = require('../models/Habit');
const { init } = require('../server');
const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson, end: jest.fn() }))
const mockRes = { status: mockStatus }


const testHabit = {
    UserId: "10",
    habit: "test",
    frequency: "testing",
    streak: 1,
    goal: "for test purposes"
}

describe('habits controller', () => {
    beforeEach(() => jest.clearAllMocks());

    afterEach(() => jest.resetAllMocks());

    describe('delete one', () => {
        it('returns a 204 status code when successfully deleted', async () => {
            jest.spyOn(Habits.prototype, 'delete')
                .mockResolvedValue('deleted');
            
            const mockReq = { params: { id: 1 } }
            await crudController.destroy(mockReq, mockRes)
            expect(mockStatus).toHaveBeenCalledWith(204);
        })
    })

    /*describe('delete all', () => {
        it('returns a 204 status code when successfully deleted', async () => {
            jest.spyOn(Habits.prototype, 'destroy')
                .mockResolvedValue('Deleted');
            
            const mockReq = { params: { id: 1 } }
            await crudController.destroy(mockReq, mockRes)
            expect(mockStatus).toHaveBeenCalledWith(204);
        })*/
    })
    describe("create a habit", () => {
        it("returns new habit with a status code 201",
        async () => {
            jest.spyOn(Habits,"create")
            .mockResolvedValue(expect.objectContaining(testHabit));
         
        const mockReq = { params: { UserId: 1 } }
        await crudController.createHabit(mockReq,mockRes);
        expect(mockStatus).toHaveBeenCalledWith(201);
        expect(mockJson).toHaveBeenCalledWith(testHabit)
        })
  

    })


    
    describe("show a habit", () =>{
        it("shows habit with a status code of 200", async () => {
            jest.spyOn(Habits, "showing one habit")
            .mockResolvedValue(new Habits(testHabit));

            const mockReq = { params:{UseId:1}, habit:"water"}
            await crudController.specificHabit(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
        })
    })
  
    describe("update streak", () => {
        it("returns updated streak", async() => {
            const updatedHabit = {
                UserId: "10",
                habit: "test",
                frequency: "testing",
                streak: 2,
                goal: "for test purposes"
            }
            jest.spyOn(Habits, "update")
            .mockResolvedValue(updatedHabit)
            const mockReq = {params: {id:1}}
            await crudController.updateStreak(mockReq,mockRes);
            expect(mockStatus).toHaveBeenCalledWith(201);
            expect(mockJson).toHaveBeenCalledWith(updatedHabit);

        })
    describe("show user habits", () => {
        it("returns habits of user", async () => {
            const mockReq = { params: { UserId : 1}}})
        jest.spyOn("Habits", "show habits by UserId")
        .mockResolvedValue(testHabit);
        await crudController.specificHabit(mockReq, mockRes)
        expect(mockJson).toHaveBeenCalledWith(testHabit)
        expect(mockStatus).toHaveBeenCalledWith(200)
    })    
    })


