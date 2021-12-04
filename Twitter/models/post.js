const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  textContent : String,
},{
  timestamps:true
}
);

module.exports = mongoose.model('Post', postSchema);
