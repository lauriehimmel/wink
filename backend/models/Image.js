const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const imageSchema = new Schema({
  name: String,
  url: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Image', imageSchema);


// library/assets/dog-02.png