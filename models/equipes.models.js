const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EquipeSchema = new Schema(
  {
    name: { type: String, required: true },
    wins: { type: Number, default: 0 },
    losses: { type: Number, default: 0 },
    PointsScored: { type: Number, default: 0 },
    PointsAllowed: { type: Number, default: 0 },
    PointAverage: { type: Number }
  },
  {
    timestamps: true
  }
);

const Equipes = mongoose.model("Equipes", EquipeSchema);

module.exports = Equipes;
