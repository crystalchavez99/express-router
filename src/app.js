const express = require("express")
const app = express()
const userRouter = require("../routes/users")

app.use("/users", userRouter)

module.exports = app;
