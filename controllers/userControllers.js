const Doctor = require("../models/docter");
const Patient = require("../models/Patient");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const KEY = "suraj";

// Controller function to register a new doctor
const registerDoctor = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    // Check if a user with the same email already exists
    const existUser = await Doctor.findOne({ email: email });
    if (existUser) {
      res.status(401).json({ message: "User already exists" });
    }

    // Hash the password before saving it in the database
    const hashPassword = await bcrypt.hash(password, 10);

    // Create a new doctor with the provided data
    const result = await Doctor.create({
      name: name,
      email: email,
      password: hashPassword,
    });

    res.status(200).json({
      user: result,
      success: true,
      message: "Doctor created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Could not create a doctor, internal server error",
    });
  }
};

// Controller function for doctor login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find the doctor by their email
    const checkEmail = await Doctor.findOne({ email: email });
    if (checkEmail) {
      // Compare the provided password with the hashed password in the database
      const matchPassword = await bcrypt.compare(password, checkEmail.password);

      if (!matchPassword) {
        res.status(404).json({ message: "User not found" });
      }

      // Create a JWT token for the authenticated user
      const token = jwt.sign(
        { email: email, id: checkEmail.id, DocterName: checkEmail.name },
        KEY,
        {
          expiresIn: "1h",
        }
      );

      res.status(200).json({
        user: checkEmail,
        token: token,
        success: true,
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
};

// Controller function to register a new patient
const registerPatient = async (req, res) => {
  const { name, phone, report } = req.body;
  try {
    // Create a new patient with the provided data, associating them with the logged-in doctor
    const patient = await Patient.create({
      name: name,
      phone: phone,
      report: report,
      doctor: req.userId,
    });

    console.log(patient);
    res.status(200).json({
      user: patient,
      success: true,
      message: "Successfully created a patient",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Could not create a patient, internal server error",
    });
  }
};

// Controller function to create a medical report for a patient
const createReport = async (req, res) => {
  try {
    // Find the patient by their ID
    const patient = await Patient.findById(req.params.id);

    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    req.body.date = Date.now();

    // Add the new report to the patient's reports array
    patient.reports.push(req.body);

    // Save the updated patient document
    patient.save();

    res.status(200).json({
      report: patient.reports,
      success: true,
      message: "Report submitted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Could not create a report, internal server error",
    });
  }
};

// Controller function to fetch a patient's medical reports
const reports = async (req, res) => {
  try {
    // Find the patient by their ID
    const patient = await Patient.findById(req.params.id);

    res.status(200).json({
      success: true,
      reports: patient.reports,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Could not fetch the patient's reports",
    });
  }
};

// Controller function to fetch all reports by a specific status
const AllReports = async (req, res) => {
  console.log("ask");
  try {
    // Find patients with reports that match the specified status
    const patients = await Patient.find({
      reports: { $elemMatch: { status: req.params.status } },
    });

    res.status(200).json({
      success: true,
      data: patients,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Could not fetch the reports",
    });
  }
};

module.exports = {
  registerDoctor,
  login,
  registerPatient,
  AllReports,
  createReport,
  reports,
};
