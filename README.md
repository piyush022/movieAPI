# Movie Lobby API

This API provides endpoints to manage a collection of movies for OTT applications. It allows users to list all movies, search for movies by title or genre, add new movies, update existing movie information, and delete movies from the lobby. The API is built using Express.js and MongoDB.

# Requirements

1. You will need Node installed on the system.
2. You will need a code editor like vs code to.
3. You need to have a mongo db account and the connection string.

To get started with the API, follow these steps:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Set up a MongoDB database and provide the connection URI in the connection.js file inside db folder OR create a .env file and provide the connection string on a key named DBURL.
4. Run the application using `npm start`.
5. Access the API endpoints using tools like Postman or your web browser.
6. A complete api documentation can be accessed by /api-doc route or https://documenter.getpostman.com/view/25625637/2sA2xiVrFJ (1st is the swagger api documentation and 2nd is postman api documentation)

## Endpoints

### List all movies

GET /movies - Fetches all movies available in the lobby.

### Search for a movie

GET /search?q={query} - Searches for a movie by title or genre based on the provided query parameter.

### Add a new movie

POST /movies - Adds a new movie to the lobby. Requires "admin" role.

### Update a movie

PUT /movies/:id - Updates an existing movie's information (title, genre, rating, or streaming link). Requires "admin" role.

### Delete a movie

DELETE /movies/:id - Deletes a movie from the lobby. Requires "admin" role.

## License

This project is licensed under the MIT License
