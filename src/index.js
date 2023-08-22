const morgan = require("morgan");
const express = require("express");
const hbs = require("express-handlebars");

const app = express();
const port = 3000;
const engine = hbs.engine;

app.use(morgan("combined"));

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    partialsDir: "./src/resources/views/layouts/partials",
  })
);
app.set("view engine", "hbs");
app.set("views", "./src/resources/views");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
