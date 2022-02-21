// Controller for Auth routes

const auth = require("../../controllers/auth");
const Auth = require("../../models/Auth");

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(() => ({
  send: mockSend,
  json: mockJson,
  end: jest.fn(),
}));
const mockRes = { status: mockStatus };

// Routes:
describe("Routes controller", () => {
  beforeEach(() => jest.clearAllMocks());
  afterAll(() => jest.resetAllMocks());
  //   Register: Post & JWT
  describe("Register", () => {
    it("registers new user with 201 status code", async () => {
      let testUser = {
        username: "mrMuscle",
        password: "Password123",
      };
      jest.spyOn(Auth, "create").mockResolvedValue(new Auth(testUser));

      const mockReq = { body: testUser };
      await auth.create(mockReq, mockRes);
      expect(mockStatus).toHaveBeenCalledWith(201);
      expect(mockJson).toHaveBeenCalledWith(new Auth(testUser));
    });
    it.each([
      ["no uppercase letters", "password1"],
      ["no numbers", "Password"],
      ["less than 8 characters", "pass"],
    ])(
      "does not register users with %s in their password with 400",
      async (_, passwd) => {
        let testUser = {
          username: "mrMuscle",
          password: passwd,
        };
        jest.spyOn(Auth, "create").mockResolvedValue(new Auth(testUser));

        const mockReq = { body: testUser };
        await auth.create(mockReq, mockRes);
        expect(mockStatus).toHaveBeenCalledWith(400);
      }
    );
    it("returns a JWT", async () => {
      const testUser = {
        username: "mrMuscle",
        password: "Password123",
      };
      jest.spyOn(Auth, "create").mockResolvedValue(new Auth(testUser));
      const mockReq = { body: testUser };
      const jwt = await auth.create(mockReq, mockRes);
      expect(typeof jwt).toBe(JSON);
    });
  });
  //   Login: JWT
  describe("Login", () => {
    it("returns 200 with JSON web token", async () => {
      const testUser = {
        username: "mrMuscle",
        password: "Password123",
      };
      const mockJwt = "abcd";
      jest.spyOn(Auth, "login").mockResolvedValue(mockJwt);
      mockReq = { body: testUser };

      await auth.login(mockReq, mockRes);
      expect(mockStatus).toHaveBeenCalledWith(200);
      expect(mockJson).toHaveBeenCalledWith(mockJwt);
    });
  });
  //   Account: Get
  describe("Account query", () => {
    it("returns account info with 200 status code", async () => {
      const userId = "abc123";

      await auth.show(userId);
      expect(mockJson).toHaveBeenCalledWith(userId);
    });
  });
  //   Email: Patch
  describe("Change email address", () => {
    it("returns new email with 200 status code", async () => {
      const userId = "abc123";
      const testData = {
        oldEmail: "test@example.com",
        newEmail: "newTest@example.com",
      };

      const mockReq = { body: testData };

      await auth.changeEmail(mockReq, mockRes);
      expect(mockStatus).toHaveBeenCalledWith(200);
      expect(mockJson).toHaveBeenCalledWith(testData);
    });
  });
  //   Password: Patch
  describe("change user password", () => {
    it("returns 204 status code", async () => {
      const userId = "abc123";
      const testData = {
        oldPass: "Password1",
        newPass: "NewPass1",
      };

      const mockReq = { body: testData };

      await auth.changePassword(mockReq, mockRes);
      expect(mockStatus).toHaveBeenCalledWith(204);
    });
  });
  //   Username: Patch
  describe("change username", () => {
    it("returns new username and 200 status code", async () => {
      const userId = "abc123";
      const testData = {
        oldUser: "mrMuscle",
        newUser: "steve",
      };

      const mockReq = { body: testData };

      await auth.changeUser(mockReq, mockRes);
      expect(mockStatus).toHaveBeenCalledWith(200);
    });
  });
});
