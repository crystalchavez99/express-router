const express = require("express");

const fruitRouter = express.Router();

const {Fruit} = require("../models/index")

fruitRouter.get("/", async(req,res) =>{
    let fruits = await Fruit.findAll();
    res.json(fruits)
})

fruitRouter.get("/:id", async(req,res) =>{
    let fruit = await Fruit.findByPk(req.params.id);
    res.json(fruit)
})

fruitRouter.post("/", async(req,res) =>{
    //const { name, age } = req.body;
    let newfruit = await Fruit.create(req.body);
    res.json(newfruit)
})
fruitRouter.put("/:id", async(req,res) =>{
    let fruit = await Fruit.findByPk(req.params.id);
    await fruit.update(req.body)
    res.json(fruit)
})
fruitRouter.delete("/:id", async(req,res) =>{
    let fruit = await Fruit.findByPk(req.params.id);
    await fruit.destroy();
    res.send(`Deleted fruit`)
})

module.exports = fruitRouter;
