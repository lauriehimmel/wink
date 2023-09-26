const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const foodSchema = new Schema({
  name: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Food', foodSchema);
