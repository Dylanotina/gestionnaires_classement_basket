const express = require("express");
const router = express.Router();
const Equipes = require("../models/equipes.models");

router.route("/").get((req, res) => {
  Equipes.find()
    .then(equipes => res.json(equipes))
    .catch(err => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const id = req.body.id;

  const newEquipe = new Equipes({ id, name });

  newEquipe
    .save()
    .then(() => {
      res.json("New team added.");
    })
    .catch(err => {
      res.status(400).json("Error" + err);
    });
});

router.route("update/:id").post((req, res) => {
  Equipes.findById(req.params.id)
    .then(equipe => {
      equipe.wins = Number(equipe.wins) + Number(req.body.wins);
      equipe.losses = Number(equipe.losses) + Number(req.body.losses);
      equipe.pointsScored =
        Number(equipe.pointsScored) + Number(req.body.pointsScored);
      equipe.pointsAllowed =
        Number(equipe.pointsAllowed) + Number(req.body.pointsAllowed);

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
