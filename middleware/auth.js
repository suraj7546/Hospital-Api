// Import the JSON Web Token (JWT) library
const jwt = require("jsonwebtoken");

// Define a secret key for JWT verification
const KEY = "suraj"; // You should use a more secure secret key in a production environment

// Authentication middleware function
const auth = (req, res, next) => {
  try {
    // Get the token from the request's Authorization header
    const token = req.headers.authorization;

    if (token) {
      // Split the token to remove the "Bearer" prefix and get the actual token
      tokenParts = token.split(" ")[1];

      // Verify the token using the secret key
      const user = jwt.verify(tokenParts, KEY);

      // Set user information in the request for further use
      req.userId = user.id; // Assuming the user ID is stored in the JWT payload
      req.userName = user.DocterName; // Assuming the user's name is stored in the JWT payload
    } else {
      // If no token is provided, respond with a 500 status and a message indicating unauthorized access
      res.status(500).json({ message: "Unauthorized user" });
    }
    // Call the next middleware or route handler
    next();
  } catch (error) {
    // Handle any errors that occur during token verification
    console.log(error);
    res.status(500).json({ message: "Unauthorized user" });
  }
};

// Export the auth middleware for use in other parts of the application
module.exports = auth;
