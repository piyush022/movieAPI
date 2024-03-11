const movieModel = require("../model/movieModel");
async function getMovies(req, resp) {
  try {
    const movies = await movieModel.find();
    if (movies.length) {
      resp.json({ success: true, msg: "Movies found", data: movies });
    } else {
      resp.json({ success: true, msg: "No movies found" });
    }
  } catch (error) {
    resp.status(400).json({ success: false, msg: error.message });
  }
}

async function findMovies(req, resp) {
  const query = req.query.q;
  try {
    const movies = await movieModel.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { genre: { $regex: query, $options: "i" } },
      ],
    });
    if (movies.length) {
      resp.json({ success: true, msg: "Movies found", data: movies });
    } else {
      resp.json({ success: true, msg: "No movies found" });
    }
  } catch (error) {
    resp.status(400).json({ success: false, msg: error.message });
  }
}

async function postMovie(req, resp) {
  const { title, genre, rating, streamingLink } = req.body;
  try {
    const movie = new movieModel({ title, genre, rating, streamingLink });
    await movie.save();
    resp
      .status(201)
      .json({ success: true, msg: "Movie added successfully", data: movie });
  } catch (error) {
    resp.status(400).json({ success: false, msg: error.message });
  }
}

async function updateMovie(req, resp) {
  const { id } = req.params;
  const { title, genre, rating, streamingLink } = req.body;

  console.log("id=", id);
  try {
    const movie = await movieModel.findByIdAndUpdate(id, {
      title,
      genre,
      rating,
      streamingLink,
    });
    if (movie) {
      resp.status(200).json({
        success: true,
        msg: "Movie updated successfully",
        data: movie,
      });
    } else {
      resp.status(404).json({ success: false, msg: "Movie not found" });
    }
  } catch (error) {
    resp.status(400).json({ success: false, msg: error.message });
  }
}

async function deleteMovies(req, resp) {
  const { id } = req.params;
  try {
    const movie = await movieModel.findByIdAndDelete(id);
    if (movie) {
      resp.json({ success: true, msg: "Movie deleted successfully" });
    } else {
      resp.status(404).json({ success: false, msg: "Movie not found" });
    }
  } catch (error) {
    resp.status(400).json({ success: false, msg: error.message });
  }
}

module.exports = {
  getMovies,
  findMovies,
  postMovie,
  updateMovie,
  deleteMovies,
};
