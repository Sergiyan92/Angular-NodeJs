const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUserAssessments,
  getAssessmentGraph,
  login,
} = require("../controllers/controllers");

router.get("/api/users", getUsers);
router.get("/api/userassessments", getUserAssessments);
router.get("/api/userassessments/graph", getAssessmentGraph);
router.post("/api/login", login);

module.exports = router;
