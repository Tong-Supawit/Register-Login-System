const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./dataMongo");


const app = express();

app.use(cors());
app.use(express.json());

app.post("/register", async (req , res) => {
    try {
        const {username, email, password} = req.body;
        const newUser = new User({username : username, email : email, password : password})
        await newUser.save();
        res.status(201).json({message : "Register successful"})
    }catch(err) {
        console.log(err);
        res.status(500).json({error : "Error....."})
    }

})

app.listen(8080, () => console.log("Server Start...."))
