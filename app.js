const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db")

dotenv.config(); // configure dotenv
const PORT = process.env.PORT;

// set up the app
const app = express();
app.use(express.json());

// connect to
connectDB();
// Define Routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

// set up the server
app.listen(PORT || 5000, () => {
  console.log(`Server is listening on port ${PORT}`);
});
