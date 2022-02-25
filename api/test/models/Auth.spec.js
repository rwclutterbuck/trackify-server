// Auth Model
const Auth = require("../../controllers/auth");
const db = null; 

// Methods to test
describe("Auth", () => {
  beforeEach(() => jest.clearAllMocks());
  afterAll(() => jest.resetAllMocks());
  // create
  describe("create", () => {
    it("creates new account", async () => {
      const testUser = {
        username: "mrMuscle",
        password: "Password123",
      };
      jest.spyOn(db, "collection").mockResolvedValue()
    });
  });
  // login
  describe("login", () => {
    it("verify user details", async () => {});
  });
  // changeEmail
  describe("changeEmail", () => {
    it("change user email", async () => {});
  });

  // changeUser
  describe("changeUser", () => {
    it("change username", async () => {});
  });
  // changePassword
  describe("changePassword", () => {
    it("change user password", async () => {});
  });
});
