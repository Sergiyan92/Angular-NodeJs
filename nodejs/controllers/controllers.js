const peoples = [
  {
    id: 1,
    email: "admin@example.com",
    first_name: "Admin",
    last_name: "Deepersignals",
  },
  {
    id: 2,
    email: "user@deepersignals.com",
    first_name: "User",
    last_name: "Deepersignals",
  },
];

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
const graphData = {
  data: {
    Agreeableness: 13.333333333333334,
    Drive: 21.666666666666668,
    Luck: 10,
    Openess: 30,
  },
  type: "bar",
};

exports.getUsers = (req, res) => {
  res.json(peoples);
};

exports.getUserAssessments = (req, res) => {
  const token = req.header("X-Token");
  if (!token) {
    return res.status(401).json({ error: "Unauthorized. Token is missing." });
  }
  const decodedToken = Buffer.from(token, "base64").toString("utf-8");
  const [email, password] = decodedToken.split(":");
  if (!users[email] || users[email].password !== password) {
    return res.status(401).json({ error: "Unauthorized. Invalid token." });
  }
  res.json(userAssessments);
};

exports.getAssessmentGraph = (req, res) => {
  res.json(graphData);
};

exports.login = (req, res) => {
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
};
