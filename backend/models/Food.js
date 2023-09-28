const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema(
  {
    name: {
      type: String,
      default: "Scrambled Eggs",
    },
    meal: {
      type: String,
      default: "Breakfast"
    },
    icons: []
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Food", foodSchema);
