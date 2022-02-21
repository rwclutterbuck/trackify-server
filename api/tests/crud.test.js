const crudController = require('../controllers/Crud')
const Habits = require('../models/habits')

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson, end: jest.fn() }))
const mockRes = { status: mockStatus }

describe('habits controller', () => {
    beforeEach(() => jest.clearAllMocks());
    afterEach(() => jest.resetAllMocks());

    describe('delete', () => {
        it('returns a 204 status code when successfully deleted', async () => {
            jest.spyOn(Habits.prototype, 'delete')
                .mockResolvedValue('deleted');
            
            const mockReq = { params: { id: 1 } }
            await crudController.delete(mockReq, mockRes)
            expect(mockStatus).toHaveBeenCalledWith(204);
        })
    })
})
