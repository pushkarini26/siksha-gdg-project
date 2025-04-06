const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Use gemini route
const geminiRoute = require("./routes/geminiRoute");
app.use("/api", geminiRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
