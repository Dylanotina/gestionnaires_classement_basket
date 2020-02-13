const router = require("express").Router();
const Matchs = require("../models/matches.models");

router.route("/").get((req, res) => {
  Matchs.find()
    .then(matchs => res.json(matchs))
    .catch(err => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
  const equipeDomName = req.body.equipeDomName;
  const equipeVisitName = req.body.equipeVisitName;
  const equipeDomScore = req.body.equipeDomScore;
  const equipeVisitScore = req.body.equipeVisitScore;
  const winner = req.body.winner;
  const looser = req.body.looser;

  let newMatch = new Matchs({
    equipeDomName,
    equipeVisitName,
    equipeDomScore,
    equipeVisitScore,
    winner,
    looser
  });
  newMatch
    .save()
    .then(() => res.json("Match added"))
    .catch(err => res.status(400).json("Error" + err));
});

module.exports = router;
