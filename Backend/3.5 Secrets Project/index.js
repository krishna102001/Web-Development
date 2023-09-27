//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var userIsAuthorized = false;

//dynamic path setup
const __dirname = dirname(fileURLToPath(import.meta.url));

//function creation
function checker(req,res,next){
    const password = req.body["password"];
    if(password === "ILoveProgramming"){
        userIsAuthorized = true;
    }
    next();
}

//body parser setup
app.use(bodyParser.urlencoded({extended : true}));
app.use(checker);

//app GET method Setup
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
})

//app POST method Setup
app.post("/check",(req,res)=>{
    if(userIsAuthorized){
        res.sendFile(__dirname + "/public/secret.html");
        // userIsAuthorized = false;
    }
    else{
        // res.redirect("/")
        res.sendFile(__dirname + "/public/index.html");
    }
})

//server creation
app.listen(port,()=>{
    console.log(`Server started on Port ${port}`);
})

