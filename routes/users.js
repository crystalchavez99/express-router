const express = require("express");

const userRouter = express.Router();

const User = require("../models/User")

userRouter.get("/", async(req,res) =>{
    let users = await User.findAll();
    res.json(users)
})
userRouter.get("/:id", async(req,res) =>{
    let user = await User.findByPk(req.params.id);
    res.json(user)
})
