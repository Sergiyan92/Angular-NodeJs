const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 4200;

app.get("/", (req, res) => {
  res.send("Hello, this is your Node.js server!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
