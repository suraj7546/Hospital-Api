// Import the Mongoose library
const mongoose = require("mongoose");

// Define a schema for the Doctor model
const doctorSchema = new mongoose.Schema({
  // Name field with validation for required input
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
  },
  // Email field with validation for required input and uniqueness
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
  },
  // Password field with validation for required input and minimum length
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [6, "Password should be greater than 6 characters"],
  },
});

// Create a Mongoose model named 'Doctor' based on the defined schema
const Doctor = mongoose.model("Doctor", doctorSchema);

// Export the Doctor model to make it available for use in other parts of the application
module.exports = Doctor;
