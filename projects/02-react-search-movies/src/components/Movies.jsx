export const ListOfMovies = ({ movies }) => {
  return (
    <ul className='movies'>
      {
        movies.map(movie => (
          <li key={movie.id} className='movie'>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={`Image of ${movie.Title}`} />
          </li>
        ))
      }
    </ul>
  )
}

export const MovieNotFound = () => {
  return (
    <p>No movies found</p>
  )
}

export const Movies = ({ movies }) => {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <MovieNotFound />

  )
}
