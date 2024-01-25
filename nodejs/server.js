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
const userAssessments = [
  {
    id: 1,
    name: "Core Drivers",
    users_resolved: 5,
    active: true,
    image_url:
      "https://d1cuxz3dnd9slg.cloudfront.net/assessments/Core+Values+-+Cover+Photo.jpg___2020-05-15-14-13-06.jpg",
  },
];
app.get("/api/userassessments", (req, res) => {
  // Перевірте, чи передано дійсний токен
  const token = req.header("X-Token");
  if (!token) {
    return res.status(401).json({ error: "Unauthorized. Token is missing." });
  }

  // Декодуйте та перевірте токен (ваша реалізація може бути складнішою)
  const decodedToken = Buffer.from(token, "base64").toString("utf-8");
  const [email, password] = decodedToken.split(":");
  if (!users[email] || users[email].password !== password) {
    return res.status(401).json({ error: "Unauthorized. Invalid token." });
  }

  // Тут видаляйте іншу інформацію про користувача, оскільки вона вже включена в токен
  const { first_name, last_name, role } = users[email];

  // Відправте список оцінок користувача
  res.json(userAssessments);
});
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
