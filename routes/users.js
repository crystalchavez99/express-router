const express = require("express");

const userRouter = express.Router();

const User = require("../models/User")

userRouter.get("/", async(req,res) =>{
    let users = await User.findAll();
    res.json(users)
})
