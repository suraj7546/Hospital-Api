// Import the Express framework and create a router instance
const express = require("express");
const router = express.Router();

// Import the authentication middleware
const auth = require("../middleware/auth");

// Import controller functions and middleware
const {
  registerDoctor,
  login,
  registerPatient,
  createReport,
  reports,
  AllReports,
} = require("../controllers/userControllers");

// Route for doctor registration
router.post("/doctors/register", registerDoctor);

// Route for user login
router.post("/login", login);

// Route for patient registration, protected by the 'auth' middleware
router.post("/patients/register", auth, registerPatient);

// Route for creating a medical report for a patient, protected by 'auth' middleware
router.post("/patients/:id/create_report", auth, createReport);

// Route for fetching a patient's medical report, protected by 'auth' middleware
router.get("/patients/:id/report", auth, reports);

// Route for fetching all reports by a specific status
router.get("/reports/:status", AllReports);

// Export the router for use in the main application
module.exports = router;
