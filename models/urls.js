var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var UrlSchema = new Schema({
  fullUrl: {
    type: String,
    required: true,
  },
  shortUrl: String,
  slug: String,
  createdAt: {
    type: String,
    required: [true, Date.now]
  }
});

module.exports = mongoose.model("UrlSchema", UrlSchema);
