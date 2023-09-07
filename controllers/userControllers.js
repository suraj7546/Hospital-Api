const Doctor = require("../models/docter");
const Patient = require("../models/Patient");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const KEY = "suraj";
const registerDoctor = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const existUser = await Doctor.findOne({ email: email });
    if (existUser) {
      res.status(401).json({ message: "User  exist" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const result = await Doctor.create({
      name: name,
      email: email,
      password: hashPassword,
    });
    res.status(200).json({
      user: result,
      success: true,
      message: "doctor created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "could not create a doctor, internal server error",
    });
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const checkEmail = await Doctor.findOne({ email: email });
    if (checkEmail) {
      const matchPassword = await bcrypt.compare(password, checkEmail.password);

      if (!matchPassword) {
        res.status(404).json({ message: "User not found" });
      }
      const token = jwt.sign(
        { email: email, id: checkEmail.id, DocterName: checkEmail.name },
        KEY,
        {
          expiresIn: "1h",
        }
      );
      // console.log(checkEmail.name);
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

const registerPatient = async (req, res) => {
  const { name, phone, report } = req.body;

  try {
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
      message: "succesfully created a patient",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "could not create a  patient,internal server error",
    });
  }
};
const createReport = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);

    if (!patient) {
      // Handle the case where the patient with the given ID is not found
      return res.status(404).json({ message: "Patient not found" });
    }

    req.body.date = Date.now();

    patient.reports.push(req.body);

    // Save the updated patient document
    patient.save();

    res.status(200).json({
      report: patient.reports,
      success: true,
      message: "report submitted succesfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "could not created a  report, internal server error",
    });
  }
};

const reports = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);

    res.status(200).json({
      success: true,
      reports: patient.reports,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "could not able to fetch the patient reports",
    });
  }
};

const AllReports = async (req, res) => {
  console.log("ask");
  try {
    const patient = await Patient.find({
      reports: { $elemMatch: { status: req.params.status } },
    });

    res.status(200).json({
      success: true,
      data: patient,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "could not able to fetch the reports",
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
