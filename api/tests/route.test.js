const request = require("supertest")
const server = require("../server")
const router = require("../routes/route")
const test1 = require("jest")

describe("server", () => {
    test("port and root route is working", function(done){
        request(server)
        .get("/")
        .expect(200, done)
    })

})
