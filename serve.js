const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || "local";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});
