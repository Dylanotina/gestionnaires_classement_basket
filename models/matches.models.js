const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MatchSchema = new Schema(
  {
    EquipeDomName: { type: String, required: true },
    EquipeVisitName: { type: String, required: true },
    EquipeDomScore: { type: Number, required: true },
    EquipeVisitScore: { type: Number, required: true },
    winner: { type: String },
    looser: { type: String }
  },
  {
    timestamps: true
  }
);

const Matchs = mongoose.model("Matchs", MatchSchema);

module.exports = Matchs;
