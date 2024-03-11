/**
 * @swagger
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       required:
 *         - title
 *         - genre
 *         - rating
 *         - streamingLink
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the movie
 *         genre:
 *           type: string
 *           description: The genre of the movie
 *         rating:
 *           type: number
 *           description: The rating of the movie
 *         streamingLink:
 *           type: string
 *           description: The streaming link of the movie
 */
const express = require("express");
const router = express.Router();
const movieModel = require("../model/movieModel");
const {
  getMovies,
  findMovies,
  postMovie,
  updateMovie,
  deleteMovies,
} = require("../controller/movieController");

/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Get all movies
 *     description: Retrieve a list of all movies in the lobby
 *     responses:
 *       200:
 *         description: Movies found
 */

router.get("/movies", getMovies); // Get all movies

/**
 * @swagger
 * /search:
 *   get:
 *     summary: Search for a movie by title or genre
 *     parameters:
 *       - in: query
 *         name: q
 *         required: true
 *         description: Pass a title or genre name
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Movies found
 */

router.get("/search", findMovies); // Search for movies by title or genre

/**
 * @swagger
 * /movies:
 *   post:
 *     summary: Insert or create a new movie
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       '201':
 *         description: Movie added successfully
 */
router.post("/movies", postMovie); // Add a new movie

/**
 * @swagger
 * /movies/{id}:
 *   put:
 *     summary: Update an existing movie's information
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the movie to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       '200':
 *         description: Movie updated successfully
 */
router.put("/movies/:id", updateMovie); // Update movie information

/**
 * @swagger
 * /movies/{id}:
 *   delete:
 *     summary: Delete a movie from database
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the movie to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Movie deleted successfully
 */

router.delete("/movies/:id", deleteMovies); // Delete a movie

module.exports = router;
