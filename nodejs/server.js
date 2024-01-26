const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");

const app = express();
const PORT = process.env.PORT || 4200;

app.use(bodyParser.json());
app.use(cors());

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
