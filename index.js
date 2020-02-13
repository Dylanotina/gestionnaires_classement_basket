const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 3001;

const URI = process.env.ATLAS_URL;

const equipesRouter = require("./routes/equipes");
const matchsRouter = require("./routes/matches");

app.use(cors());
app.use(express.json());

mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Connection succesful on the database");
});

app.use("/equipes", equipesRouter);
app.use("/matchs", matchsRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});
