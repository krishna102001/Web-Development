import express from "express";
import {dirname} from "path"; // it will return the directory name of  path , it is similar to dirname command unix system it return directory name;
import {fileURLToPath} from "url"; // it will convert url to a path or It returns a string which represents the fully-resolved platform-specific file path.
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url)); 

app.use(bodyParser.urlencoded({extended : true}));

app.get("/",(req,res)=>{
  // console.log(import.meta.url);   file:///Users/krishnakantmaurya/Desktop/Web%20Development/Backend/3.4%20Middleware/index1.js
  console.log(__dirname);  // /Users/krishnakantmaurya/Desktop/Web Development/Backend/3.4 Middleware
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit",(req,res)=>{
  console.log(req.body);
})

app.listen(port,()=>{
  console.log(`server started on port ${port}`);
});