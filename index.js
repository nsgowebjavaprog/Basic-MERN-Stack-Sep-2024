import 'dotenv/config';
import express from 'express';
import logger from "./logger.js";
import morgan from "morgan";

// const express = require('express');

const app = express()
const port = process.env.PORT || 3000
app.use(express.json())

const morganFormat = ":method :url :status :response-time ms";

app.use(
    morgan(morganFormat, {

        // console.log(message);

      stream: {
        write: (message) => {
          const logObject = {
            method: message.split(" ")[0],
            url: message.split(" ")[1],
            status: message.split(" ")[2],
            responseTime: message.split(" ")[3],
          };
          logger.info(JSON.stringify(logObject));
        },
      },
    }));


let teaData = []
let nextId = 1

// adding items / post

app.post('/tea', (req, res) => {
    // console.log("A Posted Requist is made to add a new Tea....")
    // logger.info("A Posted Requist is made to add a new Tea....")
    logger.warn("A Posted Requist is made to add a new Tea....")

    const {name, price} = req.body
    const newTea = {id: nextId++, name, price}
    teaData.push(newTea)

    res.status(201).send(newTea)
})

/*
Server is running at port: 3000....!
info: A Posted Requist is made to add a new Tea....
info: {"method":"POST","url":"/tea","status":"201","responseTime":"11.547"}
*/

/*
Server is running at port: 3000....!
warn: A Posted Requist is made to add a new Tea....
info: {"method":"POST","url":"/tea","status":"201","responseTime":"10.833"}
*/




// get all items

app.get('/tea', (req, res) =>{
    res.status(200).send(teaData)
})

// Get a item with id

app.get('/tea/:id', (req, res) =>{
    const tea = teaData.find(t => t.id === parseInt(req.params.id))

    if(!tea){
        return res.status(404).send("Not Found")
    }
    res.status(200).send(tea)
})

// Updating a items

app.put('/tea/:id', (req, res) => {

const tea = teaData.find(t => t.id === parseInt(req.params.id))

    if(!tea){
        return res.status(404).send("Not Found")
    }

    const {name, price} = req.body
    tea.name = name
    tea.price = price
    res.send(200).send(tea)
})

// Delete

app.delete('/tea/:id',(req, res) =>{
    const index = teaData.findIndex(t => t.id === parseInt(req.params.id))
    
    if(index === -1){
        return res.status(404).send('Tea not Found')
    }
    teaData.splice(index, 1)
    return req.status(204).send('Deleted')
})


//---------------------------------------

app.listen(port, () =>{
    console.log(`Server is running at port: ${port}....!`)
})

/*
Server is running at port: 3000....!
Posted
info: {"method":"POST","url":"/tea","status":"201","responseTime":"6.375"}
Posted
info: {"method":"POST","url":"/tea","status":"201","responseTime":"1.591"}
*/