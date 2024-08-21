require("dotenv").config();
const express = require("express");
const cors= require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
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

app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}));
app.use(express.json());
app.use(cookieParser());

app.post("/login", async (req, res) => {
    try{
        const {username, password} = req.body;
        console.log(req.cookies);
        if(req.cookies.auth_token){
            console.log("Already Login!!!")
            return res.status(403).json({message : "Already Login!!!"})
        }
        const userLogin = await User.findOne({username});
        if(!userLogin){
            console.log("Not found user!!!!")
            return res.status(404).json({message : "User not found..."});
        }
        const result = await bcrypt.compare(password, userLogin.password);
        if(result){
            const token = generateJWT(userLogin);
            console.log("Login Success....")
            res.cookie("auth_token", token, { httpOnly: true, secure : false, path: "/" })
            res.status(200).json({message : "Login Success...", token})
        }else{
            console.log("Login Faild....")
            res.status(401).json({message : "Incorrect password..."})
        }
    }catch(err){
        res.cookie(maxAge);
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
app.post("/logout", async (req, res) => {
    try{
        console.log("Logout proceed")
        res.clearCookie("auth_token", {path : "/"});
        res.setHeader('Set-Cookie', 'auth_token=; Max-Age=0; path=/');
        res.status(200).json({message : "Logout Success"})
        console.log("Logout Success..")
    }catch(err){
        console.log(`Logout error : ${err}`);
        res.status(500).json({error : "Error....."})
    }
})

app.listen(8080, () => console.log("Server Starting....."))