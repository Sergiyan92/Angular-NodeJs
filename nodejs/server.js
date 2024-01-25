const express = require("express");
const cors = require("cors"); // Додайте цей рядок
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 4200;

app.use(bodyParser.json());
app.use(cors()); // Додайте цей рядок

const users = {
  "admin@deepersignals.com": {
    first_name: "Admin",
    last_name: "Deepersignals",
    role: "Admin",
    password: "password",
  },
  "user@deepersignals.com": {
    first_name: "User",
    last_name: "Deepersignals",
    role: "User",
    password: "password",
  },
};

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (
    !email ||
    !password ||
    !users[email] ||
    users[email].password !== password
  ) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const { first_name, last_name, role } = users[email];
  const token = Buffer.from(`${email}:${password}`).toString("base64");

  res.json({ first_name, last_name, role, token });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
