const express = require("express");
const cors = require("cors"); // Додайте цей рядок

const app = express();
const PORT = process.env.PORT || 4200;

app.use(cors()); // Додайте цей рядок

// Ваші інші реєстрації маршрутів після цього
app.get("/", (req, res) => {
  res.send("Hello, this is your Node.js server!");
});
app.post("/api/login", (req, res) => {
  // Змініть об'єкт на власний JSON об'єкт з потрібними даними
  const responseData = {
    first_name: "Admin",
    last_name: "Deepersignals",
    role: "Admin",
    token: "QWRtaW5Vc2Vy",
  };

  // Встановлюємо заголовок Content-Type на application/json
  res.setHeader("Content-Type", "application/json");

  // Відправляємо відповідь у форматі JSON
  res.json(responseData);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
