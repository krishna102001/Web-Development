import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
  const day = new Date();
  const d = day.getDay();
  let typ = "a weekday";
  let adv = "it's time to work hard";
  if (d === 0 || d === 6) {
    typ = "the weekend";
    adv = "it's time to have some fun dude";
  }
  res.render(__dirname + "/view/index.ejs", { weekday: typ, advice: adv });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
