var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var UrlSchema = new Schema({
  longUrl: {
    type: String,
    required: true,
  },
  shortUrl: String,
  urlCode: String,
  date: {
    type: String,
    default: Date.now
  }
});

module.exports = mongoose.model("UrlSchema", UrlSchema);
