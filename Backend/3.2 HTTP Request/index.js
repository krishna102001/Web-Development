import express from "express";
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    // console.log(req.rawHeaders); it will show the request details
    // res.send("Hello Express Js!!!");
    res.send("<h1> Hello World !!");
});

app.get("/about",(req,res)=>{
    res.send("<h1>About Me</h1><p>Hello my name is krishna. </p>");
})

app.get("/contact",(req,res)=>{
    res.send("<h1>Contact Me</h1><h3>+91-6388851459</h3>")
})

app.listen(port,()=>{
    console.log(`Server Started on Port ${port}`);
});