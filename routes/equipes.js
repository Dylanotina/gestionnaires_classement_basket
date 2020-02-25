const express = require("express");
const router = express.Router();
const Equipes = require("../models/equipes.models");

router.route("/").get((req, res) => {
  Equipes.find()
    .sort([
      ["wins", "descending"],
      ["losses", "ascending"]
    ])
    .then(equipes => res.json(equipes))
    .catch(err => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;

  const newEquipe = new Equipes({ name });

  newEquipe
    .save()
    .then(() => {
      res.json("New team added.");
    })
    .catch(err => {
      res.status(400).json("Error" + err);
    });
});

router.route("/update").post((req, res) => {
  Equipes.findOne({ name: req.body.name })
    .then(equipe => {
      equipe.wins = Number(equipe.wins) + Number(req.body.wins);
      equipe.losses = Number(equipe.losses) + Number(req.body.losses);
      equipe.PointsScored =
        Number(equipe.PointsScored) + Number(req.body.PointsScored);
      equipe.PointsAllowed =
        Number(equipe.PointsAllowed) + Number(req.body.PointsAllowed);

      equipe
        .save()
        .then(() => {
          res.json("Equipe updated");
        })
        .catch(err => {
          res.status(400).json("Error" + err);
        });
    })
    .catch(err => {
      res.status(400).json("Error" + err);
    });
});

router.route("/:id").delete((req, res) => {
  Equipes.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json("Team deleted");
    })
    .catch(err => {
      res.status(400).json("Error" + err);
    });
});

module.exports = router;
