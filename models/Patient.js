// Import the Mongoose library
const mongoose = require("mongoose");

// Define a schema for the Patient model
const patientSchema = new mongoose.Schema({
  // Phone number field with validation for required input and uniqueness
  phone: {
    type: Number,
    required: [true, "Please Provide patient Phone number"],
    unique: true,
  },
  // Name field with validation for required input
  name: {
    type: String,
    required: [true, "Please Provide patient name"],
  },
  // Reports field representing an array of reports with specific structure
  reports: [
    {
      // Status field with validation for required input and allowed values
      status: {
        type: String,
        required: true,
        enum: [
          "Negative",
          "Travelled-Quarantine",
          "Symptoms-Quarantine",
          "Positive-Admit",
        ],
      },
      // Date field for the report with required input validation
      date: {
        type: Date,
        required: true,
      },
    },
  ],
  // Doctor field referencing the Doctor model using its ObjectId
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor", // Reference to the Doctor model
    required: true,
  },
});

// Create a Mongoose model named 'Patient' based on the defined schema
const Patient = mongoose.model("Patient", patientSchema);

// Export the Patient model to make it available for use in other parts of the application
module.exports = Patient;
