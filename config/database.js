const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://surajkumar72501:Suraj3211@cluster0.ira66bh.mongodb.net/?retryWrites=true&w=majority"
);
const db = mongoose.connection;

db.once("open", () => {
  console.log("succesfully connecting with mongo db");
});
db.error(
  "error",
  console.error.bind(console, "error in connecting with mongodb")
);

module.exports = db;
