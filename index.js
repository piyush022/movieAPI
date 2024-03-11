//importing packages
const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

//db connection
require("./db/connection");

//importing router
const movieRouter = require("./routes/movieRoute");

//creating express app
const app = express();

//using middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setting up swagger api docs
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0", // Specify the OpenAPI version
    info: {
      title: "Movie Lobby API",
      description: "API documentation for managing movies in the lobby",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//defining routes
app.use("/", movieRouter);

//404 middleware

app.use((req, res) => {
  res.json({
    error: "404",
    message: "Route you were looking for was not found",
  });
});

//starting server

app.listen(5000, () => {
  console.log("Listening");
});
