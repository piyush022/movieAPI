const mongoose = require("mongoose");
const schema = mongoose.Schema;

const movieSchema = schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  rating: { type: Number, required: true },
  streamingLink: { type: String, required: true },
});

const model = mongoose.model("movie", movieSchema);

module.exports = model;
