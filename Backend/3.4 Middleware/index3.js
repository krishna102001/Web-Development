import express from "express";

const app = express();
const port = 3000;
function logger(req, res, next){
  console.log(req.method); // it will give method which is called
  console.log(req.url);  // it will give url which is trying to getting access
  next(); // if we did not define next() function then it will not move to next step
}
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
