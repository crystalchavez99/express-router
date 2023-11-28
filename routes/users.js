const express = require("express");

const {check, validationResult} = require("express-validator")

const userRouter = express.Router();

const {User} = require("../models/index")

userRouter.get("/", async(req,res) =>{
    let users = await User.findAll();
    res.json(users)
})

userRouter.get("/:id", async(req,res) =>{
    let user = await User.findByPk(req.params.id);
    res.json(user)
})

userRouter.post("/", async(req,res) =>{
    //const { name, age } = req.body;
    let newUser = await User.create(req.body);
    res.json(newUser)
})
userRouter.put("/:id", async(req,res) =>{
    let user = await User.findByPk(req.params.id);
    await user.update(req.body)
    res.json(user)
})
userRouter.delete("/:id", async(req,res) =>{
    let user = await User.findByPk(req.params.id);
    await user.destroy();
    res.send(`Deleted user`)
})

module.exports = userRouter;
