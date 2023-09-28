import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  // console.log(req.body["fName"]);
  // console.log(req.body["lName"]);
  const fullName = req.body["fName"] + req.body["lName"];
  // console.log(fullName);
  const cnt = fullName.length;
  // console.log(cnt);
  res.render("index.ejs", { count: cnt });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
