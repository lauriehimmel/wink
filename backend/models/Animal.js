const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const animalSchema = new Schema(
  {
    name: String,
    type: {
      type: String,
      enum: ["Dog", "Raccoon", "Otter", "Pig"],
      default: "Dog",
    },
    foods: { type: [Schema.Types.ObjectId], ref: "Food" },
    hunger: { type: Number, default: 5 },
    lastFed: {type: Date, default: new Date()},
    color: String
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Animal", animalSchema);

