//import the express, body-parser, axios modules
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

//adding middleware for static files
app.use(express.static("public"));

//adding middlware to get body contents
app.use(bodyParser.urlencoded({ extended: true }));

//baseURL of API
const API_URL = "https://v2.jokeapi.dev/";

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "joke/Any?type=single");
    const data = result.data;
    // console.log(data);
    res.render("index.ejs", { joke: data.joke });
  } catch (error) {
    console.log(error.response.data);
    res.status(429);
  }
});

app.post("/", async (req, res) => {
  const category = req.body.category;
  const lang = req.body.language;
  // console.log(category);
  try {
    const result = await axios.get(
      API_URL + "joke/" + category + "?type=single&lang=" + lang
    );
    const data = result.data;
    // console.log(data);
    res.render("index.ejs", { joke: data.joke });
  } catch (error) {
    console.log(error.response.data);
    res.status(429);
  }
});

app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});
