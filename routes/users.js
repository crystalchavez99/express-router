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

userRouter.post("/", [check("name").notEmpty()],async(req,res) =>{
    //const { name, age } = req.body;
    const errors = validationResult(req);
   if(!errors.isEmpty()){
        res.json({errors: errors.array()})
    }else{
    let newUser = await User.create(req.body);
    res.json(newUser)
    }
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
