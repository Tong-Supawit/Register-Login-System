require("dotenv").config();
const express = require("express");
const cors= require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./dataMongo");
const app = express();
const secretKey = process.env.JWT_TOKEN;

const generateJWT = (user) => {
    const payload = {
        sub : user.id,
        name : user.username,
        role : user.role
    }
    console.log(payload);
    const token = jwt.sign(payload, secretKey, {expiresIn : "1h"});

    return token;
}

app.use(cors());
app.use(express.json());

app.post("/login", async (req, res) => {
    try{
        const {username, password} = req.body;
        const userLogin = await User.findOne({username});
        if(!userLogin){
            console.log("Not found user!!!!")
            return res.status(404).json({message : "User not found..."});
        }
        const result = await bcrypt.compare(password, userLogin.password);
        if(result){
            const token = generateJWT(userLogin);
            console.log("Login Success....")
            res.status(200).json({message : "Login Success...", token})
        }else{
            console.log("Login Faild....")
            res.status(401).json({message : "Incorrect password..."})
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error : "Error....."})
    }
})

app.post("/register", async (req, res) => {
    try{
        const {username, email, password} = req.body;
        const hashPassword = await bcrypt.hash(password, 10)
        const newUser = new User({username : username, email : email, password : hashPassword})
        await newUser.save();
        res.status(201).json({message : "Register Success"})
    }catch(err){
        console.log(err);
        res.status(500).json({error : "Error....."})
    }
})

app.listen(8080, () => console.log("Server Starting....."))