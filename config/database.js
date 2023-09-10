// Import the Mongoose library
const mongoose = require("mongoose");

// Connect to the MongoDB database using the provided connection string
mongoose.connect(
  "mongodb+srv://surajkumar72501:Suraj3211@cluster0.ira66bh.mongodb.net/?retryWrites=true&w=majority"
);

// Get a reference to the MongoDB connection
const db = mongoose.connection;

// Event handler for when the database connection is successfully opened
db.once("open", () => {
  console.log("Successfully connected to MongoDB");
});

// Event handler for database connection errors
db.on("error", console.error.bind(console, "Error in connecting to MongoDB"));

// Export the database connection for use in other parts of the application
module.exports = db;
