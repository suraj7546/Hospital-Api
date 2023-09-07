const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  registerDoctor,
  login,
  registerPatient,
  createReport,
  reports,
  AllReports,
} = require("../controllers/userControllers");

router.post("/doctors/register", registerDoctor);
router.post("/login", login);
router.post("/patients/register", auth, registerPatient);
router.post("/patients/:id/create_report", auth, createReport);

router.get("/patients/:id/report", auth, reports);

router.get("/reports/:status", AllReports);
module.exports = router;
