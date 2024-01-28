const API_KEY = 'de11c0d5'

export const searchMovies = async ({ search }) => {
  if (search === '') return null

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const data = await response.json()

    const movies = data.Search

    const mappedMovies = movies?.map(movie => {
      return {
        id: movie.imdbID,
        title: movie.Title,
        poster: movie.Poster,
        year: movie.Year
      }
    })

    return mappedMovies
  } catch (error) {
    throw new Error('Error while searching movies')
  }
}
