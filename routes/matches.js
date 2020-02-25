const router = require("express").Router();
const Matchs = require("../models/matches.models");

router.route("/").get((req, res) => {
  Matchs.find()
    .then(matchs => res.json(matchs))
    .catch(err => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
  const equipeDomName = req.body.EquipeDomName;
  const equipeVisitName = req.body.EquipeVisitName;
  const equipeDomScore = req.body.EquipeDomScore;
  const equipeVisitScore = req.body.EquipeVisitScore;
  const winner = req.body.winner;
  const looser = req.body.looser;

  let newMatch = new Matchs({
    EquipeDomName: equipeDomName,
    EquipeVisitName: equipeVisitName,
    EquipeDomScore: equipeDomScore,
    EquipeVisitScore: equipeVisitScore,
    winner: winner,
    looser: looser
  });
  newMatch
    .save()
    .then(() => res.json("Match added"))
    .catch(err => res.status(400).json("Error" + err));
});

module.exports = router;
