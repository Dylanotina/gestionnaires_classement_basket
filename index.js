const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const Auth = require("./models/auth.models");

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

app.put("/register", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  bcrypt.hash(password, saltRounds).then(hash => {
    let user = new Auth({ username: username, password: hash });
    user.save((err, user) => {
      if (err) return console.error(err);
      console.log(user.username + " has been added");
      res.status(200).send("user has been added");
    });
  });
});
app.get("/auth", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let hash = null;

  if (username != null && password != null) {
    Auth.findOne({ username: username }).then(user => {
      hash = user.password;
      bcrypt.compare(password, hash).then(result => {
        if (result) {
          res.status(200).send(result);
        } else {
          res.status(403).send(result);
        }
      });
    });
  } else {
    res.status(403).send("Authentification not authorized");
  }
});

app.use("/equipes", equipesRouter);
app.use("/matchs", matchsRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});
