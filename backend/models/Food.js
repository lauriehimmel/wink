const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema(
  {
    foodName: {
      type: String,
      default: "Pepperoni",
    },
    category: {
      type: String,
      default: "Pizza",
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Food", foodSchema);
