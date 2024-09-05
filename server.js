const express = require("express");
const morgan = require("morgan");
const PORT = 8020;
const app = express();
app.use(morgan());

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/contact", (req, res) => {
  res.send("This is a second page");
});

app.get("*", (req, res) => {
  res.status(404).send("EROR 404 NOT FOUND");
});

app.listen(PORT, () => {
  console.log("Listening on port ", PORT);
});
