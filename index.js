const express = require("express");
const PORT = 3000;
const router = require("./routes/router");
const bodyParser = require("body-parser");
const db = require("./config/database");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`Server is running on port :${PORT}`);
});
