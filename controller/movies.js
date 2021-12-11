const movies = require('../movies')

const error = (request, response) => {
  return response.status(404).send('This is not valid')
}

const getAll = (request, response) => {
  return response.send(movies)
}

const getByTitleOrDirector = (request, response) => {
  const { searchValue } = request.params
  const findValue = movies.filter(movie => (movie.title).toLowerCase().indexOf(searchValue.toLowerCase()) >= 0 ||
  movie.directors.some(director => director.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0))

  return response.send(findValue)
}

const createNew = (request, response) => {
  const {
    title, directors, releaseDate, rating, runTime, genres
  } = request.body

  if (!title, !directors, !releaseDate, !rating, !runTime, !genres) {
return response.status(404).send('The following fields are required: title, directors, releaseDate, rating, runTime, genres')
  }
  const newMovie = {
    title, directors, releaseDate, rating, runTime, genres
  }

  movies.push(newMovie)

  return response.status(201).send(newMovie)
}

module.exports = {
  error, getAll, getByTitleOrDirector, createNew
}
