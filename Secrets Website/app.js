//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
const port = 3000;



app.listen(port,()=>{
    console.log(`Server is Successfully started on Port ${port}`);
})