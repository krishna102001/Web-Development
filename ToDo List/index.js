import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let list = [];
let work = [];

app.use(bodyParser.urlencoded({ extended : true}));

app.use(express.static("public"));

app.get("/",(req,res)=>{
    list = [];
    work=[];
    res.render("index.ejs",{weekday : weekday[new Date().getDay()], month : month[new Date().getMonth()]});
})

app.get("/today",(req,res)=>{
    res.render("index.ejs",{weekday : weekday[new Date().getDay()], month : month[new Date().getMonth()],list:list});
})

app.get("/work",(req,res)=>{
    res.render("work.ejs",{work:work});
})
app.post("/wSubmit",(req,res)=>{
    work.push(req.body["newItem"]);
    // console.log(list);
    res.render("work.ejs",{work:work});
})
app.post("/submit",(req,res)=>{
    // console.log(req.body["newItem"]);
    list.push(req.body["newItem"]);
    // console.log(list);
    res.render("index.ejs",{weekday : weekday[new Date().getDay()], month : month[new Date().getMonth()],list:list});
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})