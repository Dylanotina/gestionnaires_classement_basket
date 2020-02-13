const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EquipeSchema = new Schema(
  {
    name: { type: String, required: true },
    wins: { type: Number },
    losses: { type: Number },
    PointsScored: { type: Number },
    PointsAllowed: { type: Number },
    PointAverage: { type: Number }
  },
  {
    timestamps: true
  }
);

const Equipes = mongoose.model("Equipes", EquipeSchema);

module.exports = Equipes;
