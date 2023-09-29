const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const animalSchema = new Schema(
  {
    name: String,
    type: {
      type: String,
      enum: ["Dog", "Cat", "Frog"],
      default: "Dog",
    },
    foods: { type: [Schema.Types.ObjectId], ref: "Food" },
    hunger: { type: Number, default: 20 },
    lastFed: {type: Date, default: new Date()},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Animal", animalSchema);

// images: {type:[Schema.Types.ObjectId], ref: "Image"},
// activities: {type:[Schema.Types.ObjectId], ref: "Activity"},

//   health: Number,
// happiness: Number
