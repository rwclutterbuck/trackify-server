const request = require("supertest")
const server = require("../server")
const router = require("../routes/habits")
const test1 = require("jest")

describe("server", () => {
    test("port and root route is working", function(done){
        request(server)
        .get("/")
        .expect(200, done)
    })

})

describe("endpoints", () => {
    let server;

})
