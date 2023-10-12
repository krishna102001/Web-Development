require("dotenv").config();
//jshint esversion:6
// importing files
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
// const encrypt = require("mongoose-encryption");
// const md5 = require("md5");
// const bcrypt = require("bcrypt");
// const saltRounds = 10;
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require("mongoose-findorcreate");

//setup port 
const app = express();
const port = 3000;

//setting middleware
app.use(express.static("public"));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended : true}));

//setting middleware authentication 
app.use(session({
    secret : "our little secret.",
    resave : false,
    saveUninitialized : false
}));
app.use(passport.initialize());
app.use(passport.session());
//connecting mongoose
mongoose.connect("mongodb://localhost:27017/userDB");

//setting userSchema
const userSchema = new mongoose.Schema({
    username : String,
    password : String,
    googleId : String,
    secret : String
});

//adding encryption
// console.log(process.env.API_KEY);
// userSchema.plugin(encrypt,{secret : process.env.SECRET,encryptedFields : ["password"]});

//hashing using md5
// console.log(md5("qwerty"));

//adding plugin
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);
//creating model
const User = mongoose.model("User",userSchema);

passport.use(User.createStrategy());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());
passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, {
        id: user.id,
        username: user.username,
        picture: user.picture
      });
    });
});
  
passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets",
    userProfileURL : "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    // console.log(profile);
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

app.get("/",(req,res)=>{
    res.render("home");
});

app.get("/login",(req,res)=>{
    res.render("login");
})

app.get("/register",(req,res)=>{
    res.render("register");
})
app.get("/logout",(req,res)=>{
    req.logout(function(err){
        if(err){console.log(err)}
        else{
            res.redirect("/");
        }
    })
})
app.get("/secrets",(req,res)=>{
    User.find({"secret" : {$ne:null}}).then((founduser)=>{
        res.render("secrets",{usersWithSecret : founduser})
    })
    .catch((error)=>{
        res.redirect("login")
    })
})
app.get("/submit",(req,res)=>{
    res.set("Cache-Control","no-store");
    if(req.isAuthenticated()){
        res.render("submit");
    }
    else{
        res.render("login");
    }
})
app.post("/submit",(req,res)=>{
    const submittedSecret = req.body.secret;
    // console.log(req.user);
    User.findById({_id : req.user.id}).then(function(founduser){
        founduser.secret = submittedSecret;
        founduser.save(
            res.redirect("secrets")
        )
    }).catch((error)=>{
        console.log(error);
    })
})
app.get("/auth/google",passport.authenticate("google",{scope : ["profile"]}));

app.get("/auth/google/secrets", passport.authenticate("google", { failureRedirect: "/login" }),function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/secrets");
});

app.post("/register",(req,res)=>{
    User.register({username : req.body.username},req.body.password,function(err,user){
        if(err){
            console.log(err);
            res.redirect("/register");
        }
        else{
            passport.authenticate("local")(req,res,function(){
                res.redirect("/secrets");
            })
        }
    })
});

app.post("/login",async (req,res)=>{
    const user = new User({
        username : req.body.username,
        password : req.body.password
    })
    req.login(user,function(err){
        if(err){
            console.log(err);
        }else{
            passport.authenticate("local")(req,res,function(){
                res.redirect("/secrets");
            })
        }
    })
});

//setup server
app.listen(port,()=>{
    console.log(`Server is Successfully started on Port ${port}`);
})