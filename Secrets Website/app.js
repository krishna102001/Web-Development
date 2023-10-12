require("dotenv").config();
//jshint esversion:6
// importing files
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
// const encrypt = require("mongoose-encryption");
// const md5 = require("md5");
const bcrypt = require("bcrypt");
const saltRounds = 10;

//setup port 
const app = express();
const port = 3000;

//setting middleware
app.use(express.static("public"));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended : true}));

//connecting mongoose
mongoose.connect("mongodb://localhost:27017/userDB");

//setting userSchema
const userSchema = new mongoose.Schema({
    username : String,
    password : String
});

//adding encryption
// console.log(process.env.API_KEY);
// userSchema.plugin(encrypt,{secret : process.env.SECRET,encryptedFields : ["password"]});

//hashing using md5
// console.log(md5("qwerty"));

//creating model
const User = mongoose.model("User",userSchema);

app.get("/",(req,res)=>{
    res.render("home");
});

app.get("/login",(req,res)=>{
    res.render("login");
})

app.get("/register",(req,res)=>{
    res.render("register");
})

app.post("/register",(req,res)=>{
    bcrypt.hash(req.body.password,saltRounds,function(error,hash){
        const user = new User({
            username : req.body.username,
            password : hash
        });
        try{
            user.save();
            res.render("secrets");
        }catch(error){
            console.log("Sorry cannot register Right Now!!!")
        }
    });
});

app.post("/login",async (req,res)=>{
    const password =req.body.password;
    const username = req.body.username;
    // console.log(password);
    try{
        const founduser = await User.findOne({username : username});
        // console.log(founduser);
        bcrypt.compare(password,founduser.password,function(error,results){
            if(results === true){
                res.render("secrets");
            }
            else{
                console.log("wrong passwords!!!");
            }
        })
    }catch(error){
        console.log("Cannot found the users.");
    }
});

//setup server
app.listen(port,()=>{
    console.log(`Server is Successfully started on Port ${port}`);
})