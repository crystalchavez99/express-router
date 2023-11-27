const request = require("supertest")
const app = require('./src/app');
const {Fruit,User} = require('./models/index');

describe("User Endpoints", () =>{
    test("GET / all users", async() =>{
        const response = await request(app).get("/users")
        expect(response.body.length).toBeGreaterThan(2)
    })

    test("GET /users/:id",async () =>{
        const response = await request(app).get("/users/1")
        expect(response.body.name).toEqual("User 1")
    })

    test("POST /users create new user", async() =>{
        const response = await request(app).post("/users").send({
            name: "User 5",
            age: 60
        }).set('Accept', 'application/json')
        expect(response.body.age).toBe(60)
    })

    test("PUT /users/:id update user", async() =>{
        const response = await request(app).put("/users/5").send({
            name: "Crystal",
        }).set('Accept', 'application/json')
        expect(response.body.name).toBe("Crystal")
    });

    test("DELETE /users/:id delete user",async () =>{
        const response = await request(app).del("/users/5")
        expect(response.statusCode).toBe(200)
    })
})
