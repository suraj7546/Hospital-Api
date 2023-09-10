// Import necessary libraries and modules
const express = require("express"); // Import the Express framework
const PORT = 3000; // Define the port number for your server
const router = require("./routes/router"); // Import your router module
const bodyParser = require("body-parser"); // Import body-parser for handling request bodies
const db = require("./config/database"); // Import your database configuration

// Create an instance of the Express application
const app = express();

// Middleware for parsing URL-encoded and JSON request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use the imported router for routing requests
app.use(router);

// Start the server and listen on the defined port
app.listen(PORT, (error) => {
  if (error) {
    console.log(error); // Print any error that occurs while starting the server
  }
  console.log(`Server is running on port :${PORT}`); // Print a message when the server is successfully started
});
