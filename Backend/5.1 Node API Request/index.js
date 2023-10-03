import express from "express";
import https from "https";

const app = express();
const port = 3000;
app.get("/",(req,res)=>{
    const options = {
        hostname : "bored-api.appbrewery.com",
        path : "random",
        method : "GET"
    };
    const request = https.request(options,(response)=>{
        let data = "";
        response.on("data",(chunk)=>{
            data += chunk;
        });
        response.on("end",()=>{
            try{
                const result = JSON.parse(data);
                res.render("index.ejs",{activity : result});
            }catch(error){
                console.error("Failed to parse response : ",error.message);
                res.status(500).send("failed to fetch activity . please try again accha");
            }
        });
    });
    request.on("error",(error)=>{
        console.error("Failed to parse response : ",error.message);
        res.status(500).send("failed to fetch activity . please try again okk");
    });
    request.end();
});

app.listen(port,()=>{
    console.log("port has been started");
})